"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import img1 from "@/public/assets/Signature Set Spaces.png";
import img2 from "@/public/assets/lighting.png";
import img3 from "@/public/assets/A Legacy in Every Frame.png";
import img4 from "@/public/assets/Inspired Indoors.png";

const features = [
  {
    img: img1,
    title: "Signature Set Spaces ",
    desc: "Custom-built soundproof studios equipped for feature films, TV shows, and OTT productions. From large-scale sets to intimate frames, our stages adapt seamlessly to your vision, rain, shine, or starlight. ",
  },
  {
    img: img2,
    title: "Lighting. Acoustics. Perfection. ",
    desc: "Each studio is engineered with high-grade lighting grids, acoustic walls, and climate-controlled environments that make retakes effortless and production timelines smooth. ",
  },
  {
    img: img3,
    title: "A Legacy in Every Frame  ",
    desc: "From Bigg Boss Tamil to grand television premieres, Vels Film City has been the creative home to India’s most-watched productions, where excellence isn’t rented, it’s built into the walls. ",
  },
  {
    img: img4,
    title: "Inspired Indoors ",
    desc: "At Vels Film City, our indoor studios are crafted to give creators absolute control, from acoustically engineered sets to daylight-balanced lighting. Every soundstage is designed for flexibility, privacy, and performance, allowing productions to flow effortlessly from setup to shoot.  ",
  },
];

/* ---------- Animation Variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SpecialFeatures() {
  return (
    <section className="py-16 bg-white">
      {/* HEADER */}
      <motion.div
        className="max-w-6xl mx-auto mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
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

      {/* GRID */}
      <motion.div
        className="max-w-6xl mx-auto px-4 grid gap-4 md:grid-cols-3 md:grid-rows-[repeat(2,250px)]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* Left Tall Image */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="relative group overflow-hidden md:row-span-2 h-[520px]"
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
            variants={fadeUp}
            custom={index + 1}
            className="relative group overflow-hidden h-[250px]"
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
          variants={fadeUp}
          custom={3}
          className="relative group overflow-hidden col-span-2 h-[250px]"
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
