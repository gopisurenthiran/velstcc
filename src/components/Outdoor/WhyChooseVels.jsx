"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";


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
    className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-black hover:text-gray-600 z-10 text-2xl"
    aria-label="Next"
    type="button"
  >
    →
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-40px] top-1/2 -translate-y-1/2 text-black hover:text-gray-600 z-10 text-2xl"
    aria-label="Previous"
    type="button"
  >
    ←
  </button>
);

/* ----------  Slide Data ---------- */
const slides = [
  {
    title: "Expansive & Adaptable Spaces ",
    description:
      "From grand outdoor sets to versatile indoor studios, our 75-acre campus offers endless possibilities for film, television, and commercial shoots.",
    image: "/assets/expansive_adaptable_spaces.webp",
  },
  {
    title: "World-Class Production Infrastructure ",
    description:
      "Equipped with advanced lighting, acoustics, and soundproof studios, VELS Film City ensures a seamless filmmaking experience, from script to screen. ",
    image: "/assets/world_class_production_infrastructure.webp",
  },
  {
    title: "Skilled Technical & Creative Talent",
    description:
      "Backed by VELS University’s media and film departments, our trained professionals provide expertise in cinematography, set design, editing, and post-production. ",
    image: "/assets/skilled_technical_creative_talent.webp",
  },
  {
    title: "Seamless Connectivity & Support ",
    description:
      "Strategically located with easy access to airports, highways, and luxury accommodations, VELS Film City ensures convenience and continuity at every stage of production. ",
    image: "/assets/seamless_connectivity_support.webp",
  },
];

/* ----------  Component ---------- */
export default function WhyChooseVels() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [wrapWidth, setWrapWidth] = useState(0);
  const wrapRef = useRef(null);

  // Measure container width to compute 50% / 25% / 25% in px
  useEffect(() => {
    if (!wrapRef.current) return;

    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width || 0;
      setWrapWidth(w);
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // Guard for first render
  const safeWidth = Math.max(wrapWidth, 320);
  const sideW = Math.round(safeWidth * 0.25);   // col-3
  const activeW = Math.round(safeWidth * 0.5);  // col-6

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    // Keep your existing behavior
    centerMode: true,
    centerPadding: "0px",
    variableWidth: true,
    slidesToScroll: 1,
    focusOnSelect: true,

    beforeChange: (_, next) => setActiveIndex(next),

    // Mobile: fall back to single full-width slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: false,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-[#F5F5F5] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* ---------- Heading ---------- */}
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
      {/* Heading */}
      <motion.h2
        className="text-3xl font-semibold text-black font-secondary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        Why Choose Vels Film City?
      </motion.h2>

      {/* Divider Line */}
      <motion.div
        className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        viewport={{ once: true }}
      ></motion.div>

      {/* Paragraph */}
      <motion.p
        className="text-gray-600 mt-2 text-sm md:text-base font-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        Where imagination meets infrastructure, and every frame finds its canvas.
        VELS Film City brings together scale, skill, and sophistication, designed
        for filmmakers who dream beyond limits.
      </motion.p>
    </motion.div>

        {/* ---------- Slider ---------- */}
        <div className="relative" ref={wrapRef}>
          <Slider {...settings}>
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;

              // Width per slide (px) for variableWidth mode
              const widthPx = isActive ? activeW : sideW;

              return (
                // Important: width must be on the *outer slide item* for variableWidth
                <div key={index} style={{ width: widthPx }}>
                  <div
                    className={`mx-3 border border-indigo-200 bg-white transition-all duration-500 overflow-hidden h-[380px] flex ${
                      isActive ? "flex-row" : "flex-col"
                    } ${isActive ? "scale-[1.0]" : "scale-[0.96] opacity-90"}`}
                  >
                    {/* Image */}
                    <div
                      className={`relative ${
                        isActive ? "w-1/2 h-full" : "w-full h-full"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                        priority={index === 0}
                      />
                    </div>

                    {/* Description (only for active slide) */}
                    {isActive && (
                      <div
                        className="
                          w-1/2 p-6 flex flex-col justify-center
                          border-l border-primary
                          bg-[#F7F9FF]  /* light tinted background like screenshot */
                        "
                      >
                        <h3 className="text-lg md:text-xl font-secondary font-medium text-black mb-3">
                          {slide.title}
                        </h3>

                        <p className="text-gray-700 text-sm font-primary leading-relaxed">
                          {slide.description}
                        </p>

                        {/* thin accent line at bottom */}
                        <span className="mt-4 inline-block h-[1px] w-24 bg-primary"></span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
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
      {/* Heading */}
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-black mb-3 font-secondary"
        variants={fadeUp}
        custom={0}
      >
        Plan Your Next Outdoor Shoot
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-gray-600 text-sm md:text-base mb-6 font-primary"
        variants={fadeUp}
        custom={1}
      >
        Schedule your shoot effortlessly, from power and dining to logistics,
        everything you need is right here.
      </motion.p>

      {/* Button */}
      <motion.button
        className="bg-[#1E2A78] text-white text-xs font-primary font-semibold px-5 py-2 rounded"
        variants={fadeUp}
        custom={2}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        GET A QUOTE
      </motion.button>
    </motion.div>
    </section>
  );
}
