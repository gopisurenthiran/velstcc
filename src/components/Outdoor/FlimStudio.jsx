"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ---------- Animation Variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------- Studio logos ---------- */
const studios = [
  { img: "/assets/indian-1.webp", alt: "Bhavana Studios" },
  { img: "/assets/indian-2.webp", alt: "Lyca Productions" },
  { img: "/assets/indian-3.webp", alt: "Z Studios" },
];

export default function FilmStudio() {
  return (
    <section className="py-16 bg-white text-center">

      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-semibold font-secondary text-black"
          variants={fadeUp}
        >
          India’s Premier Destination for Filmmakers
        </motion.h2>

        <motion.div
          className="w-40 h-[1px] bg-[#2D3091] mb-6 mt-4 mx-auto"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />

        <motion.p
          className="text-gray-600 text-sm md:text-base font-primary mt-2"
          variants={fadeUp}
        >
          Every frame finds its moment, from serials to reality shows and Grand Premiers
        </motion.p>
      </motion.div>

      {/* FULL SIZE IMAGE GRID */}
      <motion.div
        className="
          mt-12
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-10 
          max-w-7xl 
          mx-auto 
          px-6
        "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {studios.map((studio, index) => (
          <motion.div
            key={index}
            variants={scaleIn}
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              src={studio.img}
              alt={studio.alt}
              width={380}
              height={510}
              className=""
              priority={index === 0}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
