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


const siteTitle = "Indoor | Vels Film City Chennai | Media and Entertainment Hub";
const siteDescription = "Explore the indoor filming facilities at Vels Film City in Chennai, featuring state-of-the-art studios, advanced equipment, and versatile sets for all your production needs.";
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