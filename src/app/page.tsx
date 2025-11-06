import Hero from "../components/home/Hero";
import Feature from "../components/home/Feature";

import StatsGrid from "../components/home/StatsGrid";

import designedoccasion from "../components/home/DesignedOccasion";
import DesignedOccasion from "../components/home/DesignedOccasion";
import Gettingtovels from "../components/home/Gettingtovels";
import ReelView from "../components/home/ReelView";
import Events from "../components/home/Events";
import Facilities from "../components/home/Facilities";
import Faqs from "../components/home/Faqs";
import HoverExpandCarousel from "../components/home/HoverExpandCarousel";
import TestimonialsCarousel from "../components/home/TestimonialsCarousel";

export default function Home() {
  return (
    <>
     
                
                {/* Components rendered globally (will appear on ALL pages) */}
                <Hero />
                <Feature />
                <StatsGrid />
                <DesignedOccasion />
                <Gettingtovels />
                <ReelView />
                <Events />
                <Facilities />            
                <TestimonialsCarousel />
                <HoverExpandCarousel />
                <Faqs />
    </>
  );
}
