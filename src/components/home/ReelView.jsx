"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const img = [
  "/assets/slider_1.webp",
  "/assets/slider_2.webp",
  "/assets/slider_3.webp",
  "/assets/slider_4.webp",
  "/assets/slider_5.webp",
  "/assets/slider_6.webp",
];

export default function ReelView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1); // 1 on mobile, 4 on desktop

  // Detect screen size and set slidesToShow
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4); // desktop
      } else {
        setSlidesToShow(1); // mobile / tablet
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const maxIndex = Math.max(0, img.length - slidesToShow);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  // Clamp index when slidesToShow changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [slidesToShow, maxIndex, currentIndex]);

  return (
    <motion.section
      className="bg-white py-16 px-4 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl mb-2 primary-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        The Reel View
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-8 secondary-description"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        A polished look at what happens between action and cut.
      </motion.p>

      <motion.div
        className="max-w-6xl mx-auto overflow-hidden rounded-xl"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        {/* Slider track */}
        <motion.div
          className="flex"
          animate={{
            x: `-${currentIndex * (100 / slidesToShow)}%`,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {img.map((src, i) => (
            <div
              key={i}
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              className="p-2"
            >
              <div className="overflow-hidden">
                <img
                  src={src}
                  alt={`Reel View ${i + 1}`}
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </motion.section>
  );
}
