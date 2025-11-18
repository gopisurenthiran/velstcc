"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ added for animation

export default function IndoorFliming() {
  return (
    <motion.section
      className="relative bg-white py-20 px-6 md:px-16 lg:px-24" id="indoor"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="primary-title text-gray-900 mb-2">
            Where Vision Meets the Spotlight
          </h2>
          <motion.div
            className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          ></motion.div>

          <p className="secondary-description text-gray-600 mb-8">
            Every frame begins here — in spaces where artistry and architecture
            converge. From epic sets to intimate scenes, Vels Film City’s indoor
            studios have powered India’s most iconic stories for over a
            decade. A favourite of filmmakers and creators, nearly 20% of major
            Indian productions have brought their visions to life within these
            walls. Engineered for precision, scale, and speed, our soundproofed,
            climate-controlled studios ensure nothing stands between imagination
            and execution. 
          </p>

          <motion.h3
            className="text-2xl md:text-4xl secondary-highlight mt-10 text-gray-900 leading-snug mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            Precision in Every Frame. Passion in Every Shot. 
          </motion.h3>

          <p className="text-gray-600 text-md secondary-description md:text-md leading-relaxed mb-8">
            Behind every flawless take is an ecosystem engineered for
            excellence. Our indoor spaces merge technology, talent, and timing
            to turn creative vision into cinematic mastery. 
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/vels_indoor.webp"
            alt="Vels Theatres"
            width={600}
            height={400}
            className="relative z-10 w-full h-auto rounded-none"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
