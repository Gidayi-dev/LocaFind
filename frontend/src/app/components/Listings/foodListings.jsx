
"use client";

import { useState, useMemo } from "react";
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
    <section className="min-h-screen bg-gray-50">

      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
        <button className="text-sm text-gray-500 flex items-center gap-1 hover:text-gray-800">
          ← Back
        </button>
        <div className="flex-1" />
        <span className="text-sm font-semibold text-gray-800">{category}</span>
      </div>

      {/* Search */}
      <div className="px-4 pt-4">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search restaurants, kibandas, shops..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Meta row */}
      <div className="px-4 pt-3 pb-1 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-gray-800">{results.length}</span> vendors nearby
        </p>
        <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-medium">
          📍 Nairobi CBD
        </span>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`whitespace-nowrap text-xs font-medium px-3 py-1.5 rounded-full border transition ${
              filter === f.key
                ? "bg-emerald-700 text-white border-emerald-700"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
            }`}
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
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">🍽️</p>
            <p className="text-sm">No vendors match your search</p>
          </div>
        )}
      </div>

    </section>
  );
}