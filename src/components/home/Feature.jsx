"use client";
import React from "react";
import Image from "next/image";
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
          className="flex-1 rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[320px] md:h-[420px]">
            <Image
              src="/assets/trade-convention-centre.png"
              alt="Vels Trade and Convention Centre"
              fill
              priority
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>

        {/* ✅ TEXT BLOCK WITH ANIMATION */}
        <motion.div
          className="flex-1 p-6 md:p-8 bg-white rounded-lg"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-secondary font-semibold text-black mb-3">
            The Landmark of Unmatched <br /> Scale & Excellence
          </h2>

          <p className="text-gray-700 font-primary leading-relaxed mb-5">
            Welcome to Vels Trade & Convention Centre – South India’s only
            3.5 lakh sq. ft. private trade hub.
          </p>

          <h3 className="text-2xl md:text-3xl font-secondary text-black mb-3">
            Bigger. Better. Beyond Compare.
          </h3>

          <p className="text-gray-700 font-primary leading-relaxed mb-4">
            While the Chennai Trade & Convention Centre offers 95,000 sq. ft.,
            Vels Trade & Convention Centre boasts nearly 4X the space.
          </p>

          <p className="text-gray-700 font-primary leading-relaxed">
            VELS – where scale meets sophistication.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
