"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Hero Slides Data
const slides = [
  {
    img: "/assets/banner/theatre-banner-1.webp",
    alt: "Vels Trade and Convention Center Grand Entrance",
  },
  {
    img: "/assets/banner/theatre-banner-2.webp",
    alt: "Indoor Studio",
  },
  {
    img: "/assets/banner/theatre-banner-3.webp",
    alt: "Outdoor Filming Area",
  },
];

const Hero = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById("theartre");
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
      {/* ✅ Desktop / Large Screens Slider */}
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

      {/* ✅ Mobile — Static Image Only */}
      <div className="absolute inset-0 z-0 h-[600px] md:hidden">
        <img
          src="/assets/banner/mobile-theatre.webp"
          alt={slides[0].alt}
          className="w-full h-[600px] object-cover object-center"
          loading="eager"
        />
      </div>

      {/* ✅ Scroll Button */}
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
