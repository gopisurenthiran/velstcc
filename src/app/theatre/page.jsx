import Hero from "../../components/home/Hero";
import ReelView from "../../components/Theatre/ReelView";
import Stats from "../../components/Theatre/Stats";
import Theatre360 from "../../components/Theatre/Theatre360";
import VelsTheatreSection from "../../components/Theatre/VelsTheatreSection";
import Concession from "../../components/Theatre/Concession";
import Gettingtovels from "../../components/home/Gettingtovels";
import Faqs from "../../components/home/Faqs";
import HeroSection from "../../components/Theatre/HeroSection";

export default function theatre() {
  return (
    <>
        <HeroSection />
        <VelsTheatreSection />
        <Stats />
        <Theatre360 />
        <ReelView />
        <Concession />
        <Gettingtovels />
        <Faqs />
        
    </>
  );
}