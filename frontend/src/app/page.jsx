// import Image from "next/image";
// import Navbar from "./components/head";
// import Counter from "./components/button";
import LayoutWrapper from "./components/LayoutWrapper";
import HomeSection from "./components/Hero/Hero";
import HeroFeatures from "./components/Hero/HeroFeatures";
import HeroActivity from "./components/Hero/HeroActivity";
import HowItWorks from "./pages/HowItWorks";

export default function Home() {
  return (

    <LayoutWrapper>
    <HomeSection />
    <HeroFeatures />
    <HeroActivity />
    <HowItWorks />
    
    {/* <Navbar /> */}
    {/* <Counter /> */}
    </LayoutWrapper>
    
  );
}
