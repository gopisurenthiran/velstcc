"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";


const images = [
  "/assets/reelview-1.webp",
  "/assets/reelview-2.webp",
  "/assets/reelview-3.webp",
  "/assets/reelview-4.webp",
  "/assets/reelview-5.webp",
  "/assets/reelview-6.webp",
  "/assets/reelview-7.webp",
  "/assets/reelview-8.webp",
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
       <div className="text-center">
      {/* Title Animation */}
      <motion.h2
        className="text-3xl  mb-2 font-secondary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        Frame by Frame
      </motion.h2>

      {/* Divider Line Animation */}
      <motion.div
        className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4 mx-auto"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "center" }}
      ></motion.div>

      {/* Paragraph Animation */}
      <motion.p
        className="text-gray-600 mb-8 font-primary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        A behind-the-lens look at perfection in progress. 
      </motion.p>
    </div>

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
