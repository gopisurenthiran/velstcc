// app/layout.tsx

import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Navbar from '../components/layout/Navbar'; 
import type { ReactNode } from "react";
import localFont from "next/font/local";
import CanonicalLink from '../components/layout/CanonicalLink'; // Assuming this component exists

// 🚨 NOTE: These imports should ideally be in app/page.jsx
import Hero from "../components/home/Hero";
import Feature from "../components/home/Feature";

import StatsGrid from "../components/home/StatsGrid";

import designedoccasion from "../components/home/DesignedOccasion";
import DesignedOccasion from "../components/home/DesignedOccasion";
import Gettingtovels from "../components/home/Gettingtovels";
import Events from "../components/home/Events";
import Facilities from "../components/home/Facilities";
import Faqs from "../components/home/Faqs";
import HoverExpandCarousel from "../components/home/HoverExpandCarousel";
import TestimonialsCarousel from "../components/home/TestimonialsCarousel";

// Define the root canonical path here
const canonicalPath = '/'; 

// --- FONT LOADING ---
const foundersGrotesk = localFont({
    src: [
        { path: "../fonts/FoundersGrotesk-Regular.otf", weight: "400", style: "normal" },
        { path: "../fonts/FoundersGrotesk-Medium.otf", weight: "500", style: "normal" },
        { path: "../fonts/FoundersGrotesk-Bold.otf", weight: "700", style: "normal" },
    ],
    variable: "--font-foundersgrotesk",
    display: "swap",
});

const Baskervville = localFont({
    src: [
        { path: "../fonts/Baskervville-Regular.ttf", weight: "400", style: "normal" },
    ],
    variable: "--font-Baskervville",
    display: "swap",
});

// --- METADATA API (Next.js-Idiomatic SEO) ---
const siteTitle = "Vels Trade and Convenience Center";
const siteDescription = "Vels Film City is the most spacious media and entertainment hub of Chennai with 20 Film Studios, a 6 Screen Multiplex, Hotel rooms and coming up with Chennai's";
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

// --- ROOT LAYOUT COMPONENT ---

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className={`${foundersGrotesk.variable} ${Baskervville.variable}`}>
            <CanonicalLink path={canonicalPath} /> 
            
            {/* 🚀 FIX: Changed 'bg-white-100' to the correct Tailwind class 'bg-white' */}
            <body className="bg-white text-gray-900 font-sans">
                
                <Header />
                <Navbar />
                
                {/* Components rendered globally (will appear on ALL pages) */}
                <Hero />
                <Feature />
                <StatsGrid />
                <DesignedOccasion />
                <Gettingtovels />
                <Events />
                <Facilities />            
                <TestimonialsCarousel />
                <HoverExpandCarousel />
                <Faqs />
                {/* Main content area (This is where app/page.jsx or any other page component renders) */}
                <main className="">{children}</main>
                
                <Footer />
            </body>
        </html>
    );
}