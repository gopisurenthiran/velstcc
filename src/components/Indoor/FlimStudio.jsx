"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const studios = [
  { img: "/assets/frame-1.webp", alt: "Bhavana Studios" },
  { img: "/assets/frame-2.webp", alt: "Lyca Productions" },
  { img: "/assets/frame-3.webp", alt: "Z Studios" },
];

export default function FilmStudio() {
  return (
    <motion.section
      className="py-12 md:py-16 bg-white text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        className="primary-title text-black px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        Frames that Captivate Millions
      </motion.h2>

      <p className="secondary-description text-gray-600 mb-8">From captivating dramas to reality sensations, our stages have set the scene for stories that resonate nationwide. </p>

      <motion.div
        className="w-28 md:w-40 h-[1px] bg-[#2D3091] mb-6 mt-4 mx-auto"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        style={{ transformOrigin: "center" }}
      />

      {/* Actual Size Images */}
      <motion.div
        className="
          mt-10 
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-10 
          max-w-7xl 
          mx-auto 
          px-6
        "
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
      >
        {studios.map((studio, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex justify-center"
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              src={studio.img}
              alt={studio.alt}
              width={380}  // actual width
              height={510} // actual height
              className=""  // prevents resizing
              priority={index === 0}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
