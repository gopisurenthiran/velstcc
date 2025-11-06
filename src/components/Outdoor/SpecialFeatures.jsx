"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import img1 from "@/public/assets/special-1.png";
import img2 from "@/public/assets/special-2.png";
import img3 from "@/public/assets/special-3.png";
import img4 from "@/public/assets/special-4.png";

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
    title: "Scenic Sets & Customizable Spaces",
    desc: "Be it a grand ballroom, a cozy café, or a floral courtyard, our pre-designed sets and adaptable backdrops give directors and DOPs endless creative possibilities.",
  },
];

export default function SpecialFeatures() {
  /* ---------- Animation Variants ---------- */
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
          className="text-2xl md:text-4xl font-secondary text-gray-900 px-10"
          variants={fadeUp}
          custom={0}
        >
          The Vels Signature
        </motion.h2>

        <motion.div
          className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4 ml-10"
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
          className="relative group overflow-hidden md:row-span-2 h-[520px]"
          variants={fadeUp}
          custom={0}
        >
          <Image
            src={features[0].img}
            alt={features[0].title}
            fill
            sizes="100%"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 text-white transition-all">
            <h3 className="text-lg font-semibold font-secondary">{features[0].title}</h3>
            <div className="w-40 h-[0.5px] bg-white mb-6 mt-4"></div>
            <p className="text-sm mt-1 font-primary">{features[0].desc}</p>
          </div>
        </motion.div>

        {/* Top Right 2 Images */}
        {features.slice(1, 3).map((feature, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden"
            variants={fadeUp}
            custom={index + 1}
          >
            <Image
              src={feature.img}
              alt={feature.title}
              fill
              sizes="100%"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-3 text-white transition-all">
              <h3 className="text-sm font-semibold font-secondary">{feature.title}</h3>
              <div className="w-40 h-[0.5px] bg-white mb-6 mt-4"></div>
              <p className="text-xs mt-1 font-primary">{feature.desc}</p>
            </div>
          </motion.div>
        ))}

        {/* Bottom Full Width */}
        <motion.div
          className="relative group overflow-hidden col-span-2 h-[250px]"
          variants={fadeUp}
          custom={4}
        >
          <Image
            src={features[3].img}
            alt={features[3].title}
            fill
            sizes="100%"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-3 text-white transition-all">
            <h3 className="text-sm font-semibold font-secondary">{features[3].title}</h3>
            <div className="w-40 h-[0.5px] bg-white mb-6 mt-4"></div>
            <p className="text-xs mt-1 font-primary">{features[3].desc}</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
