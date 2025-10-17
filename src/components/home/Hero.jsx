// components/Hero.jsx
"use client";
import React from 'react';
import Link from 'next/link';
import herobanner from "@/public/assets/hero-banner.jpg";
import Image from 'next/image'; // 👈 Import Next.js Image component
import { ArrowDown } from 'lucide-react';
const Hero = () => {

 const handleClick = (e) => {
    e.preventDefault();
    // 🛑 IMPORTANT: Replace 'target-section' with the actual ID of the next section below the hero
    const targetElement = document.getElementById('target-section');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative w-full  flex items-center justify-center text-white overflow-hidden min-h-screen">
        <Image
        src={herobanner} // 👈 Adjust path to your image
        alt="Vels Trade and Convenience Center Grand Entrance"
        layout="fill"
        objectFit=""
        quality={100}
        priority
        className="z-0" // Ensure image is behind text
      />
         <button 
        onClick={handleClick}
        className="absolute bottom-6 z-30 p-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 animate-bounce focus:outline-none" href="#target-section"
        aria-label="Scroll down to next section"
      >
        {/* You can use a custom SVG or an icon library */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </section>
  );
};

export default Hero;