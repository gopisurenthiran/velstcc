import BasicsEssential from "../../components/Faq/BasicEssential";
import Hero from "../../components/home/Hero";
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
        <IndoorTabs />
        <GettingToVels />
        <Faq />
    </>
  );
}