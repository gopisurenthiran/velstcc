import Hero from "../../components/home/Hero";
import Feature from "../../components/home/Feature";
import OurLegacy from "../../components/About/OurLegacy";
import VisionMission from "../../components/About/VisionMission";
import Values from "../../components/About/Values";
import AwardsSection from "../../components/About/AwardSection";

export default function about() {
  return (
    <>
        <Hero />
        <OurLegacy />
        <VisionMission />
        <Values />
        <AwardsSection />
    </>
    
  );
}