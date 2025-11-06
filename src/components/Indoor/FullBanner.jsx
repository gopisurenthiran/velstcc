"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ---------- Custom Arrows ---------- */
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next"
    type="button"
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/90 shadow border border-gray-200 flex items-center justify-center hover:bg-white"
  >
    →
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous"
    type="button"
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/90 shadow border border-gray-200 flex items-center justify-center hover:bg-white"
  >
    ←
  </button>
);

/* ---------- Slides Data ---------- */
const slides = [
  {
    title: "Indoor Studios ",
    subtitle:
      "Every detail designed to make your indoor shoot effortless and extraordinary ",
    image: "/assets/360.png",
  },
  {
    title: "Sound Stages",
    subtitle: "Acoustically treated, production-ready spaces",
    image: "/assets/360.png",
  },
  {
    title: "Post Production",
    subtitle: "Edit, grade, and mix under one roof",
    image: "/assets/360.png",
  },
];

/* ---------- Animation Variants ---------- */
const fadeIn = {
  hidden: { opacity: 0, scale: 1.02 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const textUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FullBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
    cssEase: "ease-in-out",
    adaptiveHeight: false,
  };

  return (
    <section className="w-full py-20">
      <div className="relative w-full">
        <Slider {...settings}>
          {slides.map((s, i) => (
            <div key={i}>
              {/* Animated Slide Container */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="show"
                className="relative w-full h-[56vh] md:h-[68vh] xl:h-[78vh]"
              >
                {/* Background Image */}
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />

                {/* Caption card bottom-left */}
                <motion.div
                  variants={textUp}
                  initial="hidden"
                  animate="show"
                  className="absolute left-6 md:left-12 bottom-6 md:bottom-10"
                >
                  <div className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-sm">
                    <div className="px-5 md:px-6 py-4 md:py-5 max-w-[92vw] md:max-w-[520px]">
                      <motion.h3
                        variants={textUp}
                        className="text-lg md:text-2xl font-secondary font-medium text-black"
                      >
                        {s.title}
                      </motion.h3>
                      <motion.p
                        variants={textUp}
                        className="mt-2 text-[13px] font-primary md:text-sm leading-6 text-gray-700"
                      >
                        {s.subtitle}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
