"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
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
    subtitle: "Everything you need for a seamless shoot",
    image: "/assets/hero-1.jpg",
  },
  {
    title: "Sound Stages",
    subtitle: "Acoustically treated, production-ready spaces",
    image: "/assets/hero-2.jpg",
  },
  {
    title: "Post Production",
    subtitle: "Edit, grade, and mix under one roof",
    image: "/assets/hero-3.jpg",
  },
];

export default function FullBanner() {
  const settings = {
    dots: true,
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
    <section className="w-full">
      {/* Full-bleed wrapper */}
      <div className="relative w-full">
        <Slider {...settings}>
          {slides.map((s, i) => (
            <div key={i}>
              {/* Slide frame */}
              <div className="relative w-full h-[56vh] md:h-[68vh] xl:h-[78vh]">
                {/* Background image */}
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />

                {/* Optional dark gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />

                {/* Caption card bottom-left */}
                <div className="absolute left-6 md:left-12 bottom-6 md:bottom-10">
                  <div className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-sm">
                    <div className="px-5 md:px-6 py-4 md:py-5 max-w-[92vw] md:max-w-[520px]">
                      <h3 className="text-lg md:text-2xl font-medium text-black">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[13px] md:text-sm leading-6 text-gray-700">
                        {s.subtitle}
                      </p>
                    </div>
                    {/* thin divider accent like the mock */}
                    <div className="h-[2px] w-24 md:w-28 bg-indigo-400 ml-5 md:ml-6 mb-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
