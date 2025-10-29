"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/7.png",
  "/assets/8.png",
  "/assets/9.png",
  "/assets/10.png",
  "/assets/8.png",
  "/assets/7.png",
   "/assets/9.png",
];

export default function ReelView() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-2 font-serif">The Reel View</h2>
      <p className="text-gray-600 mb-8">
        A polished look at what happens between action and cut.
      </p>

      <div className="max-w-7xl mx-auto overflow-hidden">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <div className="overflow-hidden hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                <Image
                  src={src}
                  alt={`Reel view ${index + 1}`}
                  width={100}
                  height={100}
                  className=" w-full h-full"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
