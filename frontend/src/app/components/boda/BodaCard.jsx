// src/app/components/Boda/BodaCard.jsx
"use client";
import { Phone, MapPin } from "lucide-react";

function distLabel(d) {
  return d < 1 ? `${Math.round(d * 1000)}m` : `${d.toFixed(1)}km`;
}

export default function BodaCard({ rider, onRequest }) {
  const { name, initials, dist, rating, trips, available, speciality, phone } = rider;

  return (
    <div
      className="rounded-2xl p-4 transition-all"
      style={{
        background: "#FFFFFF",
        border: "1px solid #e0e4e5",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
      onMouseOver={(e) => (e.currentTarget.style.borderColor = "#3B3438")}
      onMouseOut={(e) => (e.currentTarget.style.borderColor = "#e0e4e5")}
    >
      {/* Top row */}
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0"
          style={{ background: "#7C605A", color: "#fff" }}
        >
          {initials}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <p className="font-semibold text-sm truncate" style={{ color: "#3B3539" }}>{name}</p>
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: available ? "#2DBA67" : "#D65A5A" }}
            />
            <span className="text-xs" style={{ color: available ? "#2DBA67" : "#D65A5A" }}>
              {available ? "Available" : "On a trip"}
            </span>
          </div>

          <p className="text-xs mb-2" style={{ color: "#5F6368" }}>
            <MapPin size={10} className="inline mr-0.5" />
            {distLabel(dist)} away &nbsp;·&nbsp; ⭐ {rating} &nbsp;·&nbsp; {trips} trips
          </p>

          <div className="flex flex-wrap gap-1.5">
            {speciality.map((s) => (
              <span
                key={s}
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ background: "#3B343812", color: "#3B3438" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div
        className="flex gap-2 mt-3 pt-3"
        style={{ borderTop: "1px solid #f0f2f3" }}
      >
        <a
          href={`tel:${phone}`}
          className="flex-1 text-xs font-medium py-2 rounded-lg border text-center transition hover:opacity-80"
          style={{ borderColor: "#c5cdd0", color: "#5F6368", background: "#fff" }}
        >
          <Phone size={12} className="inline mr-1" />
          Call
        </a>
        <a
          href={`https://wa.me/254${phone.slice(1)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-xs font-medium py-2 rounded-lg border text-center transition hover:opacity-80"
          style={{ borderColor: "#25D366", color: "#25D366", background: "#fff" }}
        >
          WhatsApp
        </a>
        <button
          onClick={() => onRequest(rider)}
          className="flex-1 text-xs font-medium py-2 rounded-lg transition hover:opacity-90"
          style={{ background: "#3B3438", color: "#fff", border: "none" }}
        >
          Request →
        </button>
      </div>
    </div>
  );
}
