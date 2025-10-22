"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import awardImg from "@/public/assets/award.png";

export default function AwardsSection() {
  const awards = [
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: awardImg,
    },
    {
      title: "Award of Excellence",
      desc: "Recognizing outstanding achievement and creative contribution in filmmaking and production.",
      img: awardImg,
    },
    {
      title: "Best Production Design",
      desc: "Awarded for innovation, craftsmanship, and visual storytelling excellence.",
      img: awardImg,
    },
        {
      title: "Lorem ipsum dolor sit amet",
      desc: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: awardImg,
    },
     {
      title: "Award of Excellence",
      desc: "Recognizing outstanding achievement and creative contribution in filmmaking and production.",
      img: awardImg,
    },
  ];

  // brand-y soft gold
  const gold = "#CAA04C";

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
        {/* Title & Arrows */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-secondary text-gray-900">Awards</h2>
            <div className="w-24 h-[1px] bg-primary mt-3" />
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Previous"
              className="swiper-button-prev-custom cursor-pointer w-20 h-20 flex items-center justify-center text-primary transition"
            >
              <span className="text-3xl">←</span>
            </button>
            <button
              aria-label="Next"
              className="swiper-button-next-custom cursor-pointer w-20 h-20 flex items-center justify-center  text-primary transition"
            >
              <span className="text-3xl">→</span>
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            768: { slidesPerView: 1.4, spaceBetween: 60 },
            1024: { slidesPerView: 2, spaceBetween: 70 },
          }}
          className="!overflow-visible"
        >
          {awards.map((item, i) => (
            <SwiperSlide key={i} className="!overflow-visible">
              {/* Slide Card */}
              <div
                className={`
                  relative flex items-center
                  bg-white
                  border
                  shadow-sm
                  pl-[5rem] pr-[3rem] py-[4rem]
                  transition-all duration-300
                  hover:shadow-md
                  after:content-[''] after:absolute after:inset-0
                  after:translate-x-2 after:translate-y-2
                  after:rounded-md after:-z-10
                `}
                style={{
                  // gold border & faint gold after-layer
                  borderColor: gold,
                  boxShadow:
                    "0 10px 20px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)",
                }}
              >
                {/* Left overlapping tile */}
                <div
                  className="
                    absolute left-0 -translate-x-1/2
                    w-28 h-28
                    grid place-items-center
                  ">
                  <Image
                    src={item.img}
                    alt="Award"
                    width={120}
                    height={140}
                    className="object-contain"
                    priority={i === 0}
                  />
                </div>

                {/* Text block */}
                <div className="ml-4">
                  <h3 className="text-[18px] font-medium text-gray-900 mb-2 font-secondary">
                    {item.title}
                  </h3>
                  <div className="w-24 h-[1px] bg-[#CAA04C] mb-3" />
                  <p className="text-md font-primary text-gray-600 leading-relaxed max-w-[520px]">
                    {item.desc}
                  </p>
                </div>               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
