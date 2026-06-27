"use client";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import ListingCard from "./ListingCard";
import { foodVendors } from "@/app/data/data";

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

export default function FoodListings({ category = "Food & Vendors" }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const results = useMemo(() => {
    return foodVendors
      .filter((l) => {
        const matchSearch =
          l.name.toLowerCase().includes(search.toLowerCase()) ||
          l.stock.some((s) => s.toLowerCase().includes(search.toLowerCase()));
        const matchFilter =
          filter === "all"      ? true :
          filter === "open"     ? l.open :
          filter === "delivery" ? l.delivery :
          l.type === filter;
        return matchSearch && matchFilter;
      })
      .sort((a, b) => a.dist - b.dist);
  }, [search, filter]);

  return (
    <section className="min-h-screen" style={{ background: "#D9E0E1" }}>

      {/* Top bar */}
      <div
        className="px-4 py-3 flex items-center gap-3 border-b"
        style={{ background: "#3F3A44", borderColor: "#4D4750" }}
      >
        <button 
        onClick={() => router.back()}
        className="text-sm flex items-center gap-1 hover:opacity-80 transition" style={{ color: "#D9E0E1" }}>
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
            style={{
              background: "#FFFFFF",
              borderColor: "#c5cdd0",
              color: "#3B3539",
              "--tw-ring-color": "#7C605A",
            }}
            onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #7C605A55")}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
        </div>
      </div>

      {/* Meta row */}
      <div className="px-4 pt-3 pb-1 flex items-center justify-between">
        <p className="text-sm" style={{ color: "#5F6368" }}>
          <span className="font-semibold" style={{ color: "#3B3539" }}>{results.length}</span> vendors nearby
        </p>
        <span
          className="text-xs px-3 py-1 rounded-full font-medium"
          style={{ background: "#2DBA6720", color: "#2DBA67" }}
        >
          📍 Nairobi CBD
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
        {results.length > 0 ? (
          results.map((listing) => (
            <ListingCard key={listing.id} listing={listing} category="food" />
          ))
        ) : (
          <div className="text-center py-16" style={{ color: "#5F6368" }}>
            <p className="text-4xl mb-3">🍽️</p>
            <p className="text-sm">No vendors match your search</p>
          </div>
        )}
      </div>

    </section>
  );
}