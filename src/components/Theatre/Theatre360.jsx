"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion"; // ✅ Added for animation

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Theatre360() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };

  const slides = [
    { image: "/assets/Showcaase_1.webp" },
    { image: "/assets/Showcaase_2.webp" },
    { image: "/assets/Showcaase_3.webp" },
    { image: "/assets/Showcaase_4.webp" },
    { image: "/assets/Showcaase_5.webp" },
    { image: "/assets/Showcaase_6.webp" },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-center justify-center">
       {/* Heading */}
      <motion.h2
        className="text-3xl  mb-2 font-secondary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        Vels Theatres
      </motion.h2>
        <div className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4 mx-auto text-center"></div>
      {/* Subtext */}
      <motion.p
        className="text-gray-600 mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        A symphony of light, design, and storytelling, where cinema becomes art.
      </motion.p>
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="relative w-full min-h-screen">
            <img
              src={slide.image}
              alt={`Theatre slide ${i + 1}`}
              className="object-cover w-full h-screen"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
