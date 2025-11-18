"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Added for animation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/reel-view-1.webp",
  "/assets/reel-view-2.webp",
  "/assets/reel-view-3.webp",
  "/assets/reel-view-4.webp",
  "/assets/reel-view-5.webp",
  "/assets/reel-view-6.webp",
  "/assets/reel-view-7.webp",

];

export default function ReelView() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: true,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.section
      className="bg-white py-16 px-4 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="primary-title mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        The Reel View
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-gray-600 mb-8 secondary-description"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
       More than a theatre, it’s where design, acoustics, and drama perform in harmony.
      </motion.p>

      {/* Slider */}
      <motion.div
        className="max-w-7xl mx-auto overflow-hidden"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <motion.div
                className="overflow-hidden hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Image
                  src={src}
                  alt={`Reel view ${index + 1}`}
                  width={330}
                  height={445}
                  className="w-full h-full"
                />
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </motion.section>
  );
}
