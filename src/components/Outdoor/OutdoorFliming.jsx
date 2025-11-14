"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OutdoorFliming() {
  /* ---------- Animation Variants ---------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="relative bg-white py-20 px-6 md:px-16 lg:px-24" id="outdoor">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
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
        {/* Left Content */}
        <motion.div className="relative" variants={fadeUp}>
          <motion.h2
            className="text-3xl md:text-4xl font-secondary text-gray-900 mb-2"
            variants={fadeUp}
            custom={0}
          >
            Limitless Outdoor Filming Arenas
          </motion.h2>

          <motion.div
            className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            viewport={{ once: true }}
          ></motion.div>

          <motion.p
            className="text-gray-600 text-md font-primary md:text-md leading-relaxed mb-8"
            variants={fadeUp}
            custom={1}
          >
            Discover spaces where imagination meets scale. Our expansive outdoor
            filming zones provide vast, versatile locations designed for cinematic
            brilliance, ideal for grand sets, open-air productions, and immersive
            storytelling. From timeless heritage landscapes to contemporary
            cityscapes, every setting can be customized to match your creative vision.
          </motion.p>

          <motion.h3
            className="text-2xl md:text-4xl font-primary mt-10 text-gray-900 leading-snug mb-6"
            variants={fadeUp}
            custom={2}
          >
            Grandeur. Access. Excellence.
          </motion.h3>

          <motion.p
            className="text-gray-600 text-md font-primary md:text-md leading-relaxed mb-8"
            variants={fadeUp}
            custom={3}
          >
            As a pan-Indian production hub, our campus welcomes filmmakers from
            Malayalam, Kannada, Telugu, and Bollywood industries, bringing diverse
            narratives to life under one sky.
          </motion.p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/vels_outdoor.webp"
            alt="Vels Theatres"
            width={600}
            height={400}
            className="relative z-10 w-full h-auto rounded-none"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
