import BasicsEssential from "../../components/Faq/BasicEssential";
import Hero from "../../components/Faq/Hero";

const siteTitle = "FAQ | Vels Film City Chennai | Media and Entertainment Hub";
const siteDescription = "Find answers to common questions about Vels Film City in Chennai, your premier media and entertainment hub with state-of-the-art film production facilities.";
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

export default function faq() {
  return (
    <>
        <Hero />
        <BasicsEssential />
    </>
  );
}