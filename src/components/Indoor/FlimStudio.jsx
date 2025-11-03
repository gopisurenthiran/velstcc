"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow buttons
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-30px] top-1/2 -translate-y-1/2 text-black hover:text-gray-500"
  >
    →
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-30px] top-1/2 -translate-y-1/2 text-black hover:text-gray-500"
  >
    ←
  </button>
);

// Studio logos
const studios = [
  { img: "/assets/biggboss-1.png", alt: "Bhavana Studios" },
  { img: "/assets/biggboss-2.png", alt: "Lyca Productions" },
  { img: "/assets/biggboss-3.png", alt: "Z Studios" },
  { img: "/assets/biggboss-2.png", alt: "Sun Pictures" },
  { img: "/assets/biggboss-1.png", alt: "Rajkamal Films" },
];

export default function FilmStudio() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 bg-white text-center relative">
      {/* Section title */}
      <h2 className="text-2xl md:text-3xl font-semibold font-secondary text-black">
      Frames that Captivate Millions
      </h2>
      <div className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4 mx-auto"></div>
      <p className="text-gray-600 text-sm md:text-base font-primary mt-2">
      From captivating dramas to reality sensations, our stages have set the scene for stories that resonate nationwide.
      </p>

      {/* Slider */}
      <div className="mt-10 relative max-w-4xl mx-auto">
        <Slider {...settings}>
          {studios.map((studio, index) => (
            <div key={index} className="px-3">
              <div className="flex justify-center">
                <Image
                  src={studio.img}
                  alt={studio.alt}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
