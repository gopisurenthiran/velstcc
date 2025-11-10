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
    { image: "/assets/enthiran_1.webp" },
    { image: "/assets/enthiran_2.webp" },
    { image: "/assets/enthiran_3.webp" },
    { image: "/assets/indian_1.webp" },
    { image: "/assets/indian_2.webp" },
    { image: "/assets/indian_3.webp" },
    { image: "/assets/kaala_1.webp" },
    { image: "/assets/kaala_2.webp" },
    { image: "/assets/kaala_3.webp" },
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
