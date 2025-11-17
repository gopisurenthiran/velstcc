"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ---------- Arrows (used for both) ---------- */
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      absolute 
      top-1/2 -translate-y-1/2 
      right-3 md:right-[-20px]
      z-20
      flex items-center justify-center
      w-8 h-8 md:w-auto md:h-auto
      rounded-full md:rounded-none
      bg-white/90 md:bg-transparent
      shadow-md md:shadow-none
      text-xl md:text-3xl
      text-black hover:text-gray-600
    "
    type="button"
    aria-label="Next"
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
      left-3 md:left-[-20px]
      z-20
      flex items-center justify-center
      w-8 h-8 md:w-auto md:h-auto
      rounded-full md:rounded-none
      bg-white/90 md:bg-transparent
      shadow-md md:shadow-none
      text-xl md:text-3xl
      text-black hover:text-gray-600
    "
    type="button"
    aria-label="Previous"
  >
    ←
  </button>
);

/* ---------- Slide Data ---------- */
const slides = [
  {
    title: "Soundproofed for Storytelling",
    description:
      "Our state-of-the-art soundproof studios let directors capture emotion without interruption, where silence enhances every shot.",
    image: "/assets/soundproofed.webp",
  },
  {
    title: "Lighting that Paints Emotions",
    description:
      "Equipped with adjustable grid lighting and cinematic illumination setups, our indoor spaces bring every frame to life with unmatched visual clarity.",
    image: "/assets/lighting.webp",
  },
  {
    title: "Scalable Sets. Seamless Transitions.",
    description:
      "From courtroom dramas to cosmic adventures, transform any space within hours. Flexible architecture enables quick set builds and smooth production flow.",
    image: "/assets/scalable.webp",
  },
  {
    title: "Controlled Climate. Continuous Creativity.",
    description:
      "Advanced temperature control ensures comfort for long shooting hours, so creativity never breaks a sweat.",
    image: "/assets/controlled.webp",
  },
];

export default function WhyChooseVels() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [wrapWidth, setWrapWidth] = useState(0);
  const wrapRef = useRef(null);

  /* ---------- Track container width (desktop only) ---------- */
  useEffect(() => {
    if (!wrapRef.current) return;
    const obs = new ResizeObserver((entries) => {
      setWrapWidth(entries[0].contentRect.width);
    });
    obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, []);

  const safeWidth = Math.max(wrapWidth, 350);
  const sideWidth = Math.round(safeWidth * 0.25);
  const activeWidth = Math.round(safeWidth * 0.5);

  /* ---------- Slider Settings ---------- */
  const desktopSettings = {
    dots: false,
    infinite: true,
    speed: 700,
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
    speed: 500,
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-secondary font-semibold text-black">
            Spaces that Bring Scripts to Life
          </h2>

          <div className="w-40 h-[1px] bg-[#2D3091] my-4"></div>

          <p className="text-gray-600 text-sm md:text-base font-primary">
            At Vels Film City, every indoor set is crafted for scale, precision,
            and storytelling excellence.
          </p>
        </motion.div>

        {/* ---------- Desktop Slider (md and up) ---------- */}
        <div ref={wrapRef} className="relative hidden md:block">
          <Slider {...desktopSettings}>
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              const widthPx = isActive ? activeWidth : sideWidth;

              return (
                <div key={index} style={{ width: widthPx }}>
                  <div
                    className={`mx-3 bg-white border border-indigo-200 h-[380px] flex overflow-hidden transition-all duration-500 ${
                      isActive
                        ? "flex-row scale-100"
                        : "flex-col scale-95 opacity-90"
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative ${
                        isActive ? "w-1/2" : "w-full"
                      } h-full`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className=""
                      />
                    </div>

                    {/* Description (only for active slide) */}
                    {isActive && (
                      <div className="w-1/2 p-6 bg-white border-l border-primary flex flex-col justify-center">
                        <h3 className="text-lg font-secondary mb-3">
                          {slide.title}
                        </h3>
                        <p className="text-gray-700 text-sm">
                          {slide.description}
                        </p>
                        <span className="mt-4 block w-20 h-[1px] bg-primary"></span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* ---------- Mobile Slider (below md) ---------- */}
        <div className="relative md:hidden">
          <Slider {...mobileSettings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <div className="mx-1 bg-white border border-indigo-200 rounded-md overflow-hidden">
                  {/* Image */}
                  <div className="relative w-full h-56 sm:h-64">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text (always visible on mobile) */}
                  <div className="p-4 bg-white">
                    <h3 className="text-base font-secondary mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-gray-700 text-xs sm:text-sm font-primary">
                      {slide.description}
                    </p>
                    <span className="mt-3 block w-16 h-[1px] bg-primary"></span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-secondary font-semibold">
            Plan Your Indoor Shoot
          </h2>
          <p className="text-gray-600 mt-2 font-primary text-sm md:text-xl">
            Planning a shoot? Check availability or schedule a recce.
          </p>

         <MotionLink
          href="/contact"
          className="inline-flex items-center justify-center bg-primary px-8 py-3 text-white font-medium mt-5"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          GET A QUOTE
        </MotionLink>
        </div>
      </div>
    </section>
  );
}
