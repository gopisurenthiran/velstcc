"use client";
import React from "react";
import { motion } from "framer-motion";

// Banners
const desktopBanner = "/assets/banner/film-city-banner-1.webp";
const mobileBanner = "/assets/banner/vels-film-city.webp";

const Hero = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById("outdoor");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center text-white overflow-hidden">

      {/* 🌐 Desktop Banner */}
      <img
        src={desktopBanner}
        alt="Vels Film City Banner"
        className="hidden md:block absolute inset-0 w-full h-[600px] object-cover object-center z-0"
      />

      {/* 📱 Mobile Banner */}
      <img
        src={mobileBanner}
        alt="Vels Film City Banner Mobile"
        className="block md:hidden absolute inset-0 w-full h-[600px] object-cover object-center z-0"
      />

      {/* ⭐ Title + Breadcrumbs (BOTTOM LEFT) */}
      <div className="absolute bottom-24 md:bottom-20 left-6 md:left-16 z-20 text-white">

        {/* Page Title */}
        <h1 className="text-4xl md:text-6xl font-primary mb-3">
          Vels Film City
        </h1>

        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-white text-sm md:text-base">
          
          {/* Home icon + link */}
          <span className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3l9 8h-3v9h-12v-9h-3z" />
            </svg>
            <a href="/" className="hover:underline">Home</a>
          </span>

          {/* Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="opacity-80"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>

          {/* Current Page */}
          <span className="opacity-90">Vels Film City - Outdoor</span>
        </div>
      </div>

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
