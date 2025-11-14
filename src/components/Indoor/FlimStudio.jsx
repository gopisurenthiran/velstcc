"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow buttons (visible on all devices now)
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-15px] top-1/2 -translate-y-1/2 
               text-black hover:text-gray-500 text-3xl font-bold
               w-10 h-10 flex items-center justify-center"
  >
    →
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-15px] top-1/2 -translate-y-1/2 
               text-black hover:text-gray-500 text-3xl font-bold
               w-10 h-10 flex items-center justify-center"
  >
    ←
  </button>
);

const studios = [
  { img: "/assets/frame-1.webp", alt: "Bhavana Studios" },
  { img: "/assets/frame-2.webp", alt: "Lyca Productions" },
  { img: "/assets/frame-3.webp", alt: "Z Studios" },
  { img: "/assets/frame-1.webp", alt: "Sun Pictures" },
  { img: "/assets/frame-2.webp", alt: "Rajkamal Films" },
];

export default function FilmStudio() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, arrows: true },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2, arrows: true, centerMode: false },
      },
    ],
  };

  return (
    <motion.section
      className="py-12 md:py-16 bg-white text-center relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        className="text-xl md:text-3xl font-semibold font-secondary text-black px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        Frames that Captivate Millions
      </motion.h2>

      <motion.div
        className="w-32 md:w-40 h-[1px] bg-[#2D3091] mb-6 mt-4 mx-auto"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        style={{ transformOrigin: "center" }}
      />

      {/* Slider */}
      <motion.div
        className="mt-8 md:mt-10 relative max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <Slider {...settings}>
          {studios.map((studio, index) => (
            <motion.div
              key={index}
              className="px-2 md:px-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="flex justify-center">
                <Image
                  src={studio.img}
                  alt={studio.alt}
                  width={260}
                  height={260}
                  className="object-contain w-40 sm:w-48 md:w-60 h-auto"
                />
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </motion.section>
  );
}
