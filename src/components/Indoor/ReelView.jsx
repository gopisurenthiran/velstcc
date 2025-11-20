"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/assets/indoor-1.webp",
  "/assets/indoor-2.webp",
  "/assets/indoor-3.webp",
  "/assets/indoor-4.webp",
  "/assets/indoor-5.webp",
  "/assets/indoor-6.webp",
  "/assets/indoor-7.webp",
  "/assets/indoor-8.webp",
];

export default function ReelView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Detect screen size → set number of slides
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1280) setSlidesToShow(4);
      else if (window.innerWidth >= 1024) setSlidesToShow(3);
      else if (window.innerWidth >= 640) setSlidesToShow(2);
      else setSlidesToShow(1);
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

  // Adjust index when screen width changes
  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [slidesToShow, maxIndex, currentIndex]);

  return (
    <section className="bg-white py-16 px-4 text-center">
      {/* Title */}
      <motion.h2
        className="primary-title mb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Frame by Frame
      </motion.h2>

      {/* Divider */}
      <motion.div
        className="w-40 h-[1px] bg-[#2D3091] mx-auto my-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        style={{ transformOrigin: "center" }}
        viewport={{ once: true }}
      />

      {/* Description */}
      <motion.p
        className="text-gray-600 mb-8 secondary-description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        A behind-the-lens look at perfection in progress.
      </motion.p>

      {/* Slider container */}
      <motion.div
        className="max-w-7xl mx-auto overflow-hidden rounded-xl"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Track */}
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * (100 / slidesToShow)}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="p-2"
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              <div className="overflow-hidden hover:scale-[1.02] transition-all duration-300">
                <img
                  src={src}
                  alt={`Reel view ${i + 1}`}
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
