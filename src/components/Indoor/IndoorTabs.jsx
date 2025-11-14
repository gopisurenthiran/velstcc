"use client";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images
import sustainabilityImg from "@/public/assets/the_vels_assurance.webp";
import craftedImg from "@/public/assets/crafted_for_comfort.webp";

const TABS = [
  {
    key: "comfort",
    label: "Crafted for Comfort",
    image: craftedImg,
    items: [
      {
        title: "Every detail designed around you.",
        desc:
          "Behind the scenes, we take as much care of people as we do the production. From spacious makeup rooms and climate-controlled lounges to on-site dining...",
      },
    ],
  },
  {
    key: "assurance",
    label: "The Vels Assurance",
    image: sustainabilityImg,
    items: [
      {
        title: "Safety, sustainability, and sophistication under one roof.",
        desc:
          "Our commitment to excellence goes beyond the lens. Each indoor facility operates with eco-friendly practices...",
      },
    ],
  },
];

export default function IndoorTabs() {
  const [active, setActive] = React.useState(TABS[0].key);
  const current = TABS.find((t) => t.key === active);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-white py-16">
      <motion.div
        className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-2 items-start"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >

        {/* ---------- RIGHT CONTENT (mobile first) ---------- */}
        <motion.div
          variants={fadeInUp}
          className="order-1 md:order-none"
        >
          {/* Tabs */}
          <div role="tablist" className="flex gap-10 pb-3">
            {TABS.map((tab) => {
              const isActive = tab.key === active;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`relative pb-2 text-xs md:text-sm uppercase tracking-wide font-secondary transition-colors ${
                    isActive ? "text-black" : "text-gray-500 hover:text-black"
                  }`}
                >
                  {/* Dot */}
                  {isActive && (
                    <motion.span
                      layoutId="dot"
                      className="inline-block h-1.5 w-1.5 rounded-full bg-primary mr-2"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}

                  {tab.label}

                  {/* Underline */}
                  <motion.span
                    layoutId={`underline-${tab.key}`}
                    className="pointer-events-none absolute left-0 -bottom-[1px] h-[1px] w-full bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              );
            })}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mt-8 space-y-6"
            >
              {current.items.map((it, idx) => (
                <div key={idx} className="max-w-xl">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-base md:text-lg font-secondary text-gray-800"
                  >
                    {it.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-sm md:text-[15px] font-primary text-gray-600 mt-2 leading-relaxed"
                  >
                    {it.desc}
                  </motion.p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ---------- LEFT IMAGE (mobile second) ---------- */}
        <motion.div
          variants={fadeInUp}
          className="w-full flex justify-center order-2 md:order-none"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full"
            >
              <Image
                src={current.image}
                alt={current.label}
                width={600}
                height={500}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </motion.div>
    </section>
  );
}
