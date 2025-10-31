"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
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
    title: "Flexible spaces for film",
    description:
      "75 Acres of Outdoor Sets – Flexible spaces for film, television, and commercial productions. Expansive, customizable outdoor areas for large-scale shoots.",
    image: "/assets/why-1.png",
  },
  {
    title: "State-of-the-art sound stages",
    description:
      "High-end, acoustically treated indoor stages with advanced lighting and sound equipment for seamless filming.",
    image: "/assets/why-2.png",
  },
  {
    title: "Post-production excellence",
    description:
      "Fully equipped studios with editing, color grading, and sound mixing suites to complete your project in one place.",
    image: "/assets/why-3.png",
  },
  {
    title: "Modern infrastructure",
    description:
      "Convenient facilities including accommodation, dining, and logistics support for hassle-free production experiences.",
    image: "/assets/why-2.png",
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
        <div className="text-left mb-10">
          <h2 className="text-3xl font-semibold text-black font-secondary">
            Why Choose Vels Film City?
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Why Choose Vels Film City?
          </p>
        </div>

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
                          border-l border-indigo-200
                          bg-[#F7F9FF]  /* light tinted background like screenshot */
                        "
                      >
                        <h3 className="text-lg md:text-xl font-medium text-black mb-3">
                          {slide.title}
                        </h3>

                        <p className="text-gray-700 text-sm leading-relaxed">
                          {slide.description}
                        </p>

                        {/* thin accent line at bottom */}
                        <span className="mt-4 inline-block h-[2px] w-24 bg-indigo-300"></span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
        <div className="max-w-4xl mx-auto text-center px-4 py-20">
    <h2 className="text-2xl md:text-3xl font-semibold text-black mb-3">
      Plan Your Outdoor Shoot
    </h2>

    <p className="text-gray-600 text-sm md:text-base mb-6">
      Lock dates, power, dining, and logistics in one go.
    </p>

    <button className="bg-[#1E2A78] text-white text-xs font-semibold px-5 py-2 rounded">
      GET A QUOTE
    </button>
  </div>
    </section>
  );
}
