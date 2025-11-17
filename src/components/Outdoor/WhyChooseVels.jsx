"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ----------  Custom Arrows ---------- */
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      absolute 
      top-1/2 -translate-y-1/2 
      right-3 md:right-[-40px]
      z-30
      flex items-center justify-center
      w-8 h-8 md:w-10 md:h-10
      rounded-full md:rounded-none
      bg-white/90 md:bg-transparent
      shadow-md md:shadow-none
      text-xl md:text-2xl 
      text-black hover:text-gray-700
    "
    aria-label="Next"
    type="button"
  >
    →
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      absolute 
      top-1/2 -translate-y-1/2 
      left-3 md:left-[-40px]
      z-30
      flex items-center justify-center
      w-8 h-8 md:w-10 md:h-10
      rounded-full md:rounded-none
      bg-white/90 md:bg-transparent
      shadow-md md:shadow-none
      text-xl md:text-2xl 
      text-black hover:text-gray-700
    "
    aria-label="Previous"
    type="button"
  >
    ←
  </button>
);

/* ---------- Slides ---------- */
const slides = [
  {
    title: "Expansive & Adaptable Spaces",
    description:
      "From grand outdoor sets to versatile indoor studios, our 75-acre campus offers endless possibilities for film, television, and commercial shoots.",
    image: "/assets/expansive_adaptable_spaces.webp",
  },
  {
    title: "World-Class Production Infrastructure",
    description:
      "Equipped with advanced lighting, acoustics, and soundproof studios, VELS Film City ensures a seamless filmmaking experience, from script to screen.",
    image: "/assets/world_class_production_infrastructure.webp",
  },
  {
    title: "Skilled Technical & Creative Talent",
    description:
      "Backed by VELS University’s media and film departments, our trained professionals provide expertise in cinematography, set design, editing, and post-production.",
    image: "/assets/skilled_technical_creative_talent.webp",
  },
  {
    title: "Seamless Connectivity & Support",
    description:
      "Strategically located with easy access to airports, highways, and luxury accommodations, VELS Film City ensures convenience and continuity at every stage of production.",
    image: "/assets/seamless_connectivity_support.webp",
  },
];

/* ---------- Component ---------- */
export default function WhyChooseVels() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [wrapWidth, setWrapWidth] = useState(0);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current) return;

    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width || 0;
      setWrapWidth(w);
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  const safeWidth = Math.max(wrapWidth, 320);
  const sideW = Math.round(safeWidth * 0.25);
  const activeW = Math.round(safeWidth * 0.5);

  const desktopSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "0px",
    variableWidth: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  const mobileSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
  };

  return (
    <section className="py-16 bg-[#F5F5F5] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-left mb-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h2
            className="text-3xl font-semibold text-black font-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Why Choose Vels Film City?
          </motion.h2>

          <motion.div
            className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />

          <motion.p
            className="text-gray-600 mt-2 text-sm md:text-base font-primary"
            variants={fadeUp}
          >
            Where imagination meets infrastructure, and every frame finds its canvas.
          </motion.p>
        </motion.div>

        {/* Desktop Slider */}
        <div ref={wrapRef} className="relative hidden md:block">
          <Slider {...desktopSettings}>
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              const widthPx = isActive ? activeW : sideW;

              return (
                <div key={index} style={{ width: widthPx }}>
                  <div
                    className={`mx-3 border border-indigo-200 bg-white transition-all duration-500 overflow-hidden h-[380px] flex ${
                      isActive ? "flex-row scale-[1.0]" : "flex-col scale-[0.96] opacity-90"
                    }`}
                  >
                    {/* Image */}
                    <div className={isActive ? "w-1/2 h-full relative" : "w-full h-full relative"}>
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Text (only active) */}
                    {isActive && (
                      <div className="w-1/2 p-6 flex flex-col justify-center bg-[#F7F9FF] border-l">
                        <h3 className="text-lg md:text-xl font-secondary font-medium text-black mb-3">
                          {slide.title}
                        </h3>
                        <p className="text-gray-700 text-sm font-primary leading-relaxed">
                          {slide.description}
                        </p>
                        <span className="mt-4 inline-block h-[1px] w-24 bg-primary"></span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* Mobile Slider */}
        <div className="relative md:hidden">
          <Slider {...mobileSettings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <div className="mx-1 border border-indigo-200 bg-white rounded-md overflow-hidden">
                  <div className="relative w-full h-56 sm:h-64">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className=""
                    />
                  </div>

                  <div className="p-4 bg-[#F7F9FF]">
                    <h3 className="text-base font-secondary font-medium text-black mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-gray-700 text-xs sm:text-sm font-primary leading-relaxed">
                      {slide.description}
                    </p>
                    <span className="mt-3 inline-block h-[1px] w-16 bg-primary"></span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center px-4 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-black mb-3 font-secondary"
          variants={fadeUp}
        >
          Plan Your Next Outdoor Shoot
        </motion.h2>

        <motion.p
          className="text-gray-600 text-sm md:text-base mb-6 font-primary"
          variants={fadeUp}
        >
          Schedule your shoot effortlessly — from power and dining to logistics, everything you need is right here.
        </motion.p>

        <MotionLink
          href="/contact"
          className="inline-flex items-center justify-center bg-primary px-8 py-3 text-white font-medium "
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          GET A QUOTE
        </MotionLink>
      </motion.div>
    </section>
  );
}
