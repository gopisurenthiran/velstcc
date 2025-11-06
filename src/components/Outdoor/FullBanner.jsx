"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
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
    title: "Outdoor",
    subtitle: "Crafted for creators who demand perfection, rain or shine",
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

  /* ---------- Motion Variants ---------- */
  const imageMotion = {
    hidden: { opacity: 0, scale: 1.03 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
    exit: { opacity: 0, scale: 1.02, transition: { duration: 0.5 } },
  };

  const textMotion = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, y: 10, transition: { duration: 0.4 } },
  };

  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="relative w-full">
        <Slider {...settings}>
          {slides.map((s, i) => (
            <div key={i}>
              <div className="relative w-full h-[56vh] md:h-[68vh] xl:h-[78vh] overflow-hidden">
                {/* AnimatePresence for fade transitions */}
                <AnimatePresence mode="wait">
                  {/* Background Image */}
                  <motion.div
                    key={s.image}
                    variants={imageMotion}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      priority={i === 0}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Caption Card */}
                <motion.div
                  variants={textMotion}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="absolute left-6 md:left-12 bottom-6 md:bottom-10"
                >
                  <div className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-sm">
                    <div className="px-5 md:px-6 py-4 md:py-5 max-w-[92vw] md:max-w-[520px]">
                      <motion.h3
                        variants={textMotion}
                        className="text-lg md:text-2xl font-secondary font-medium text-black"
                      >
                        {s.title}
                      </motion.h3>
                      <motion.p
                        variants={textMotion}
                        className="mt-2 text-[13px] font-primary md:text-sm leading-6 text-gray-700"
                      >
                        {s.subtitle}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
