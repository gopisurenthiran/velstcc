"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    title: "Soundproofed for Storytelling",
    description:
      "Our state-of-the-art soundproof studios let directors capture emotion without interruption, where silence enhances every shot.",
    image: "/assets/why-1.png",
  },
  {
    title: "Lighting that Paints Emotions",
    description:
      "Equipped with adjustable grid lighting and cinematic illumination setups, our indoor spaces bring every frame to life with unmatched visual clarity.",
    image: "/assets/why-2.png",
  },
  {
    title: "Scalable Sets. Seamless Transitions. ",
    description:
      "From courtroom dramas to cosmic adventures, transform any space within hours. Flexible architecture enables quick set builds and smooth production flow.",
    image: "/assets/why-3.png",
  },
  {
    title: "Controlled Climate. Continuous Creativity.",
    description:
      "Advanced temperature control and ventilation systems ensure comfort for long shooting hours, so creativity never breaks a sweat.",
    image: "/assets/indian-2.png",
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
  const sideW = Math.round(safeWidth * 0.25); // col-3
  const activeW = Math.round(safeWidth * 0.5); // col-6

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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-semibold text-black font-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            Spaces that Bring Scripts to Life
          </motion.h2>

          <motion.div
            className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          ></motion.div>

          <motion.p
            className="text-gray-600 mt-2 text-sm md:text-base font-primary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            At Vels Film City, every indoor set is crafted to capture
            imagination and deliver perfection. Designed for scale, precision,
            and storytelling excellence, these are the spaces where cinema finds
            its rhythm.
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
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <motion.h2
    className="text-2xl md:text-3xl font-semibold text-black mb-3 font-secondary"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    viewport={{ once: true }}
  >
    Plan Your Indoor Shoot
  </motion.h2>

  <motion.p
    className="text-gray-600 text-sm md:text-base mb-6 font-primary"
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
    viewport={{ once: true }}
  >
    Planning a shoot? Check availability or schedule a recce.
  </motion.p>

  <motion.button
    className="bg-[#1E2A78] text-white text-xs font-primary font-semibold px-5 py-2 rounded"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    GET A QUOTE
  </motion.button>
</motion.div>
    </section>
  );
}
