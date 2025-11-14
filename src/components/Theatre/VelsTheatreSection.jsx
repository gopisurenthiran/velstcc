"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Added Framer Motion

export default function VelsTheatreSection() {
  return (
    <motion.section
      className="relative bg-white py-20 px-6 md:px-16 lg:px-24" id="theartre"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* ---------- Left Content ---------- */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-secondary text-gray-900 mb-2">
            Vels Theatres
          </h2>
          <div className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"></div>

          <h3 className="text-2xl md:text-4xl font-primary mt-10 text-gray-900 leading-snug mb-6">
            Bigger Screen.<span className="text-gray-800">Deeper Sound.</span>{" "}
            Greater Emotion.
          </h3>

          <p className="text-gray-600 text-md font-primary md:text-md leading-relaxed mb-8">
           Vels Theatres redefines the movie-going experience with immersive 4K ultra-high-definition projection and Dolby Atmos sound that envelops every seat. From the floor-to-roof screen to acoustically perfected architecture, every element is designed to pull you into the story.<br />Here, cinema isn’t just watched, it’s felt.
          </p>

        <motion.a
  href="https://ticketnew.com/movies/chennai/santosa-cinemas-vels-theatres-chennai-c/1024343"   // ⭐ your real booking link here
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#2D3091] font-primary text-white text-md font-medium px-6 py-3 shadow transition-all inline-block"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
>
  BOOK TICKETS
</motion.a>

        </motion.div>

        {/* ---------- Right Image ---------- */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/vels_theatres.webp"
            alt="Vels Theatres"
            width={600}
            height={400}
            className="relative z-10 w-full h-auto rounded-none"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
