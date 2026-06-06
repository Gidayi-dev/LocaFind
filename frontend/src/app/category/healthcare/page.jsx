import Listings from "@/app/components/Listings/Listings";

export const metadata = {
    title: "Healthcare-LocaFind",
    description: "Find hospitals, pharmacies, clinics, and CHPs near you",
};

export default function HealthcarePage() {
    return <Listings category="Healthcare" />;
}