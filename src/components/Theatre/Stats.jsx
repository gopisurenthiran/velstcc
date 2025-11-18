"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Added for animation

// ✅ Import your icons
import icon1 from "@/public/assets/screens.svg";
import icon2 from "@/public/assets/single.svg";
import icon3 from "@/public/assets/seats.svg";
import icon4 from "@/public/assets/4k.svg";

// ✅ Stat data
const statsData = [
  { value: "6", label: "Screens", icon: icon1 },
  { value: "1,515", label: "Seats", icon: icon3 },
  { value: "1", label: "Single Multiplex in Area", icon: icon2 },
  { value: "4K | Dolby", label: "4K Ultra-HD, Dolby Atmos", icon: icon4 },
];

// ✅ Reusable stat item with animation
const StatItem = ({ value, label, icon, index }) => (
  <motion.div
    className="flex flex-col items-center justify-center text-center px-4"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
      delay: index * 0.15, // subtle stagger for each item
    }}
    viewport={{ once: true }}
  >
    {/* Icon */}
    <motion.div
      className="mb-3 flex justify-center"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Image
        src={icon}
        alt={label}
        unoptimized
        priority
        className="inline-block w-10 h-10 object-contain"
      />
    </motion.div>

    {/* Value */}
    <div className="secondary-title font-bold text-black">
      {value}
    </div>

    {/* Label */}
    <p className="mt-1 text-base md:text-lg text-black/80 secondary-description">
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
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-y-10 md:gap-y-0">
          {statsData.map((stat, i) => (
            <StatItem key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
