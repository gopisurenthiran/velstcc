"use client";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import sustainabilityImg from "@/public/assets/the_vels_assurance.webp";
import Img from "@/public/assets/crafted_for_comfort.webp";

const TABS = [
  {
    key: "sustainability",
    label: "Harmony with Nature",
    image: sustainabilityImg,
    items: [
      {
        desc: "A vision where creativity coexists with conservation. At Vel Film City, we believe great stories deserve a greener stage. Every aspect of our campus reflects a thoughtful, eco-responsible design, from preserving natural contours to powering up with solar energy. Rainwater harvesting, wastewater recycling, and energy-efficient lighting form the backbone of our commitment to sustainability. With ozone-friendly air systems, daylight-optimized halls, and self-reliant power and water generation, we ensure that every production here flows seamlessly, in harmony with nature, and in tune with tomorrow.",
      },
    ],
  },
  {
    key: "hss",
    label: "Safety in Every Frame",
    image: Img,
    items: [
      {
        desc: "Where wellbeing takes center stage.Vel Film City is built on a foundation of care, for people, property, and peace of mind. Our professional housekeeping team ensures spotless, hygienic environments using advanced, eco-friendly cleaning systems. A network of trained security personnel, robust access controls, and 24/7 CCTV surveillance keeps every corner under safe watch. We work closely with local law enforcement and fire safety departments, ensuring preparedness and precision in every protocol. Because at Vel Film City, your focus should stay on the story, while we take care of the rest.",
      },
    ],
  },
];

export default function SustainabilityTabs() {
  const [active, setActive] = React.useState(TABS[0].key);
  const current = TABS.find((t) => t.key === active) || TABS[0];

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const fadeImage = {
    hidden: { opacity: 0, scale: 1.03 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    exit: { opacity: 0, scale: 1.02, transition: { duration: 0.5 } },
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
        {/* CONTENT → mobile first, desktop right */}
        <motion.div
          className="w-full order-1 md:order-2"
          variants={fadeUp}
        >
          <div className="flex gap-10 pb-3">
            {TABS.map((tab) => {
              const isActive = tab.key === active;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`relative pb-2 text-xs md:text-sm uppercase tracking-wide primary-subtitle transition-colors ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="dot"
                      className="inline-block mr-2 h-1.5 w-1.5 rounded-full bg-primary"
                    />
                  )}
                  {tab.label}

                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-[1px] h-[1px] bg-primary"
                      style={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.6 }}
              className="mt-8 max-w-2xl"
            >
              <p className="secondary-description text-gray-500 leading-relaxed">
                {current.items[0].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* IMAGE → mobile second, desktop left */}
        <motion.div
          className="w-full flex justify-center order-2 md:order-1"
          variants={fadeUp}
        >
          <div className="relative w-full max-w-[520px] mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={fadeImage}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <Image
                  src={current.image}
                  alt={current.label}
                  width={600}
                  height={500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
