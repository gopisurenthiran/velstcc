"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ added for animation

// ✅ Import your icons
import icon1 from "@/public/assets/acres.svg";
import icon2 from "@/public/assets/major.svg";
import icon3 from "@/public/assets/tv.svg";
import icon4 from "@/public/assets/bigg.svg";

// ✅ Stat data
const statsData = [
  { value: "130", label: "Acres of studio campus", icon: icon1 },
  { value: "20%+", label: "Major Indian films shot indoors here", icon: icon3 },
  {
    value: "3+",
    label: "Permanent TV network sets (Kalignar TV, Sun TV, Vijay TV)",
    icon: icon2,
  },
  { value: "6000+", label: "Bigg Boss franchises (Tamil, Malayalam)", icon: icon4 },
];

// ✅ Animated Stat item (no design change)
const StatItem = ({ value, label, icon, index }) => (
  <motion.div
    className="flex flex-col items-center text-center px-4 h-full justify-between"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
      delay: index * 0.15, // staggered animation
    }}
    viewport={{ once: true }}
  >
    {/* Icon */}
    <div className="flex justify-center mb-3">
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
    <p
      className="mt-3 text-base md:text-md text-black/80 font-light font-primary 
      min-h-[70px] flex items-center justify-center leading-tight text-center text-balance"
    >
      {label}
    </p>
  </motion.div>
);

export default function Stats() {
  return (
    <motion.section
      className="py-14 md:py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-y-10 md:gap-y-0 items-stretch">
          {statsData.map((stat, i) => (
            <StatItem key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
