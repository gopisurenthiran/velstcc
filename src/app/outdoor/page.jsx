import BasicsEssential from "../../components/Faq/BasicEssential";
import Hero from "../../components/Outdoor/Hero";
import AboutFlim from "../../components/Outdoor/AboutFlim";
import Faq from "../../components/Outdoor/Faq";
import FilmStudio from "../../components/Outdoor/FlimStudio";
import FullBanner from "../../components/Outdoor/FullBanner";
import GettingVels from "../../components/Outdoor/GettingVels";
import OutdoorFliming from "../../components/Outdoor/OutdoorFliming";
import ReelView from "../../components/Outdoor/ReelView";
import SpecialFeatures from "../../components/Outdoor/SpecialFeatures";
import Stats from "../../components/Outdoor/Stats";
import SustainabilityTabs from "../../components/Outdoor/SustainabilityTabs";
import WhyChooseVels from "../../components/Outdoor/WhyChooseVels";


export default function outdoor() {
  return (
    <>
        <Hero />
        <OutdoorFliming />
        <Stats />
        <FilmStudio />
        <WhyChooseVels />
        <FullBanner />
        <ReelView />
        <AboutFlim />
        <SpecialFeatures />
        <SustainabilityTabs />
        <GettingVels />
        <Faq />
    </>
  );
}