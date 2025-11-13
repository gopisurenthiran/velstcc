import ReelView from "../../components/Theatre/ReelView";
import Stats from "../../components/Theatre/Stats";
import Theatre360 from "../../components/Theatre/Theatre360";
import VelsTheatreSection from "../../components/Theatre/VelsTheatreSection";
import Concession from "../../components/Theatre/Concession";
import HeroSection from "../../components/Theatre/HeroSection";
import FaqTheatre from "../../components/Theatre/Faq";
import Find from "../../components/Theatre/Find";

export default function theatre() {
  return (
    <>
        <HeroSection />
        <VelsTheatreSection />
        <Stats />
        <Theatre360 />
        <ReelView />
        <Concession />
        <Find />
        <FaqTheatre />       
    </>
  );
}