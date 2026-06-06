import FoodListings from "@/app/components/Listings/foodListings";

export const metadata = {
  title: "Food & Vendors – Locafind",
  description: "Find nearby restaurants, kibandas, mama mbogas, supermarkets, markets, farms and more in your area.",
};

export default function FoodPage() {
  return <FoodListings />;
}