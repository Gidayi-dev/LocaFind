// src/app/boda/page.jsx
import BodaHero from "@/app/components/Boda/BodaHero";
import BodaNearbyList from "@/app/components/Boda/BodaNearby";

export const metadata = {
  title: "Boda Boda – Locafind",
  description: "Request a nearby boda boda rider for errands, pickups and deliveries in Nairobi.",
};

export default function BodaPage() {
  return (
    <main style={{ background: "#D9E0E1", minHeight: "100vh" }}>
      <BodaHero />
      <BodaNearbyList />
    </main>
  );
}
