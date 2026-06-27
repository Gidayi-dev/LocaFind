// src/app/components/Boda/BodaRequestModal.jsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, MapPin, Flag, StickyNote, Bike, DollarSign } from "lucide-react";

const ERRAND_TYPES = ["Errand", "Delivery", "Shopping run", "Document pickup", "Market run"];

export default function BodaRequestModal({ rider, onClose }) {
  const router = useRouter();
  const [pickup,  setPickup]  = useState("");
  const [dropoff, setDropoff] = useState("");
  const [note,    setNote]    = useState("");
  const [errand,  setErrand]  = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    if (!pickup || !dropoff) return;
    setLoading(true);
    // simulate match — in production this hits your backend
    setTimeout(() => {
      setLoading(false);
      onClose();
      router.push("/boda/track/ord_001");
    }, 1400);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      style={{ background: "rgba(0,0,0,0.45)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-md rounded-t-2xl p-5"
        style={{ background: "#fff" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-base font-semibold" style={{ color: "#3B3539" }}>Request a boda</p>
          <button
            onClick={onClose}
            className="hover:opacity-70 transition"
            style={{ color: "#5F6368", background: "none", border: "none", cursor: "pointer" }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Rider hint if pre-selected */}
        {rider && (
          <div
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 mb-4"
            style={{ background: "#3B343810" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
              style={{ background: "#7C605A", color: "#fff" }}
            >
              {rider.initials}
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: "#3B3539" }}>{rider.name}</p>
              <p className="text-xs" style={{ color: "#5F6368" }}>⭐ {rider.rating} · {rider.trips} trips</p>
            </div>
            <div className="ml-auto">
              <div className="w-2 h-2 rounded-full" style={{ background: "#2DBA67" }} />
            </div>
          </div>
        )}

        {/* Fields */}
        <div className="flex flex-col gap-3 mb-4">
          {/* Pickup */}
          <div className="relative">
            <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#7C605A" }} />
            <input
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Pickup location (e.g. Kencom stage)"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none"
              style={{ borderColor: "#c5cdd0", color: "#3B3539", background: "#fff" }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #7C605A44")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          {/* Dropoff */}
          <div className="relative">
            <Flag size={15} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#D65A5A" }} />
            <input
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="Drop-off or errand destination"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none"
              style={{ borderColor: "#c5cdd0", color: "#3B3539", background: "#fff" }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #7C605A44")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          {/* Note */}
          <div className="relative">
            <StickyNote size={15} className="absolute left-3 top-3" style={{ color: "#5F6368" }} />
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              placeholder="Errand details (e.g. pick up parcel from Gikomba)"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none resize-none"
              style={{ borderColor: "#c5cdd0", color: "#3B3539", background: "#fff" }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #7C605A44")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          {/* Errand type chips */}
          <div className="flex flex-wrap gap-2">
            {ERRAND_TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setErrand(errand === t ? null : t)}
                className="text-xs font-medium px-3 py-1.5 rounded-full border transition"
                style={
                  errand === t
                    ? { background: "#3B3438", color: "#fff", borderColor: "#3B3438" }
                    : { background: "#fff", color: "#5F6368", borderColor: "#c5cdd0" }
                }
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Fare estimate */}
        <div
          className="flex items-center gap-2 rounded-xl px-3 py-2.5 mb-4"
          style={{ background: "#D9E0E140", border: "1px solid #e0e4e5" }}
        >
          <DollarSign size={15} style={{ color: "#5F6368" }} />
          <p className="text-xs" style={{ color: "#5F6368" }}>
            Est. fare: <strong style={{ color: "#3B3539" }}>Ksh 80 – 150</strong> · Pay on delivery
          </p>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={!pickup || !dropoff || loading}
          className="w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition"
          style={{
            background: pickup && dropoff ? "#3B3438" : "#c5cdd0",
            color: "#fff",
            border: "none",
            cursor: pickup && dropoff ? "pointer" : "not-allowed",
          }}
        >
          <Bike size={16} />
          {loading ? "Finding nearest rider..." : "Find nearest rider"}
        </button>
      </div>
    </div>
  );
}
