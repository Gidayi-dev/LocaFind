"use client";

const healthcareConfig = {
  hospital: { label: "Hospital",              icon: "🏥", tagStyle: { background: "#2DBA6718", color: "#1a8f4c" } },
  pharmacy: { label: "Pharmacy",              icon: "💊", tagStyle: { background: "#3B343818", color: "#3B3438" } },
  clinic:   { label: "Clinic",                icon: "🩺", tagStyle: { background: "#7C605A18", color: "#7C605A" } },
  chp:      { label: "Community Health Post", icon: "🩹", tagStyle: { background: "#D65A5A18", color: "#D65A5A" } },
};

const foodConfig = {
  restaurant:  { label: "Restaurant",  icon: "🍽️", tagStyle: { background: "#7C605A18", color: "#7C605A" } },
  kibanda:     { label: "Kibanda",      icon: "🍛",  tagStyle: { background: "#D65A5A18", color: "#c44" }    },
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
  const config = configMap[listing.type] || Object.values(configMap)[0];

  const isFood = category === "food";
  const stockDisplay = isFood
    ? (Array.isArray(listing.stock) ? listing.stock.join(" · ") : listing.stock)
    : listing.services?.join(" · ");

  return (
    <div
      className="rounded-2xl p-4 transition-all"
      style={{
        background: "#FFFFFF",
        border: "1px solid #e0e4e5",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
      onMouseOver={(e) => (e.currentTarget.style.borderColor = "#c5cdd0")}
      onMouseOut={(e) => (e.currentTarget.style.borderColor = "#e0e4e5")}
    >

      {/* Top row */}
      <div className="flex items-start gap-3">

        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
          style={config.tagStyle}
        >
          {config.icon}
        </div>

        {/* Name + address + tags */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="font-semibold truncate" style={{ color: "#3B3539" }}>{listing.name}</p>
            {isFood && listing.verified && (
              <span style={{ color: "#2DBA67", fontSize: "13px" }} title="Verified">✔</span>
            )}
          </div>
          <p className="text-xs mt-0.5 mb-2" style={{ color: "#5F6368" }}>📍 {listing.sub}</p>

          <div className="flex flex-wrap gap-1.5">
            {/* Type badge */}
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={config.tagStyle}
            >
              {config.label}
            </span>

            {/* Open / closed */}
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={
                listing.open
                  ? { background: "#2DBA6718", color: "#1a8f4c" }
                  : { background: "#D65A5A18", color: "#D65A5A" }
              }
            >
              {listing.open ? "Open now" : listing.hours}
            </span>

            {/* Healthcare: emergency */}
            {!isFood && listing.emergency && (
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ background: "#D65A5A18", color: "#D65A5A" }}
              >
                🚑 24hr
              </span>
            )}

            {/* Food: delivery */}
            {isFood && listing.delivery && (
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ background: "#3B343812", color: "#3B3438" }}
              >
                🛵 Delivery
              </span>
            )}

            {/* Food: price */}
            {isFood && listing.price && (
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ background: "#D9E0E1", color: "#5F6368" }}
              >
                {PRICE_LABEL[listing.price]}
              </span>
            )}
          </div>
        </div>

        {/* Distance + rating */}
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <p className="text-xs" style={{ color: "#5F6368" }}>
            📍 <span className="font-semibold" style={{ color: "#3B3539" }}>{distLabel(listing.dist)}</span>
          </p>
          <p className="text-xs" style={{ color: "#5F6368" }}>⭐ {listing.rating}</p>
        </div>
      </div>

      {/* Stock / services */}
      {stockDisplay && (
        <p className="text-xs mt-3 leading-relaxed" style={{ color: "#5F6368" }}>
          {stockDisplay}
        </p>
      )}

      {/* Action buttons */}
      <div
        className="flex gap-2 mt-3 pt-3"
        style={{ borderTop: "1px solid #f0f2f3" }}
      >
        <button
          className="flex-1 text-xs font-medium py-2 rounded-lg border transition hover:opacity-80"
          style={{ borderColor: "#c5cdd0", color: "#5F6368", background: "#FFFFFF" }}
        >
          🗺 Directions
        </button>
        <a
          href={`tel:${listing.phone}`}
          className="flex-1 text-xs font-medium py-2 rounded-lg border transition text-center hover:opacity-80"
          style={{ borderColor: "#c5cdd0", color: "#5F6368", background: "#FFFFFF" }}
        >
          📞 Call
        </a>
        <button
          className="flex-1 text-xs font-medium py-2 rounded-lg transition hover:opacity-90"
          style={{ background: "#3B3438", color: "#FFFFFF", border: "none" }}
        >
          View profile
        </button>
      </div>

    </div>
  );
}