import Hero from "../../components/Contact/Hero.jsx";
import ContactTabs from "../../components/Contact/ContactPage.jsx";



const siteTitle = "Contact Us | Vels Film City Chennai | Media and Entertainment Hub";
const siteDescription = "Get in touch with Vels Film City in Chennai for inquiries about our state-of-the-art film production facilities, event hosting, and more.";
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
export default function contact() {
  return (
    <>
        <Hero />
        <ContactTabs />
       
    </>
  );
}