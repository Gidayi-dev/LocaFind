// src/app/components/Boda/BodaNearbyList.jsx
"use client";
import { useState, useMemo } from "react";
import { Bike } from "lucide-react";
import BodaCard from "./BodaCard";
import BodaRequestModal from "./BodaRequestModal";
import { bodaRiders } from "@/app/data/data";

const FILTERS = [
  { key: "all",       label: "All riders"    },
  { key: "errand",    label: "Errands"       },
  { key: "delivery",  label: "Delivery"      },
  { key: "shopping",  label: "Shopping"      },
  { key: "available", label: "Available now" },
];

export default function BodaNearbyList() {
  const [filter, setFilter]       = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRider, setSelectedRider] = useState(null);

  const results = useMemo(() => {
    return bodaRiders
      .filter((r) => {
        if (filter === "available") return r.available;
        if (filter === "all") return true;
        return r.speciality.includes(filter);
      })
      .sort((a, b) => a.dist - b.dist);
  }, [filter]);

  function handleRequest(rider) {
    setSelectedRider(rider);
    setModalOpen(true);
  }

  return (
    <section>
      {/* Filter chips */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className="whitespace-nowrap text-xs font-medium px-3 py-1.5 rounded-full border transition"
            style={
              filter === f.key
                ? { background: "#3B3438", color: "#fff", borderColor: "#3B3438" }
                : { background: "#fff", color: "#5F6368", borderColor: "#c5cdd0" }
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Count */}
      <div className="px-4 pb-2 flex items-center justify-between">
        <p className="text-sm" style={{ color: "#5F6368" }}>
          <span className="font-semibold" style={{ color: "#3B3539" }}>{results.length}</span> riders nearby
        </p>
        <span className="text-xs font-medium" style={{ color: "#2DBA67" }}>
          Updates live
        </span>
      </div>

      {/* Cards */}
      <div className="px-4 flex flex-col gap-3 pb-10">
        {results.length > 0 ? (
          results.map((rider) => (
            <BodaCard key={rider.id} rider={rider} onRequest={handleRequest} />
          ))
        ) : (
          <div className="text-center py-16" style={{ color: "#5F6368" }}>
            <Bike size={40} className="mx-auto mb-3 opacity-40" />
            <p className="text-sm">No riders match this filter</p>
          </div>
        )}
      </div>

      {modalOpen && (
        <BodaRequestModal
          rider={selectedRider}
          onClose={() => { setModalOpen(false); setSelectedRider(null); }}
        />
      )}
    </section>
  );
}
