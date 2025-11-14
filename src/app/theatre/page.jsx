import ReelView from "../../components/Theatre/ReelView";
import Stats from "../../components/Theatre/Stats";
import Theatre360 from "../../components/Theatre/Theatre360";
import VelsTheatreSection from "../../components/Theatre/VelsTheatreSection";
import Concession from "../../components/Theatre/Concession";
import HeroSection from "../../components/Theatre/HeroSection";
import FaqTheatre from "../../components/Theatre/Faq";
import Find from "../../components/Theatre/Find";


const siteTitle = "Theatre | Vels Film City Chennai | Media and Entertainment Hub";
const siteDescription = "Explore the theatre facilities at Vels Film City in Chennai, featuring state-of-the-art auditoriums, advanced sound and lighting systems, and comfortable seating for an unparalleled entertainment experience.";
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