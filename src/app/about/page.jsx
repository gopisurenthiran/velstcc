import Hero from "../../components/About/Hero";
import Feature from "../../components/home/Feature";
import OurLegacy from "../../components/About/OurLegacy";
import VisionMission from "../../components/About/VisionMission";
import Values from "../../components/About/Values";
import VelsEcosystem from "../../components/About/VelsEcosystem";


const siteTitle = "About Us  | Vels Film City Chennai | Media and Entertainment Hub";
const siteDescription = "Discover Vels Film City in Chennai, a premier media and entertainment hub offering state-of-the-art facilities for film production, events, and more.";
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

export default function about() {
  return (
    <>
        <Hero />
        <OurLegacy />
        <VisionMission />
        <Values />
        <VelsEcosystem />
    </>
    
  );
}