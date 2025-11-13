import BasicsEssential from "../../components/Faq/BasicEssential";
import AboutFlim from "../../components/Indoor/AboutFlim";
import Faq from "../../components/Outdoor/Faq";
import FilmStudio from "../../components/Indoor/FlimStudio";
import FullBanner from "../../components/Indoor/FullBanner";
import GettingToVels from "../../components/Indoor/GettingToVels";
import OutdoorFliming from "../../components/Indoor/IndoorFliming";
import ReelView from "../../components/Indoor/ReelView";
import SpecialFeatures from "../../components/Indoor/SpecialFeatures";
import Stats from "../../components/Indoor/Stats";
import IndoorTabs from "../../components/Indoor/IndoorTabs";
import WhyChooseVels from "../../components/Indoor/WhyChooseVels";
import HeroSection from "../../components/Indoor/HeroSection";


export default function outdoor() {
  return (
    <>
         <HeroSection />
        <OutdoorFliming />
        <Stats />
        <FilmStudio />
        <WhyChooseVels />
        <FullBanner />
        <ReelView />
        <AboutFlim />
        <SpecialFeatures />
        <IndoorTabs />
        <GettingToVels />
        <Faq />
    </>
  );
}