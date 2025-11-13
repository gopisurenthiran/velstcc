"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import icon1 from "@/public/assets/outdoor.svg";
import icon2 from "@/public/assets/on-site.svg";
import icon3 from "@/public/assets/zap.svg";
import icon4 from "@/public/assets/only.svg";

// ✅ Stat data
const statsData = [
  { value: "75", label: "Acres of outdoor sets", icon: icon1 },
  { value: "60", label: "On-site guest rooms (accommodation)", icon: icon3 },
  { value: "24x7", label: "Power & tech support (generator-backed)", icon: icon2 },
  { value: "1", label: "Only film city in Tamil Nadu (unique status)", icon: icon4 },
];

// ✅ Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ✅ Reusable stat item
const StatItem = ({ value, label, icon, index }) => (
  <motion.div
    className="flex flex-col items-center justify-center text-center px-4"
    custom={index}
    variants={fadeUp}
  >
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
    <p className="mt-4 text-base md:text-md text-black/80 font-light font-primary min-h-[48px] flex items-center justify-center">
      {label}
    </p>
  </motion.div>
);

export default function Stats() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-y-10 md:gap-y-0">
          {statsData.map((stat, i) => (
            <StatItem key={i} {...stat} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
