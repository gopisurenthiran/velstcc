"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Theatre360() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };

  const slides = [
    { image: "/assets/showcase-1.webp" },
    { image: "/assets/showcase-2.webp" },
    { image: "/assets/showcase-3.webp" },
    { image: "/assets/showcase-4.webp" },
    { image: "/assets/showcase-5.webp" },
    { image: "/assets/showcase-6.webp" },
    { image: "/assets/showcase-1.webp" },
    { image: "/assets/showcase-2.webp" },
    { image: "/assets/showcase-3.webp" },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="relative w-full min-h-screen">
            <img
              src={slide.image}
              alt={`Theatre slide ${i + 1}`}
              className="object-cover w-full h-screen"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
