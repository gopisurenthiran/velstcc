"use client";
import React from "react";
import { motion } from "framer-motion";

const Feature = () => {
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
      id="target-section"
      className="relative flex items-center justify-center bg-white text-black overflow-hidden py-16 px-4"
    >
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 items-center">
        {/* ✅ IMAGE BLOCK WITH ANIMATION */}
        <motion.div
          className="flex-1 rounded-lg overflow-hidden flex justify-center items-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* ✅ Actual size image (no cropping, responsive) */}
          <img
            src="/assets/trade_convention_centre.webp"
            alt="Vels Trade and Convention Centre"
            className="w-auto h-auto max-w-full max-h-[500px] rounded-lg object-contain"
            loading="lazy"
          />
        </motion.div>

        {/* ✅ TEXT BLOCK WITH ANIMATION */}
        <motion.div
          className="flex-1 p-6 md:p-8 bg-white rounded-lg"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl leading-[56px] font-secondary font-medium text-black mb-3">
            The Landmark Where Scale <br /> Meets Splendour 
          </h2>
          <div className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"></div>
          <p className="text-gray-700 font-primary leading-relaxed mb-5">
            Step into Vels Trade & Convention Centre, South India’s premier 3.5
            lakh sq. ft. privately owned trade hub, designed to inspire awe and
            redefine ambition. A masterpiece of architecture, acoustics, and
            aesthetics, it stands as Tamil Nadu’s first privately owned trade
            centre, setting new benchmarks for how events are imagined,
            experienced, and remembered.
          </p>

          <h3 className="text-2xl md:text-2xl font-primary text-black mb-3">
            Think Bigger. Experience Better. Create Beyond.
          </h3>

          <p className="text-gray-700 font-primary leading-[30px] font-light mb-4">
            When others measure in square feet, we measure in possibilities. At
            nearly four times the size of the Chennai Trade & Convention Centre,
            VELS offers an expansive canvas for every vision, from boutique
            gatherings to world-class exhibitions, from corporate milestones to
            cultural grandeur. 
          </p>

          <p className="text-gray-700 font-primary leading-relaxed">
            VELS is where scale transforms into sophistication. 
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
