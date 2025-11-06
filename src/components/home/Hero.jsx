"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Hero Slides Data
const slides = [
  {
    image: "/assets/trade-convention-centre-1.jpg",
    alt: "Vels Trade and Convention Center Grand Entrance",
  },
  {
    image: "/assets/trade-convention-centre-2.jpg",
    alt: "Indoor Studio",
  },
  {
    image: "/assets/trade-convention-centre-3.jpg",
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
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* ✅ Slider Background */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative min-h-screen w-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                quality={100}
                className="object-cover object-center"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
          ))}
        </Slider>
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
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </motion.button>
    </section>
  );
};

export default Hero;
