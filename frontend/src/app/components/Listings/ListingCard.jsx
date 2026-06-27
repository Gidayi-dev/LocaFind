// src/app/components/Listings/ListingCard.jsx
"use client";
import { Phone, Map } from "lucide-react";

const healthcareConfig = {
  hospital: { label: "Hospital",              icon: "🏥", tagStyle: { background: "#2DBA6718", color: "#1a8f4c" } },
  pharmacy: { label: "Pharmacy",              icon: "💊", tagStyle: { background: "#3B343818", color: "#3B3438" } },
  clinic:   { label: "Clinic",                icon: "🩺", tagStyle: { background: "#7C605A18", color: "#7C605A" } },
  chp:      { label: "Community Health Post", icon: "🩹", tagStyle: { background: "#D65A5A18", color: "#D65A5A" } },
};

const foodConfig = {
  restaurant:  { label: "Restaurant",  icon: "🍽️", tagStyle: { background: "#7C605A18", color: "#7C605A" } },
  kibanda:     { label: "Kibanda",      icon: "🍛",  tagStyle: { background: "#D65A5A18", color: "#c44"    } },
  mama_mboga:  { label: "Mama Mboga",   icon: "🥦",  tagStyle: { background: "#2DBA6718", color: "#1a8f4c" } },
  supermarket: { label: "Supermarket",  icon: "🛒",  tagStyle: { background: "#3B343818", color: "#3B3438" } },
  market:      { label: "Market",       icon: "🏬",  tagStyle: { background: "#3F3A4420", color: "#3F3A44" } },
  wholesale:   { label: "Wholesale",    icon: "📦",  tagStyle: { background: "#3B343812", color: "#5F6368" } },
  farm:        { label: "Farm",         icon: "🌾",  tagStyle: { background: "#2DBA6712", color: "#1a8f4c" } },
  local_shop:  { label: "Local Shop",   icon: "🏪",  tagStyle: { background: "#7C605A12", color: "#7C605A" } },
  hotel:       { label: "Hotel",        icon: "🏨",  tagStyle: { background: "#3F3A4418", color: "#3F3A44" } },
};

const PRICE_LABEL = { budget: "Ksh", mid: "Ksh Ksh", premium: "Ksh Ksh Ksh" };

function distLabel(d) {
  return d < 1 ? `${Math.round(d * 1000)}m` : `${d.toFixed(1)}km`;
}

export default function ListingCard({ listing, category = "healthcare" }) {
  const configMap = category === "food" ? foodConfig : healthcareConfig;
  const config    = configMap[listing.type] || Object.values(configMap)[0];
  const isFood    = category === "food";

  const stockDisplay = isFood
    ? (Array.isArray(listing.stock) ? listing.stock.join(" · ") : listing.stock)
    : listing.services?.join(" · ");

  return (
    <div
      className="rounded-2xl p-4 transition-all"
      style={{
        background: "#FFFFFF",
        border: "1px solid #e0e4e5",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}
      onMouseOver={(e) => (e.currentTarget.style.borderColor = "#3B3438")}
      onMouseOut={(e) => (e.currentTarget.style.borderColor = "#e0e4e5")}
    >
      {/* Main row */}
      <div className="flex items-start gap-3">

        {/* Icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
          style={config.tagStyle}
        >
          {config.icon}
        </div>

        {/* Name + meta */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <p className="font-medium text-sm truncate" style={{ color: "#3B3539" }}>{listing.name}</p>
            {isFood && listing.verified && (
              <span style={{ color: "#2DBA67", fontSize: "12px", flexShrink: 0 }}>✔</span>
            )}
          </div>

          <p className="text-xs mb-1.5" style={{ color: "#5F6368" }}>
            📍 {listing.sub}
          </p>

          {/* Badges row */}
          <div className="flex flex-wrap gap-1">
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={config.tagStyle}
            >
              {config.label}
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={
                listing.open
                  ? { background: "#2DBA6718", color: "#1a8f4c" }
                  : { background: "#D65A5A18", color: "#D65A5A" }
              }
            >
              {listing.open ? "Open" : listing.hours}
            </span>
            {!isFood && listing.emergency && (
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "#D65A5A18", color: "#D65A5A" }}>
                24hr
              </span>
            )}
            {isFood && listing.delivery && (
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "#3B343812", color: "#3B3438" }}>
                Delivery
              </span>
            )}
            {isFood && listing.price && (
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "#D9E0E1", color: "#5F6368" }}>
                {PRICE_LABEL[listing.price]}
              </span>
            )}
          </div>
        </div>

        {/* Right — distance + rating + actions */}
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          <div className="text-right">
            <p className="text-xs font-medium" style={{ color: "#3B3539" }}>{distLabel(listing.dist)}</p>
            <p className="text-xs" style={{ color: "#5F6368" }}>⭐ {listing.rating}</p>
          </div>

          {/* Compact action buttons */}
          <div className="flex items-center gap-1.5">
            <button
              title="Directions"
              className="w-7 h-7 rounded-full flex items-center justify-center border transition hover:opacity-75"
              style={{ borderColor: "#e0e4e5", color: "#5F6368", background: "#fff" }}
            >
              <Map size={13} />
            </button>
            <a
              href={`tel:${listing.phone}`}
              title="Call"
              className="w-7 h-7 rounded-full flex items-center justify-center border transition hover:opacity-75"
              style={{ borderColor: "#e0e4e5", color: "#5F6368", background: "#fff" }}
            >
              <Phone size={13} />
            </a>
            <button
              className="px-2.5 py-1 rounded-full text-xs font-medium transition hover:opacity-90"
              style={{ background: "#3B3438", color: "#fff", border: "none", cursor: "pointer" }}
            >
              View
            </button>
          </div>
        </div>

      </div>

      {/* Stock / services — subtle, below the fold */}
      {stockDisplay && (
        <p
          className="text-xs mt-3 leading-relaxed"
          style={{
            color: "#5F6368",
            borderTop: "1px solid #f0f2f3",
            paddingTop: "10px",
          }}
        >
          {stockDisplay}
        </p>
      )}
    </div>
  );
}
