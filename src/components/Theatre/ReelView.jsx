"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // ⭐ RESPONSIVE SLIDES COUNT JUST LIKE INDOOR SLIDER
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1280) setSlidesToShow(4);
      else if (window.innerWidth >= 1024) setSlidesToShow(3);
      else if (window.innerWidth >= 640) setSlidesToShow(2);
      else setSlidesToShow(1); // MOBILE — ALWAYS 1
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = Math.max(0, images.length - slidesToShow);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="bg-white py-16 px-4 text-center">

      {/* Title */}
      <motion.h2
        className="primary-title mb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        The Reel View
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="text-gray-600 mb-8 secondary-description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        More than a theatre, it’s where design, acoustics, and drama perform in harmony.
      </motion.p>

      {/* Custom Slider */}
      <motion.div
        className="max-w-7xl mx-auto overflow-hidden rounded-xl"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * (100 / slidesToShow)}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="p-2"
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              <motion.div
                className="overflow-hidden hover:scale-[1.02] transition-all duration-300 "
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={src}
                  alt={`Image ${index}`}
                  className="w-full"
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
}
