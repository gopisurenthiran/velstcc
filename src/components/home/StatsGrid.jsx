// components/StatsGrid.jsx
"use client";
import React from "react";
import Image from "next/image";

// ✅ Import your icons (these will keep their original pixel size)
import icon1 from "@/public/assets/icons/block.svg";
import icon2 from "@/public/assets/icons/arrow.svg";
import icon3 from "@/public/assets/icons/location.svg";
import icon4 from "@/public/assets/icons/car.svg";

// ✅ Stat data
const statsData = [
  { value: "4", label: "Number of Blocks", icon: icon1 },
  { value: "3.5 L sq. ft.", label: "Total Space", icon: icon3 },
  { value: "50 ft", label: "Ceiling Height", icon: icon2 },
  { value: "6000+", label: "Car Parkings", icon: icon4 },
];

// ✅ Reusable stat item
const StatItem = ({ value, label, icon }) => (
  <div className="flex flex-col items-center justify-center text-center px-4">
    {/* Icon (actual image size preserved) */}
    <div className="mb-3 flex justify-center">
      <Image
        src={icon}
        alt={label}
        // 🚀 DO NOT set width/height — Next.js will use original image size
        className="inline-block h-auto w-auto object-contain"
        unoptimized // Ensures Next.js doesn’t compress or resize it
        priority
      />
    </div>

    {/* Value */}
    <div className="text-3xl md:text-4xl font-bold text-black leading-tight">
      {value}
    </div>

    {/* Label */}
    <p className="mt-2 text-sm md:text-base text-black/70 font-medium font-primary">
      {label}
    </p>
  </div>
);

export default function StatsGrid() {
  return (
    <section className="py-14 md:py-20 bg-white ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {statsData.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
