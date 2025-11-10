"use client";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace with your real image
import sustainabilityImg from "@/public/assets/The Vels Assurance.png";
import img from "@/public/assets/Crafted for Comfort.png";

const TABS = [
  {
    key: "sustainability",
    label: "Crafted for Comfort ",
    image: img,
    items: [
      {
        title: "Every detail designed around you.",
        desc:
          "Behind the scenes, we take as much care of people as we do the production. From spacious makeup rooms and climate-controlled lounges to on-site dining and rest zones, every space is built to support long hours and large crews. ATM access, clean amenities, and a variety of cuisines nearby make your shoot days smoother and more enjoyable. At Vels, comfort isn’t an afterthought, it’s part of the creative experience.",
      },
    ],
  },
  {
    key: "hss",
    label: "The Vels Assurance ",
    image: sustainabilityImg,
    items: [
      {
        title: "Safety, sustainability, and sophistication under one roof.",
        desc:
          "Our commitment to excellence goes beyond the lens. Each indoor facility operates with eco-friendly practices, energy-efficient systems, water reuse, and ozone-safe cooling, ensuring a responsible footprint. Layered with advanced CCTV surveillance, professional housekeeping, and round-the-clock security, every production here unfolds in a space that’s as safe as it is stunning. Because every frame deserves a foundation of trust.",
      },
    ],
  },
];

export default function IndoorTabs() {
  const [active, setActive] = React.useState(TABS[0].key);
  const current = TABS.find((t) => t.key === active);

  /* ---------- Animation Variants ---------- */
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="bg-white py-16">
      <motion.div
        className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-start"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* LEFT IMAGE */}
        <motion.div
          className="relative aspect-[4/5] overflow-hidden"
          variants={fadeInUp}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0"
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
        <motion.div
          className="w-full"
          variants={fadeInUp}
        >
          {/* Tabs */}
          <div role="tablist" className="flex gap-10 pb-3">
            {TABS.map((tab) => {
              const isActive = tab.key === active;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`relative pb-2 text-[13px] md:text-sm tracking-wide font-secondary uppercase transition-colors ${
                    isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="dot"
                      className="inline-block font-secondary align-middle mr-2 h-1.5 w-1.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  {tab.label}

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

          {/* Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-8 space-y-6"
            >
              {current.items.map((it, idx) => (
                <div key={idx} className="max-w-2xl">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-sm md:text-base font-secondary text-gray-800"
                  >
                    {it.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-xs md:text-sm font-primary text-gray-500 mt-1 leading-relaxed"
                  >
                    {it.desc}
                  </motion.p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
