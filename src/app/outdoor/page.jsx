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


const siteTitle = "Outdoor | Vels Film City Chennai | Media and Entertainment Hub";
const siteDescription = "Explore the outdoor filming facilities at Vels Film City in Chennai, featuring expansive sets, natural landscapes, and versatile locations for all your production needs.";
const siteUrl = 'https://yourwebsite.com';
const siteImage = 'https://yourwebsite.com/default-share-image.jpg';

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: siteUrl,
        images: [{ url: siteImage, width: 1200, height: 630, alt: siteTitle }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
    viewport: 'width=device-width, initial-scale=1',
};

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