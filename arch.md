
# 1 — Big-picture architecture (overview)

```
[Mobile/Web Client] <--> [API Gateway / Auth] <--> [Backend Services: Search, Listings, User, Verification, Payments]
                                      |
                                      v
                                 [Postgres + PostGIS]
                                      |
                                      v
                        [Redis cache]   [Object Storage (S3)]   [Background Jobs (Bull/Redis)]
                                      |
                                      v
                              [Monitoring / Logging]
```

Components:

* Clients: PWA (React) + lightweight mobile (React Native later). PWA to support offline & low-data.
* API Gateway: single entrypoint (Express with rate-limiting + JWT).
* Services (monolithic or modular microservices depending on scope): Search (geo queries), Listings (CRUD), User, Verification (crowd moderation), Payments (M-Pesa integration).
* Database: PostgreSQL with PostGIS extension for geospatial queries.
* Cache: Redis for hot results and rate-limits.
* Storage: S3-compatible for images/media.
* Background Worker: queue for verification, geocoding, notifications.
* Analytics & monitoring: Prometheus / Grafana or hosted equivalents.

# 2 — Key architectural decisions & why

1. **Postgres + PostGIS**: accurate, fast geo queries (radius search, nearest neighbor). Use GiST / KNN-GiST indexes for low-latency `ORDER BY ST_Distance`.
2. **PWA first**: low-data, installable, offline caching via Service Worker — best for Kenyan use-case and quick prototyping.
3. **Server-side geocoding**: accept coordinates from client; reverse geocode optionally for addresses. Store geometry points only; keep normalized address fields.
4. **Crowdsourced verification pipeline**: allow users to add listings instantly; mark as `unverified`; verification worker handles confirmations (multiple user confirmations OR owner verification flow).
5. **No heavy login requirement**: frictionless discovery — optional sign-in for adding/claiming business, saving favorites, reporting.
6. **M-Pesa via adapter service**: keep payment integration isolated in a Payments service for security and testing.

# 3 — Data model (core tables) — Postgres + PostGIS types

```sql
-- users
users (
  id UUID PRIMARY KEY,
  phone VARCHAR UNIQUE,            -- optional, used for verification
  name TEXT,
  role TEXT,                       -- guest|user|vendor|admin
  created_at timestamptz,
  last_seen timestamptz
);

-- listings (vendors / shops)
listings (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT,                   -- e.g. grocery, pharmacy, repairs
  description TEXT,
  phone VARCHAR,
  owner_user_id UUID REFERENCES users(id),
  geom geometry(Point, 4326) NOT NULL, -- PostGIS point (lon/lat)
  address TEXT,
  radius_meters int DEFAULT 50,    -- optional service radius
  verified BOOLEAN DEFAULT FALSE,
  verification_score INT DEFAULT 0,
  created_at timestamptz,
  updated_at timestamptz,
  photo_url TEXT
);
CREATE INDEX idx_listings_geom ON listings USING GIST (geom);
CREATE INDEX idx_listings_category ON listings (category);

-- listing_suggestions (crowdsourced)
listing_suggestions (
  id UUID PRIMARY KEY,
  suggested_by UUID REFERENCES users(id),
  payload JSONB,
  status TEXT DEFAULT 'pending', -- pending|approved|rejected
  created_at timestamptz
);

-- favorites / saved
favorites (id, user_id, listing_id, created_at)

-- reports
reports (id, user_id, listing_id, reason TEXT, created_at)

-- verification_logs
verification_logs (id, listing_id, user_id, action TEXT, created_at)

-- optionally: search_analytics, impressions, clicks
```

# 4 — Geo search patterns & example queries

Use KNN nearest queries and radius filters.

Nearest N results (user provided lat/lon):

```sql
SELECT id, name, category, phone, address,
       ST_Distance(geom::geography, ST_MakePoint($lon, $lat)::geography) AS distance_m
FROM listings
WHERE verified = true
ORDER BY geom <-> ST_SetSRID(ST_MakePoint($lon, $lat), 4326)
LIMIT 20;
```

Within radius (e.g., 500m):

```sql
SELECT id, name, ...
FROM listings
WHERE ST_DWithin(geom::geography, ST_SetSRID(ST_MakePoint($lon, $lat),4326)::geography, 500)
AND verified = true
ORDER BY ST_Distance(geom::geography, ST_SetSRID(ST_MakePoint($lon, $lat),4326)::geography)
```

Cache hot queries in Redis keyed by `lat:lon:radius:cat` discretized to a grid to avoid cache explosion.

# 5 — API surface (REST sketch)

Auth: JWT for signed users. Minimal endpoints for frictionless use.

Public:

* `GET /api/v1/search?lat={}&lon={}&radius=500&category=grocery` → list of nearby
* `GET /api/v1/listings/{id}` → listing details
* `POST /api/v1/suggest` → suggest new listing (payload: name, lat, lon, category, phone, photo)
* `POST /api/v1/report` → report a listing

Authenticated:

* `POST /api/v1/listings` → create/claim listing
* `PUT /api/v1/listings/{id}` → update (owner only)
* `POST /api/v1/listings/{id}/verify-request` → request owner verification
* `POST /api/v1/favorites` → save listing
* `POST /api/v1/payments/mpesa/initiate` → start payment flow (if used)

Responses: small, include `distance_m` and `estimated_walk_time_minutes` (computed).

# 6 — Offline-first & sync strategy

* PWA caches static assets + recent search results via Service Worker.
* When user is offline and submits a suggestion, store locally (`IndexedDB`) and enqueue sync job. Sync worker sends to `POST /api/v1/suggest` when online.
* Conflict rules: suggestions are append-only; edits require owner claim flow.

# 7 — Verification & trust model

* New listing → `verified=false`. Show in app with an “unverified” badge and only to local radius under lenient ranking.
* Verification sources:

  * Multiple unique local confirmations (e.g., 3 different users within area confirm)
  * Owner claim via phone OTP: owner claims listing by verifying phone and uploading proof (photo of shop or ID).
  * Admin manual review (rare).
* Maintain `verification_score` and `verification_logs`.

# 8 — Payments & monetization hooks

* Monetize later via:

  * Featured boosts: `featured_until` timestamp on listings for promoted placement.
  * Small subscription for vendors.
  * Transaction fees for in-app orders (if added).
* Payment design: keep M-Pesa adapter isolated. Use server-to-server callbacks (safely store credentials). Save payment events in DB.

# 9 — Security & privacy

* Don't store precise user location long-term unless user opts in. If you store, store with timestamp and purge window (e.g., 7 days).
* Protect endpoints with rate-limiting and abuse detection.
* Validate and sanitize all user-submitted data. Use signed URLs for image upload (S3 presigned).
* Phone verification via OTP for vendor claims. Limit attempts.

# 10 — Observability & ops

* Use structured logs (JSON) and central log aggregation.
* Track metrics: search latency, suggestions per area, verification rate, DAU, cache hit ratio.
* Use health checks (readiness/liveness).
* Start on Docker Compose for local dev; deploy to a managed host (Railway/Vercel for frontend + Render/Heroku/Railway for backend) or an EKS/GKE cluster for scale.

# 11 — Phased roadmap (MVP → scale)

MVP (2–6 weeks):

* PWA with search by geolocation, category filter.
* Backend: Node + Express, Postgres + PostGIS, Redis.
* Add suggestions flow (append-only) and display unverified items.
* Simple UI, no login required; allow optional phone claim.

Phase 2 (1–3 months):

* Verification flows (crowd verification + owner claim via OTP).
* Caching & offline sync support.
* Featured boosts MVP (admin UI to set boosts).
* Basic analytics and monitoring.

Phase 3:

* M-Pesa integration, in-app ordering (optional).
* Mobile apps (React Native).
* Multi-city scaling + moderation tools + ML suggestions.

# 12 — Assumptions & one counterargument

Assumptions:

* Primary users are in markets with intermittent connectivity and heavy informal economy.
* Focus is proximity (≤500m) rather than broad city search.
* You’ll prioritize fast offline-first UX over map-heavy features initially.

Counterargument (be brutal): Big players already have mapping and discovery. Risk: if Locafind doesn’t rapidly secure unique local data (and a local community of contributors), it becomes a clone that users don’t adopt. Your defense: make adding and verifying listings *ridiculously* easy and reward local contributors early (social proof + small incentives). If you can’t get that hyperlocal data, product-market fit will be hard.

