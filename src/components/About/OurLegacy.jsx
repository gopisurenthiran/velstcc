// components/Feature.jsx
"use client";
import React from "react";
import Image from "next/image";
import featuredbanner from "@/public/assets/trade_convention_centre.webp";
import { motion } from "framer-motion"; // ✅ Add this

const OurLegacy = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById("target-section");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="relative flex items-center justify-center text-white overflow-hidden"
      id="target-section"
    >
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-4 px-4 gap-8">

        {/* Left Section (Image) */}
        <motion.div
          className="flex-1 p-8 rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
            <Image
              src={featuredbanner}
              alt="Vels Featured Banner Image"
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        {/* Right Section (Text) */}
        <motion.div
          className="flex-1 flex flex-col justify-center p-8 bg-black-50 rounded-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl primary-title text-black mb-2">
              Our Legacy
            </h2>
            <span className="block w-24 h-px bg-primary mt-5 mb-2" aria-hidden />
            <p className="text-gray-700  secondary-subtitle mt-4">
             Beyond the silver screen, Vels Trade & Convention Centre stands as Chennai's most advanced event ecosystem, hosting world-class conventions, international trade expos, and landmark cultural celebrations that unite innovation, business, and creativity under one iconic roof.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurLegacy;
