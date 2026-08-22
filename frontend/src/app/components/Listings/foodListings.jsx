"use client";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import ListingCard from "./ListingCard";

const FILTERS = [
  { key: "all",         label: "All" },
  { key: "restaurant",  label: "Restaurants" },
  { key: "kibanda",     label: "Kibandas" },
  { key: "mama_mboga",  label: "Mama Mboga" },
  { key: "supermarket", label: "Supermarkets" },
  { key: "market",      label: "Markets" },
  { key: "wholesale",   label: "Wholesale" },
  { key: "farm",        label: "Farms" },
  { key: "local_shop",  label: "Local Shops" },
  { key: "open",        label: "Open Now" },
  { key: "delivery",    label: "Delivery" },
];

const API = "http://localhost:5000/api/places/nearby";

export default function FoodListings({ category = "Food & Vendors" }) {
  const router = useRouter();

  const [listings, setListings]   = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);
  const [location, setLocation]   = useState(null);
  const [areaLabel, setAreaLabel] = useState("Your area");
  const [search, setSearch]       = useState("");
  const [filter, setFilter]       = useState("all");

  // Get user location 
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({ lat: -1.2921, lng: 36.8219 });
      setAreaLabel("Nairobi CBD");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setAreaLabel("Your location");
      },
      () => {
        setLocation({ lat: -1.2921, lng: 36.8219 });
        setAreaLabel("Nairobi CBD");
      }
    );
  }, []);

  // 2. Fetch listings once we have location
  useEffect(() => {
    if (!location) return;

    async function fetchListings() {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams({
          lat:      location.lat,
          lng:      location.lng,
          radius:   2000,
          category: "food",
        });

        const res  = await fetch(`${API}?${params}`);
        const data = await res.json();

        if (!data.success) throw new Error(data.message || "Failed to fetch");

        setListings(data.results || []);
      } catch (err) {
        console.error(err);
        setError("Could not load nearby vendors. Check your connection.");
      } finally {
        setLoading(false);
      }
    }

    fetchListings();
  }, [location]);

  // Client-side filter + search on live data
  const results = useMemo(() => {
    return listings.filter((l) => {
      const stock = Array.isArray(l.stock) ? l.stock : [];
      const matchSearch =
        l.name.toLowerCase().includes(search.toLowerCase()) ||
        stock.some((s) => s.toLowerCase().includes(search.toLowerCase())) ||
        l.address?.toLowerCase().includes(search.toLowerCase());

      const matchFilter =
        filter === "all"      ? true :
        filter === "open"     ? l.open :
        filter === "delivery" ? l.delivery :
        l.type?.includes(filter);

      return matchSearch && matchFilter;
    });
  }, [listings, search, filter]);

  // UI 
  return (
    <section className="min-h-screen" style={{ background: "#D9E0E1" }}>

      {/* Top bar */}
      <div
        className="px-4 py-3 flex items-center gap-3 border-b"
        style={{ background: "#3F3A44", borderColor: "#4D4750" }}
      >
        <button
          onClick={() => router.back()}
          className="text-sm flex items-center gap-1 hover:opacity-80 transition"
          style={{ color: "#D9E0E1", background: "none", border: "none", cursor: "pointer" }}
        >
          ← Back
        </button>
        <div className="flex-1" />
        <span className="text-sm font-semibold" style={{ color: "#FFFFFF" }}>{category}</span>
      </div>

      {/* Search */}
      <div className="px-4 pt-4">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#5F6368" }}>🔍</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search restaurants, kibandas, shops..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none"
            style={{ background: "#FFFFFF", borderColor: "#c5cdd0", color: "#3B3539" }}
            onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #7C605A55")}
            onBlur={(e)  => (e.target.style.boxShadow = "none")}
          />
        </div>
      </div>

      {/* Meta row */}
      <div className="px-4 pt-3 pb-1 flex items-center justify-between">
        <p className="text-sm" style={{ color: "#5F6368" }}>
          {loading ? (
            "Finding vendors near you..."
          ) : (
            <>
              <span className="font-semibold" style={{ color: "#3B3539" }}>{results.length}</span> vendors nearby
            </>
          )}
        </p>
        <span
          className="text-xs px-3 py-1 rounded-full font-medium"
          style={{ background: "#2DBA6720", color: "#2DBA67" }}
        >
          📍 {areaLabel}
        </span>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className="whitespace-nowrap text-xs font-medium px-3 py-1.5 rounded-full border transition"
            style={
              filter === f.key
                ? { background: "#3B3438", color: "#FFFFFF", borderColor: "#3B3438" }
                : { background: "#FFFFFF", color: "#5F6368", borderColor: "#c5cdd0" }
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="px-4 flex flex-col gap-3 pb-8">

        {/* Loading skeleton */}
        {loading && (
          Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl p-4 animate-pulse"
              style={{ background: "#fff", height: "80px" }}
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl" style={{ background: "#e0e4e5" }} />
                <div className="flex-1 flex flex-col gap-2 justify-center">
                  <div className="h-3 rounded-full w-2/3" style={{ background: "#e0e4e5" }} />
                  <div className="h-2 rounded-full w-1/2" style={{ background: "#e0e4e5" }} />
                </div>
              </div>
            </div>
          ))
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center py-16" style={{ color: "#D65A5A" }}>
            <p className="text-4xl mb-3">⚠️</p>
            <p className="text-sm">{error}</p>
            <button
              onClick={() => setLocation({ ...location })}
              className="mt-4 text-xs px-4 py-2 rounded-full border transition hover:opacity-80"
              style={{ borderColor: "#D65A5A", color: "#D65A5A" }}
            >
              Retry
            </button>
          </div>
        )}

        {/* Results */}
        {!loading && !error && results.length > 0 &&
          results.map((listing) => (
            <ListingCard key={listing.id} listing={listing} category="food" />
          ))
        }

        {/* Empty state */}
        {!loading && !error && results.length === 0 && (
          <div className="text-center py-16" style={{ color: "#5F6368" }}>
            <p className="text-4xl mb-3">🍽️</p>
            <p className="text-sm">No vendors match your search</p>
          </div>
        )}

      </div>
    </section>
  );
}