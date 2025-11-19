"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Hero Slides Data
const slides = [
  {
    img: "/assets/banner/trade_convention_centre_1.webp",
    alt: "Vels Trade and Convention Center Grand Entrance",
  },
  {
    img: "/assets/banner/trade_convention_centre_2.webp",
    alt: "Indoor Studio",
  },
  {
    img: "/assets/banner/trade_convention_centre_3.webp",
    alt: "Outdoor Filming Area",
  },
];

const Hero = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById("target-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ✅ Slider Settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center text-white overflow-hidden">

      {/* ✅ Desktop Slider */}
      <div className="absolute inset-0 z-0 h-[600px] hidden md:block">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-[600px]">
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full h-[600px] object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* ✅ Mobile Static Banner */}
      <div className="absolute inset-0 z-0 h-[600px] md:hidden">
        <img
          src="/assets/banner/mobile-banner-home.webp"
          alt={slides[0].alt}
          className="w-full h-[600px] object-cover object-center"
          loading="eager"
        />
      </div>

      {/* ⭐ TITLE + BREADCRUMBS (BOTTOM LEFT) */}
      <div className="absolute bottom-24 md:bottom-20 left-6 md:left-16 z-30 text-white">

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-primary mb-3">
          Contact Us
        </h1>

        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-white text-sm md:text-base">
          {/* Home Icon + Link */}
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
          <span className="opacity-90">Contact Us</span>
        </div>
      </div>

      {/* Scroll Button */}
      <motion.button
        onClick={handleClick}
        className="absolute bottom-6 z-30 p-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 animate-bounce focus:outline-none"
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
