// src/app/components/Boda/BodaHero.jsx
"use client";
import { useState } from "react";
import { Bike } from "lucide-react";
import BodaRequestModal from "./BodaRequestModal";

export default function BodaHero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Nav bar */}
      <div
        className="px-4 py-3 flex items-center gap-3 border-b"
        style={{ background: "#3F3A44", borderColor: "#4D4750" }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "#7C605A" }}
        >
          <Bike size={18} color="#fff" />
        </div>
        <div>
          <p className="text-sm font-medium" style={{ color: "#fff" }}>Boda Boda</p>
          <p className="text-xs" style={{ color: "#D9E0E1", opacity: 0.7 }}>Nairobi CBD · 12 riders nearby</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full" style={{ background: "#2DBA67" }} />
          <span className="text-xs font-medium" style={{ color: "#2DBA67" }}>Live</span>
        </div>
      </div>

      {/* Hero */}
      <div className="px-4 pt-5 pb-6" style={{ background: "#3B3438" }}>
        <p className="text-2xl font-semibold leading-snug mb-1" style={{ color: "#fff" }}>
          Need something done<br />
          <span style={{ color: "#7C605A" }}>right now?</span>
        </p>
        <p className="text-sm mb-4" style={{ color: "#D9E0E1", opacity: 0.75 }}>
          Errands, pickups, deliveries — connect to a rider near you
        </p>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition hover:opacity-90"
          style={{ background: "#fff", color: "#3B3438" }}
        >
          <Bike size={16} />
          Request a boda
        </button>
      </div>

      {open && <BodaRequestModal onClose={() => setOpen(false)} />}
    </>
  );
}
