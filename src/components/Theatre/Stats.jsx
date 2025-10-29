"use client";
import React from "react";
import Image from "next/image";

// ✅ Import your icons
import icon1 from "@/public/assets/icons/block.svg";
import icon2 from "@/public/assets/icons/arrow.svg";
import icon3 from "@/public/assets/icons/location.svg";
import icon4 from "@/public/assets/icons/car.svg";

// ✅ Stat data
const statsData = [
  { value: "6", label: "Screens", icon: icon1 },
  { value: "1,515", label: "Seats", icon: icon3 },
  { value: "1", label: "Single Multiplex in Area", icon: icon2 },
  { value: "4K | Dolby", label: "4K Ultra-HD, Dolby Atmos", icon: icon4 },
];

// ✅ Reusable stat item
const StatItem = ({ value, label, icon }) => (
  <div className="flex flex-col items-center justify-center text-center px-4">
    {/* Icon */}
    <div className="mb-3 flex justify-center">
      <Image
        src={icon}
        alt={label}
        unoptimized
        priority
        className="inline-block w-10 h-10 object-contain"
      />
    </div>

    {/* Value */}
    <div className="text-xl md:text-2xl font-semibold text-black leading-snug">
      {value}
    </div>

    {/* Label */}
    <p className="mt-1 text-base md:text-lg text-black/80 font-medium font-primary">
      {label}
    </p>
  </div>
);

export default function Stats() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-y-10 md:gap-y-0">
          {statsData.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
