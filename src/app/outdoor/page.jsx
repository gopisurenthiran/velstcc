import BasicsEssential from "../../components/Faq/BasicEssential";
import Hero from "../../components/home/Hero";
import FilmStudio from "../../components/Outdoor/FlimStudio";
import OutdoorFliming from "../../components/Outdoor/OutdoorFliming";
import Stats from "../../components/Outdoor/Stats";
import WhyChooseVels from "../../components/Outdoor/WhyChooseVels";


export default function outdoor() {
  return (
    <>
        <Hero />
        <OutdoorFliming />
        <Stats />
        <FilmStudio />
        <WhyChooseVels />
    </>
  );
}