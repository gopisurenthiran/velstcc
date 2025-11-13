"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Added for animation

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow buttons
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-30px] top-1/2 -translate-y-1/2 text-black hover:text-gray-500"
  >
    →
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-30px] top-1/2 -translate-y-1/2 text-black hover:text-gray-500"
  >
    ←
  </button>
);

// Studio logos
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
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.section
      className="py-16 bg-white text-center relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section title */}
      <motion.h2
        className="text-2xl md:text-3xl font-semibold font-secondary text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        Frames that Captivate Millions
      </motion.h2>

      <motion.div
        className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4 mx-auto"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "center" }}
      ></motion.div>

      <motion.p
        className="text-gray-600 text-sm md:text-base font-primary mt-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        From captivating dramas to reality sensations, our stages have set the
        scene for stories that resonate nationwide.
      </motion.p>

      {/* Slider */}
      <motion.div
        className="mt-10 relative max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Slider {...settings}>
          {studios.map((studio, index) => (
            <motion.div
              key={index}
              className="px-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="flex justify-center">
                <Image
                  src={studio.img}
                  alt={studio.alt}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </motion.section>
  );
}
