"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Icons
import icon1 from "@/public/assets/icons/block.svg";
import icon2 from "@/public/assets/icons/arrow.svg";
import icon3 from "@/public/assets/icons/location.svg";
import icon4 from "@/public/assets/icons/car.svg";

// Stat Data
const statsData = [
  { value: "4", label: "Number of Blocks", icon: icon1 },
  { value: "3.5 L sq. ft.", label: "Total Space", icon: icon3 },
  { value: "50 ft", label: "Ceiling Height", icon: icon2 },
  { value: "6000+", label: "Car Parkings", icon: icon4 }, // updated value as requested earlier
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.20 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Reusable Stat Item Component
const StatItem = ({ value, label, icon }) => (
  <motion.div
    variants={item}
    className="flex flex-col items-center text-center px-4 h-full"
  >
    {/* Icon */}
    <div className="mb-4 flex justify-center">
      <Image
        src={icon}
        alt={label}
        className="inline-block h-auto w-auto object-contain"
        unoptimized
        priority
      />
    </div>

    {/*
      Make the middle block take remaining space so value blocks line up.
      Using flex-1 ensures the value area grows equally across all cards.
    */}
    <div className="flex flex-col items-center justify-between h-full w-full">
      {/* Value area — flex-1 so the value blocks get equal height */}
      <div className="flex-1 flex items-center">
        <div className="w-full">
          <div className="text-3xl md:text-4xl font-bold text-black leading-tight min-h-[48px] flex items-center justify-center">
            {value}
          </div>
        </div>
      </div>

      {/* Label area */}
      <div className="w-full">
        <p className="mt-2 text-sm md:text-base text-black/70 font-medium font-primary min-h-[40px] flex items-center justify-center">
          {label}
        </p>
      </div>
    </div>
  </motion.div>
);

// Main Component
export default function StatsGrid() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Make grid items stretch so each column cell has same height */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 text-center gap-6 items-stretch"
        >
          {statsData.map((stat, i) => (
            // Wrap each StatItem in a full-height container to ensure stretching on all breakpoints
            <div key={i} className="h-full">
              <StatItem {...stat} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
