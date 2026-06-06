"use client";

// Healthcare config
const healthcareConfig = {
  hospital: { label: "Hospital",              icon: "🏥", tagClass: "bg-emerald-50 text-emerald-700",  iconClass: "bg-emerald-50 text-emerald-700"  },
  pharmacy: { label: "Pharmacy",              icon: "💊", tagClass: "bg-blue-50 text-blue-700",        iconClass: "bg-blue-50 text-blue-700"        },
  clinic:   { label: "Clinic",                icon: "🩺", tagClass: "bg-amber-50 text-amber-700",      iconClass: "bg-amber-50 text-amber-700"      },
  chp:      { label: "Community Health Post", icon: "🩹", tagClass: "bg-pink-50 text-pink-700",        iconClass: "bg-pink-50 text-pink-700"        },
};

// Food config
const foodConfig = {
  restaurant:  { label: "Restaurant",  icon: "🍽️", tagClass: "bg-orange-50 text-orange-700",   iconClass: "bg-orange-50 text-orange-700"   },
  kibanda:     { label: "Kibanda",      icon: "🍛",  tagClass: "bg-rose-50 text-rose-700",       iconClass: "bg-rose-50 text-rose-700"       },
  mama_mboga:  { label: "Mama Mboga",   icon: "🥦",  tagClass: "bg-emerald-50 text-emerald-700", iconClass: "bg-emerald-50 text-emerald-700" },
  supermarket: { label: "Supermarket",  icon: "🛒",  tagClass: "bg-blue-50 text-blue-700",       iconClass: "bg-blue-50 text-blue-700"       },
  market:      { label: "Market",       icon: "🏬",  tagClass: "bg-purple-50 text-purple-700",   iconClass: "bg-purple-50 text-purple-700"   },
  wholesale:   { label: "Wholesale",    icon: "📦",  tagClass: "bg-teal-50 text-teal-700",       iconClass: "bg-teal-50 text-teal-700"       },
  farm:        { label: "Farm",         icon: "🌾",  tagClass: "bg-lime-50 text-lime-700",       iconClass: "bg-lime-50 text-lime-700"       },
  local_shop:  { label: "Local Shop",   icon: "🏪",  tagClass: "bg-yellow-50 text-yellow-700",   iconClass: "bg-yellow-50 text-yellow-700"   },
  hotel:       { label: "Hotel",        icon: "🏨",  tagClass: "bg-indigo-50 text-indigo-700",   iconClass: "bg-indigo-50 text-indigo-700"   },
};

const PRICE_LABEL = { budget: "Ksh", mid: "Ksh Ksh", premium: "Ksh Ksh Ksh" };

function distLabel(d) {
  return d < 1 ? `${Math.round(d * 1000)}m` : `${d.toFixed(1)}km`;
}

export default function ListingCard({ listing, category = "healthcare" }) {
  const configMap = category === "food" ? foodConfig : healthcareConfig;
  const config = configMap[listing.type] || Object.values(configMap)[0];

  // food-specific fields
  const isFood = category === "food";
  const stockDisplay = isFood
    ? (Array.isArray(listing.stock) ? listing.stock.join(" · ") : listing.stock)
    : listing.services?.join(" · ");

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 hover:border-gray-300 transition-all">

      {/* Top row */}
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${config.iconClass}`}>
          {config.icon}
        </div>

        {/* Name + address + tags */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="font-semibold text-gray-900 truncate">{listing.name}</p>
            {isFood && listing.verified && (
              <span className="text-emerald-600 text-xs" title="Verified">✔</span>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-0.5 mb-2">📍 {listing.sub}</p>
          <div className="flex flex-wrap gap-1.5">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${config.tagClass}`}>
              {config.label}
            </span>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${listing.open ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"}`}>
              {listing.open ? "Open now" : listing.hours}
            </span>
            {/* Healthcare extras */}
            {!isFood && listing.emergency && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-50 text-red-600">
                🚑 24hr
              </span>
            )}
            {/* Food extras */}
            {isFood && listing.delivery && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                🛵 Delivery
              </span>
            )}
            {isFood && listing.price && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-50 text-gray-600">
                {PRICE_LABEL[listing.price]}
              </span>
            )}
          </div>
        </div>

        {/* Distance + rating */}
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <p className="text-xs text-gray-500">
            📍 <span className="font-semibold text-gray-800">{distLabel(listing.dist)}</span>
          </p>
          <p className="text-xs text-gray-400">⭐ {listing.rating}</p>
        </div>
      </div>

      {/* Stock / services */}
      {stockDisplay && (
        <p className="text-xs text-gray-400 mt-3 leading-relaxed">{stockDisplay}</p>
      )}

      {/* Action buttons */}
      <div className="flex gap-2 mt-3 pt-3 border-t border-gray-50">
        <button className="flex-1 text-xs font-medium py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
          🗺 Directions
        </button>
        
          <a href={`tel:${listing.phone}`}
          className="flex-1 text-xs font-medium py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition text-center"
        >
          📞 Call
        </a>
        <button className="flex-1 text-xs font-medium py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition">
          View profile
        </button>
      </div>

    </div>
  );
}