"use client";
import React from "react";
import { motion } from "framer-motion";

// Banners
const desktopBanner = "/assets/banner/film-city-banner-1.webp";
const mobileBanner = "/assets/banner/vels-film-city.webp";

const Hero = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById("indoor");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center text-white overflow-hidden">

      {/* 🌐 Desktop Banner */}
      <img
        src={desktopBanner}
        alt="Vels Trade and Convention Centre"
        className="hidden md:block absolute inset-0 w-full h-[600px] object-cover object-center z-0"
      />

      {/* 📱 Mobile Banner */}
      <img
        src={mobileBanner}
        alt="Vels Trade and Convention Centre Mobile Banner"
        className="block md:hidden absolute inset-0 w-full h-[600px] object-cover object-center z-0"
      />

     

      {/* Scroll Button */}
      <motion.button
        onClick={handleClick}
        className="absolute bottom-6 z-20 p-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 animate-bounce focus:outline-none"
        aria-label="Scroll down to next section"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.button>
    </section>
  );
};

export default Hero;
