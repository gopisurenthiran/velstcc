"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FullBanner() {
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

  const slidesDesktop = [
    { image: "/assets/vijay_tv_1.webp" },
    { image: "/assets/vijay_tv_2.webp" },
    { image: "/assets/vijay_tv_3.webp" },
    { image: "/assets/bigg_boss_1.webp" },
    { image: "/assets/bigg_boss_2.webp" },
    { image: "/assets/bigg_boss_3.webp" },
  ];

  const slidesMobile = [
    { image: "/assets/vijay_tv_1_mob.webp" },
    { image: "/assets/vijay_tv_2_mob.webp" },
    { image: "/assets/vijay_tv_3_mob.webp" },
    { image: "/assets/bigg_boss_1_mob.webp" },
    { image: "/assets/bigg_boss_2_mob.webp" },
    { image: "/assets/bigg_boss_3_mob.webp" },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-center justify-center">

      {/* Heading */}
      <motion.h2
        className="primary-title mb-2 mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        Vels Theatres
      </motion.h2>

      <div className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4 mx-auto"></div>

      {/* Subtext */}
      <motion.p
        className="text-gray-600 mb-8 secondary-description"
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
          {slidesDesktop.map((slide, i) => (
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
          {slidesMobile.map((slide, i) => (
            <div key={i} className="relative w-full h-[520px]">
              <img
                src={slide.image}
                alt={`Mobile slide ${i + 1}`}
                className="object-cover w-full h-[520px]"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>

    </section>
  );
}
