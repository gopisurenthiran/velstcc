"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/1.webp",
  "/assets/2.webp",
  "/assets/3.webp",
  "/assets/4.webp",
  "/assets/5.webp",
  "/assets/6.webp",
  "/assets/7.webp",
  "/assets/8.webp",
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

  /* ---------- Animation Variants ---------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-white py-16 px-4 text-center">
      {/* Section Heading */}
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
          className="text-3xl mb-2 font-secondary"
          variants={fadeUp}
          custom={0}
        >
          Behind the Lens
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
          className="text-gray-600 mb-8 font-primary"
          variants={fadeUp}
          custom={1}
        >
          Where the craft behind every “action” and “cut” comes to light.
        </motion.p>
      </motion.div>

      {/* Slider */}
      <motion.div
        className="max-w-7xl mx-auto overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Slider {...settings}>
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="px-2"
              variants={fadeScale}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="overflow-hidden transition-transform duration-300 ease-in-out"
              >
                <Image
                  src={src}
                  alt={`Reel view ${index + 1}`}
                  width={234}
                  height={300}
                  className="w-full h-full"
                  priority={index === 0}
                />
              </motion.div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
