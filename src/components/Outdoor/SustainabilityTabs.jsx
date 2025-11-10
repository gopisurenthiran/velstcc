"use client";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import sustainabilityImg from "@/public/assets/The Vels Assurance.png";
import Img from "@/public/assets/Crafted for Comfort.png";

const TABS = [
  {
    key: "sustainability",
    label: "Harmony with Nature",
    image: sustainabilityImg,
    items: [
      {
        desc:
          "A vision where creativity coexists with conservation. At Vel Film City, we believe great stories deserve a greener stage. Every aspect of our campus reflects a thoughtful, eco-responsible design, from preserving natural contours to powering up with solar energy. Rainwater harvesting, wastewater recycling, and energy-efficient lighting form the backbone of our commitment to sustainability. With ozone-friendly air systems, daylight-optimized halls, and self-reliant power and water generation, we ensure that every production here flows seamlessly, in harmony with nature, and in tune with tomorrow.",
      },
    ],
  },
  {
    key: "hss",
    label: "Safety in Every Frame",
    image: Img,
    items: [
      {
        desc:
          "Where wellbeing takes center stage. Vel Film City is built on a foundation of care, for people, property, and peace of mind. Our professional housekeeping team ensures spotless, hygienic environments using advanced, eco-friendly cleaning systems. A network of trained security personnel, robust access controls, and 24/7 CCTV surveillance keeps every corner under safe watch. We work closely with local law enforcement and fire safety departments, ensuring preparedness and precision in every protocol. Because at Vel Film City, your focus should stay on the story, while we take care of the rest.",
      },
    ],
  },
];

export default function SustainabilityTabs() {
  const [active, setActive] = React.useState(TABS[0].key);
  const current = TABS.find((t) => t.key === active);

  /* ---------- Animation Variants ---------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const fadeImage = {
    hidden: { opacity: 0, scale: 1.03 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, scale: 1.02, transition: { duration: 0.5 } },
  };

  const fadeText = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.4 } },
  };

  return (
    <section className="bg-white py-16">
      <motion.div
        className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 items-start"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* LEFT IMAGE */}
        <motion.div
          className="relative aspect-[4/5] overflow-hidden"
          variants={fadeUp}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.image.src + active}
              className="absolute inset-0"
              variants={fadeImage}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <Image
                src={current.image}
                alt={current.label}
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div className="w-full" variants={fadeUp}>
          {/* Tabs */}
          <motion.div
            role="tablist"
            className="flex gap-10 pb-3"
            variants={fadeUp}
          >
            {TABS.map((tab) => {
              const isActive = tab.key === active;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`relative pb-2 text-[13px] md:text-sm tracking-wide font-secondary uppercase transition-colors ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="dot"
                      className="inline-block font-secondary align-middle mr-2 h-1.5 w-1.5 rounded-full bg-primary"
                    />
                  )}
                  {tab.label}
                  <motion.span
                    layoutId={`underline-${tab.key}`}
                    className={`pointer-events-none absolute left-0 -bottom-[1px] h-[1px] w-full bg-primary ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              );
            })}
          </motion.div>

          {/* Panel with fade transition */}
          <div className="mt-8 space-y-6">
            <AnimatePresence mode="wait">
              {current.items.map((it, idx) => (
                <motion.div
                  key={active}
                  className="max-w-2xl"
                  variants={fadeText}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <p className="text-xs md:text-sm font-primary text-gray-500 mt-1 leading-relaxed">
                    {it.desc}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
