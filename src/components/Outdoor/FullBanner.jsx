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

  // Desktop Banners
  const slidesDesktop = [
    { image: "/assets/showcase-1.webp" },
    { image: "/assets/showcase-2.webp" },
    { image: "/assets/showcase-3.webp" },
    { image: "/assets/showcase-4.webp" },
    { image: "/assets/showcase-5.webp" },
    { image: "/assets/showcase-6.webp" },
  ];

  // Mobile Banners
  const slidesMobile = [
    { image: "/assets/kaala_1_mob.webp" },
    { image: "/assets/kaala_2_mob.webp" },
    { image: "/assets/indian_1_mob.webp" },
    { image: "/assets/indian_3_mob.webp" },
    { image: "/assets/enthiran_1_mob.webp" },
    { image: "/assets/enthiran_3_mob.webp" },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Desktop Slider */}
      <div className="hidden md:block">
        <Slider {...settings}>
          {slidesDesktop.map((slide, i) => (
            <div key={i} className="relative w-full min-h-screen">
              <img
                src={slide.image}
                alt={`Desktop Theatre slide ${i + 1}`}
                className="object-cover w-full h-screen"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Mobile Slider */}
      <div className="block md:hidden">
        <Slider {...settings}>
          {slidesMobile.map((slide, i) => (
            <div key={i} className="relative w-full h-[520px]">
              <img
                src={slide.image}
                alt={`Mobile Theatre slide ${i + 1}`}
                className="object-cover w-full h-[520px]"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>

    </section>
  );
}
