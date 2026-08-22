import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

const GOOGLE_KEY = process.env.GOOGLE_PLACES_API_KEY;
const GOOGLE_NEARBY_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const GOOGLE_DETAILS_URL = 'https://maps.googleapis.com/maps/api/place/details/json';

function buildGoogleUrl(lat, lng, radius, keyword) {
  const params = new URLSearchParams({
    location: `${lat}, ${lng}`,
    radius: radius || 1000,
    key: GOOGLE_KEY,
  });
  if (keyword) params.append('keyword', keyword);
  return `${GOOGLE_NEARBY_URL}?${params}`;
}

function normalizeGoogle(place) {
  const loc = place.geometry?.location;
  return {
    id: place.place_id,
    name: place.name,
    address: place.vicinity || '',
    lat: loc?.lat || null,
    lng: loc?.lng || null,
    rating: place.rating || null,
    open: place.opening_hours?.open_now ?? null,
    category: place.types?.[0] || 'general',
    type: place.types?.[0] || 'general',
    source: 'google',
    verified: true,
    phone: null,
  };
}

function normalizeManual(listing) {
  return {
    id: listing.id,
    name: listing.name,
    address: listing.address,
    lat: listing.lat,
    lng: listing.lng,
    rating: null,
    open: listing.open,
    category: listing.category,
    type: listing.type,
    source: 'manual',
    verified: listing.verified,
    phone: listing.phone,
  };
}

function deduplicateByName(listings) {
  const seen = new Set();
  return listings.filter((l) => {
    const key = l.name.toLowerCase().trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// GET /api/places/nearby
// Query params: lat, lng, radius (metres), keyword (optional), category (optional)

router.get('/nearby', async (req, res) => {
  const { lat, lng, radius = 1000, keyword, category } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ success: false, message: 'lat and lng are required' });
  }

  // Round coordinates to 3 decimal places (~111m precision)
  // This groups nearby searches into the same cache bucket
  const roundedLat = parseFloat(lat).toFixed(3);
  const roundedLng = parseFloat(lng).toFixed(3);
  const cacheKey   = `${roundedLat}_${roundedLng}_${radius}_${category || keyword || 'all'}`;

  try {
    // 1. Check cache first
    const cached = await prisma.placeCache.findUnique({ where: { cacheKey } });

    if (cached && cached.expiresAt > new Date()) {
      console.log('Cache hit:', cacheKey);

      // Still merge with fresh manual submissions even on cache hit
      const manualResults = await getManualListings(lat, lng, radius, category);

      const merged = deduplicateByName([
        ...manualResults.map(normalizeManual),
        ...cached.results,
      ]);

      return res.json({
        success: true,
        count: merged.length,
        source: 'cache',
        results: merged,
      });
    }

    // 2. Cache miss — call Google
    console.log('Cache miss:', cacheKey);
    let googleResults = [];

    if (GOOGLE_KEY) {
      const url = buildGoogleUrl(lat, lng, radius, keyword || category);
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'OK' || data.status === 'ZERO_RESULTS') {
        googleResults = (data.results || []).map(normalizeGoogle);
      }
    }

    // 3. Store in cache — expires in 24 hours
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await prisma.placeCache.upsert({
      where:  { cacheKey },
      update: { results: googleResults, expiresAt },
      create: { cacheKey, results: googleResults, expiresAt },
    });

    // 4. Merge with manual submissions
    const manualResults = await getManualListings(lat, lng, radius, category);

    const merged = deduplicateByName([
      ...manualResults.map(normalizeManual),
      ...googleResults,
    ]);

    return res.json({
      success: true,
      count: merged.length,
      source: 'live',
      results: merged,
    });

  } catch (err) {
    console.error('Nearby search error:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch nearby places' });
  }
});

// helper — pulled out so both cache hit and miss can use it
async function getManualListings(lat, lng, radius, category) {
  const latDelta = parseFloat(radius) / 111000;
  const lngDelta = parseFloat(radius) / (111000 * Math.cos((parseFloat(lat) * Math.PI) / 180));

  const where = {
    lat: { gte: parseFloat(lat) - latDelta, lte: parseFloat(lat) + latDelta },
    lng: { gte: parseFloat(lng) - lngDelta, lte: parseFloat(lng) + lngDelta },
  };
  if (category) where.category = category;

  return prisma.listing.findMany({ where });
}

// GET /api/places/:id
// Fetch details for a single place — tries DB first, falls back to Google

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Try DB first
    const dbListing = await prisma.listing.findUnique({ where: { id } });
    if (dbListing) {
      return res.json({ success: true, result: normalizeManual(dbListing) });
    }

    // Fall back to Google Place Details
    if (GOOGLE_KEY) {
      const params = new URLSearchParams({
        place_id: id,
        fields: 'name,vicinity,geometry,rating,opening_hours,formatted_phone_number,types',
        key: GOOGLE_KEY,
      });
      const response = await fetch(`${GOOGLE_DETAILS_URL}?${params}`);
      const data = await response.json();
      if (data.status === 'OK') {
        return res.json({ success: true, result: normalizeGoogle(data.result) });
      }
    }

    return res.status(404).json({ success: false, message: 'Place not found' });
  } catch (err) {
    console.error('Place details error:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch place details' });
  }
});

// POST /api/places 
// Manual business submission — anyone can submit, verified=false until admin approves

router.post('/', async (req, res) => {
  const { name, category, type, address, lat, lng, phone, description } = req.body;

  if (!name || !category || !address || !lat || !lng) {
    return res.status(400).json({
      success: false,
      message: 'name, category, address, lat and lng are required',
    });
  }

  try {
    const listing = await prisma.listing.create({
      data: {
        name,
        category,
        type: type || category,
        address,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        phone: phone || null,
        description: description || null,
        source: 'manual',
        verified: false,
      },
    });

    return res.status(201).json({
      success: true,
      message: 'Business submitted successfully. It will appear after review.',
      listing,
    });
  } catch (err) {
    console.error('Listing create error:', err);
    return res.status(500).json({ success: false, message: 'Failed to submit business' });
  }
});

export default router;