"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

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

  const desktopSlides = [
    { image: "/assets/showcaase_1.webp" },
    { image: "/assets/showcaase_2.webp" },
    { image: "/assets/showcaase_3.webp" },
    { image: "/assets/showcaase_4.webp" },
    { image: "/assets/showcaase_5.webp" },
    { image: "/assets/showcaase_6.webp" },
  ];

  const mobileSlides = [
    { image: "/assets/showcaase_1_mob.webp" },
    { image: "/assets/showcaase_2_mob.webp" },
    { image: "/assets/showcaase_3_mob.webp" },
    { image: "/assets/showcaase_4_mob.webp" },
     { image: "/assets/showcaase_5_mob.webp" },
      { image: "/assets/showcaase_6_mob.webp" },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-center justify-center">

      {/* Heading */}
      <motion.h2
        className="primary-title mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        Vels Theatres
      </motion.h2>

      <div className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4 mx-auto" />

      <motion.p
        className="text-gray-600 secondary-description mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        A symphony of light, design, and storytelling, where cinema becomes art.
      </motion.p>

      {/* Desktop Slider */}
      <div className="hidden md:block">
        <Slider {...settings}>
          {desktopSlides.map((slide, i) => (
            <div key={i} className="relative w-full min-h-screen">
              <img
                src={slide.image}
                alt={`Desktop slide ${i + 1}`}
                className="object-cover w-full h-screen"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Mobile Slider */}
      <div className="block md:hidden">
        <Slider {...settings}>
          {mobileSlides.map((slide, i) => (
            <div key={i} className="relative w-full min-h-[500px]">
              <img
                src={slide.image}
                alt={`Mobile slide ${i + 1}`}
                className="object-cover w-full h-[500px]"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>

    </section>
  );
}
