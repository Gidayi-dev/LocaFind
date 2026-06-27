// src/app/components/Boda/BodaCard.jsx
"use client";

function distLabel(d) {
  return d < 1 ? `${Math.round(d * 1000)}m` : `${d.toFixed(1)}km`;
}

export default function BodaCard({ rider, onRequest }) {
  const { name, initials, dist, rating, trips, available, speciality, phone } = rider;

  return (
    <div
      className="rounded-xl px-3 py-3 flex items-center gap-3 transition-all"
      style={{
        background: "#FFFFFF",
        border: "0.5px solid #e0e4e5",
        opacity: available ? 1 : 0.6,
      }}
      onMouseOver={(e) => available && (e.currentTarget.style.borderColor = "#3B3438")}
      onMouseOut={(e) => (e.currentTarget.style.borderColor = "#e0e4e5")}
    >
      {/* Avatar */}
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
        style={{ background: available ? "#7C605A" : "#c5cdd0", color: "#fff" }}
      >
        {initials}
      </div>

      {/* Name + meta + tags — all inline */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          <p className="text-sm font-medium truncate" style={{ color: "#3B3539" }}>{name}</p>
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: available ? "#2DBA67" : "#D65A5A" }}
          />
          <span className="text-xs flex-shrink-0" style={{ color: available ? "#2DBA67" : "#D65A5A" }}>
            {available ? "Available" : "On a trip"}
          </span>
        </div>
        <div className="flex items-center flex-wrap gap-1.5">
          <span className="text-xs" style={{ color: "#5F6368" }}>
            {distLabel(dist)} · ⭐ {rating} · {trips} trips
          </span>
          {speciality.map((s) => (
            <span
              key={s}
              className="text-xs px-1.5 py-0.5 rounded-full"
              style={{ background: "#3B343810", color: "#5F6368" }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <a
          href={`tel:${phone}`}
          aria-label="Call rider"
          className="w-8 h-8 rounded-full flex items-center justify-center transition hover:opacity-70"
          style={{ border: "0.5px solid #e0e4e5", color: "#5F6368", background: "#fff" }}
        >
          {/* phone icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 5.61 5.61l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
        <a
          href={`https://wa.me/254${phone.slice(1)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp rider"
          className="w-8 h-8 rounded-full flex items-center justify-center transition hover:opacity-70"
          style={{ border: "0.5px solid #25D36640", color: "#25D366", background: "#fff" }}
        >
          {/* whatsapp icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
        </a>
        <button
          onClick={() => available && onRequest(rider)}
          disabled={!available}
          className="text-xs font-medium px-3 py-1.5 rounded-full transition"
          style={{
            background: available ? "#3B3438" : "#c5cdd0",
            color: "#fff",
            border: "none",
            cursor: available ? "pointer" : "not-allowed",
          }}
        >
          Request
        </button>
      </div>
    </div>
  );
}
