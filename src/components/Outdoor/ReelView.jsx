"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/assets/outdoor-1.webp",
  "/assets/outdoor-2.webp",
  "/assets/outdoor-3.webp",
  "/assets/outdoor-4.webp",
  "/assets/outdoor-5.webp",
  "/assets/outdoor-6.webp",
  "/assets/outdoor-7.webp",
  "/assets/outdoor-8.webp",
];

export default function ReelView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  /* ---------- Responsive Slides ---------- */
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1280) setSlidesToShow(4);
      else if (window.innerWidth >= 1024) setSlidesToShow(3);
      else if (window.innerWidth >= 640) setSlidesToShow(2);
      else setSlidesToShow(1); // mobile
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const maxIndex = Math.max(0, images.length - slidesToShow);

  /* ---------- Auto Slide ---------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="bg-white py-16 px-4 text-center">

      {/* Heading */}
      <motion.h2
        className="primary-title mb-2"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Behind the Lens
      </motion.h2>

      {/* Divider */}
      <motion.div
        className="w-40 h-[1px] bg-[#2D3091] mx-auto my-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        style={{ transformOrigin: "center" }}
      />

      {/* Description */}
      <motion.p
        className="text-gray-600 mb-8 secondary-description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Where the craft behind every “action” and “cut” comes to light.
      </motion.p>

      {/* Normal Custom Slider */}
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
                className="overflow-hidden hover:scale-[1.02] transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <img
                  src={src}
                  alt={`Reel view ${index + 1}`}
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
