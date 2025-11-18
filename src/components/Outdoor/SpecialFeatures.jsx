"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import img1 from "@/public/assets/expansive_parking_for_6_000_cars.webp";
import img2 from "@/public/assets/architectural_grandeur_indoors_out.webp";
import img3 from "@/public/assets/scenic_sets_customizable_spaces.webp";
import img4 from "@/public/assets/uninterrupted_power_acoustic_precision.webp";

const features = [
  {
    img: img1,
    title: "6,000-Car Parking Capacity",
    desc: "One of the largest dedicated parking facilities in the Indian film industry, accommodating cast, crew, visitors, and production vehicles with ease.",
  },
  {
    img: img2,
    title: "Expansive Parking for 6,000+ Cars",
    desc: "A dedicated, high-capacity parking facility, one of the largest in the Indian film industry. Designed for easy access and smooth movement of crew, talent, and production vehicles.",
  },
  {
    img: img3,
    title: "Architectural Grandeur, Indoors & Out",
    desc: "From royal corridors and vintage sets to contemporary lounges, every corner of Vel Film City offers a ready-to-shoot aesthetic, saving hours of setup and lighting time.",
  },
  {
    img: img4,
    title: "Uninterrupted Power & Acoustic Precision ",
    desc: "Our state-of-the-art power backup and acoustic engineering ensure that every spotlight, dialogue, and decibel performs flawlessly. From corporate summits to cinematic shoots, we deliver an ambiance where silence, sound, and spotlight co-exist in perfect rhythm.",
  },
];

export default function SpecialFeatures() {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="py-16 bg-white">
      {/* Header Animation */}
      <motion.div
        className="max-w-6xl mx-auto mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.h2
          className="primary-title text-gray-900 px-6 md:px-10"
          variants={fadeUp}
          custom={0}
        >
          The Vels Signature
        </motion.h2>

        <motion.div
          className="w-32 md:w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4 ml-6 md:ml-10"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          viewport={{ once: true }}
        ></motion.div>
      </motion.div>

      {/* Grid Section Animation */}
      <motion.div
        className="
          max-w-6xl mx-auto px-4
          grid gap-4
          md:grid-cols-3
          md:grid-rows-[repeat(2,250px)]
        "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Left Tall Image */}
        <motion.div
          className="relative group overflow-hidden h-[260px] sm:h-[320px] md:h-[520px] md:row-span-2"
          variants={fadeUp}
          custom={0}
        >
          <Image
            src={features[0].img}
            alt={features[0].title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className=" transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 text-white transition-all">
            <h3 className="primary-subtitle">
              {features[0].title}
            </h3>
            <div className="w-28 md:w-40 h-[0.5px] bg-white mb-4 md:mb-6 mt-3 md:mt-4"></div>
            <p className="secondary-description mt-1">
              {features[0].desc}
            </p>
          </div>
        </motion.div>

        {/* Top Right 2 Images */}
        {features.slice(1, 3).map((feature, index) => (
          <motion.div
            key={feature.title}
            className="relative group overflow-hidden h-[220px] sm:h-[260px] md:h-full"
            variants={fadeUp}
            custom={index + 1}
          >
            <Image
              src={feature.img}
              alt={feature.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className=" transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-3 text-white transition-all">
              <h3 className="primary-subtitle">
                {feature.title}
              </h3>
              <div className="w-28 md:w-40 h-[0.5px] bg-white mb-4 md:mb-6 mt-3 md:mt-4"></div>
              <p className="secondary-description mt-1">
                {feature.desc}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Bottom Full Width */}
        <motion.div
          className="relative group overflow-hidden h-[220px] sm:h-[260px] md:h-[250px] md:col-span-2"
          variants={fadeUp}
          custom={4}
        >
          <Image
            src={features[3].img}
            alt={features[3].title}
            fill
            sizes="(min-width: 768px) 66vw, 100vw"
            className="transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-3 text-white transition-all">
            <h3 className="primary-subtitle">
              {features[3].title}
            </h3>
            <div className="w-28 md:w-40 h-[0.5px] bg-white mb-4 md:mb-6 mt-3 md:mt-4"></div>
            <p className="secondary-description mt-1">
              {features[3].desc}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
