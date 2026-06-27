// src/app/boda/track/[id]/page.jsx
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Phone, MessageCircle, ArrowLeft, Bike, CheckCircle, Clock, MapPin, Flag } from "lucide-react";

const STAGES = [
  { key: "requested", label: "Request sent",  icon: Clock      },
  { key: "accepted",  label: "Rider accepted", icon: CheckCircle },
  { key: "enroute",   label: "En route",       icon: Bike        },
  { key: "arrived",   label: "Arrived",        icon: MapPin      },
  { key: "completed", label: "Completed",      icon: Flag        },
];

export default function TrackPage() {
  const router = useRouter();
  const [stage, setStage] = useState(1); // 0-indexed into STAGES
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "rider", text: "Nimekubali. Niko njiani sasa.", time: "2:14 PM" },
  ]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input.trim(), time: "now" }]);
    setInput("");
    // simulate rider reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "rider", text: "Sawa, nakuja haraka.", time: "now" }]);
    }, 1200);
  }

  function advance() {
    if (stage < STAGES.length - 1) setStage((s) => s + 1);
  }

  return (
    <main style={{ background: "#D9E0E1", minHeight: "100vh" }}>

      {/* Nav */}
      <div
        className="px-4 py-3 flex items-center gap-3 border-b"
        style={{ background: "#3F3A44", borderColor: "#4D4750" }}
      >
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1 text-sm hover:opacity-75 transition"
          style={{ color: "#D9E0E1", background: "none", border: "none", cursor: "pointer" }}
        >
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex-1" />
        <span className="text-sm font-semibold" style={{ color: "#fff" }}>Track order</span>
      </div>

      <div className="px-4 py-4 flex flex-col gap-4">

        {/* Rider card */}
        <div
          className="rounded-2xl p-4"
          style={{ background: "#fff", border: "1px solid #e0e4e5", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-medium"
              style={{ background: "#7C605A", color: "#fff" }}
            >
              BM
            </div>
            <div className="flex-1">
              <p className="font-semibold" style={{ color: "#3B3539" }}>Brian Mwangi</p>
              <p className="text-xs" style={{ color: "#5F6368" }}>⭐ 4.8 · Plate KDA 312B</p>
            </div>
            <div className="flex gap-2">
              <a
                href="tel:0712000101"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition hover:opacity-75"
                style={{ borderColor: "#c5cdd0", color: "#5F6368" }}
              >
                <Phone size={15} />
              </a>
              <button
                onClick={() => setChatOpen((v) => !v)}
                className="w-9 h-9 rounded-full flex items-center justify-center border transition hover:opacity-75"
                style={{ borderColor: "#3B3438", color: "#3B3438", background: "none", cursor: "pointer" }}
              >
                <MessageCircle size={15} />
              </button>
            </div>
          </div>

          {/* ETA pill */}
          <div
            className="mt-3 flex items-center gap-2 rounded-xl px-3 py-2"
            style={{ background: "#2DBA6715" }}
          >
            <Clock size={13} style={{ color: "#2DBA67" }} />
            <p className="text-xs font-medium" style={{ color: "#2DBA67" }}>
              {stage === 0 ? "Waiting for rider to accept..." :
               stage === 1 ? "Rider accepted · ETA ~4 min" :
               stage === 2 ? "En route to you · ETA ~2 min" :
               stage === 3 ? "Rider has arrived" :
               "Order completed"}
            </p>
          </div>
        </div>

        {/* Status timeline */}
        <div
          className="rounded-2xl p-4"
          style={{ background: "#fff", border: "1px solid #e0e4e5", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
        >
          <p className="text-sm font-semibold mb-4" style={{ color: "#3B3539" }}>Order status</p>
          <div className="flex flex-col gap-0">
            {STAGES.map(({ key, label, icon: Icon }, i) => {
              const done    = i < stage;
              const current = i === stage;
              const last    = i === STAGES.length - 1;
              return (
                <div key={key} className="flex items-start gap-3">
                  {/* Line + dot */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: done || current ? "#3B3438" : "#e0e4e5",
                        color: done || current ? "#fff" : "#c5cdd0",
                      }}
                    >
                      <Icon size={13} />
                    </div>
                    {!last && (
                      <div
                        className="w-0.5 h-6"
                        style={{ background: done ? "#3B3438" : "#e0e4e5" }}
                      />
                    )}
                  </div>
                  {/* Label */}
                  <p
                    className="text-sm pt-1 pb-4"
                    style={{
                      color: current ? "#3B3539" : done ? "#5F6368" : "#c5cdd0",
                      fontWeight: current ? 500 : 400,
                    }}
                  >
                    {label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Advance button (demo only) */}
          {stage < STAGES.length - 1 && (
            <button
              onClick={advance}
              className="w-full mt-2 py-2.5 rounded-xl text-xs font-medium transition hover:opacity-80"
              style={{ background: "#3B343812", color: "#3B3438", border: "none", cursor: "pointer" }}
            >
              Simulate next stage →
            </button>
          )}
        </div>

        {/* Chat panel */}
        {chatOpen && (
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "#fff", border: "1px solid #e0e4e5", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
          >
            <div className="px-4 py-3 border-b" style={{ borderColor: "#f0f2f3" }}>
              <p className="text-sm font-semibold" style={{ color: "#3B3539" }}>Chat with Brian</p>
            </div>

            <div className="flex flex-col gap-2 p-4" style={{ maxHeight: "220px", overflowY: "auto" }}>
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="rounded-xl px-3 py-2 max-w-[75%]"
                    style={{
                      background: m.from === "user" ? "#3B3438" : "#D9E0E1",
                      color: m.from === "user" ? "#fff" : "#3B3539",
                    }}
                  >
                    <p className="text-xs leading-relaxed">{m.text}</p>
                    <p className="text-xs mt-0.5 opacity-60" style={{ fontSize: "10px" }}>{m.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 p-3 border-t" style={{ borderColor: "#f0f2f3" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 rounded-xl border text-xs focus:outline-none"
                style={{ borderColor: "#c5cdd0", color: "#3B3539", background: "#fff" }}
                onFocus={(e) => (e.target.style.boxShadow = "0 0 0 2px #7C605A44")}
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />
              <button
                onClick={sendMessage}
                className="px-3 py-2 rounded-xl text-xs font-medium transition hover:opacity-90"
                style={{ background: "#3B3438", color: "#fff", border: "none", cursor: "pointer" }}
              >
                Send
              </button>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
