"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

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
  { img: "/assets/indian-1.webp", alt: "Bhavana Studios" },
  { img: "/assets/indian-2.webp", alt: "Lyca Productions" },
  { img: "/assets/indian-3.webp", alt: "Z Studios" },
  { img: "/assets/indian-2.webp", alt: "Sun Pictures" },
  { img: "/assets/indian-1.webp", alt: "Rajkamal Films" },
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
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  /* ---------- Animation Variants ---------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 bg-white text-center relative overflow-hidden">
      {/* Section Title */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-semibold font-secondary text-black"
          variants={fadeUp}
          custom={0}
        >
          India’s Premier Destination for Filmmakers
        </motion.h2>

        <motion.div
          className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4 mx-auto"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.p
          className="text-gray-600 text-sm md:text-base font-primary mt-2"
          variants={fadeUp}
          custom={1}
        >
          Every frame finds its moment, from serials to reality shows and Grand Premiers
        </motion.p>
      </motion.div>

      {/* Slider Section */}
      <motion.div
        className="mt-10 relative max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Slider {...settings}>
          {studios.map((studio, index) => (
            <motion.div key={index} variants={scaleIn} initial="hidden" whileInView="show">
              <div className="px-3 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={studio.img}
                    alt={studio.alt}
                    width={300}
                    height={300}
                    className="object-contain"
                    priority={index === 0}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
