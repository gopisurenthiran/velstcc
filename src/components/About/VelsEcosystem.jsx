// app/components/VelsEcosystem.jsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  {
    key: "trade",
    label: "Trade & Convention Centre",
    image: "/assets/ecosystem-1.webp",
    title: "Trade & Convention Centre",
    body: `South India’s most versatile event destination, equipped to host international
trade expos, corporate conferences, product launches, and grand celebrations.
With temperature-controlled halls, advanced AV systems, modular layouts
accommodating up to 5,000 guests, and seamless logistics support, we deliver
events that leave lasting impressions.`,
    url: "/",
  },
  {
    key: "film",
    label: "Film City",
    image: "/assets/ecosystem-2.webp",
    title: "Film City",
    body: `A filmmaker's paradise featuring state-of-the-art indoor studios with advanced acoustics, green screen technology, and customizable sets ranging from contemporary offices to traditional village streets. Our expansive outdoor backlots offer pre-built environments including beaches, heritage structures, and urban landscapes, all supported by world-class production facilities, makeup rooms, and post-production suites.`,
    url: "/indoor",
  },
  {
    key: "theatres",
    label: "VELS Theatres",
    image: "/assets/ecosystem-3.webp",
    title: "VELS Theatres",
    body: `An ultimate cinema experience featuring five premium screens with Super Screen, Laser projection, and Dolby Atmos sound. Designed for comfort and immersion, our multiplex brings world-class entertainment technology to Chennai's heart, where every frame comes alive with stunning clarity. From production to premiere, from concept to convention, VELS is where excellence happens. At VELS, we believe that progress and responsibility go hand in hand. Our commitment extends beyond business; we're building a legacy that respects our environment and uplifts our community.`,
    url: "/theatre",
  },
];

export default function VelsEcosystem() {
  const [active, setActive] = React.useState("trade");
  const current = TABS.find((t) => t.key === active);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-secondary text-3xl md:text-4xl tracking-tight text-black">
            The VELS Ecosystem
          </h2>
          <div className="mx-auto mt-4 h-[1px] w-24 bg-[#2D3091]" />
          <p className="mt-4 font-primary text-xs md:text-lg leading-relaxed text-black/70 max-w-xl mx-auto">
            VELS is more than a venue, it&apos;s a complete creative and commercial
            ecosystem designed to bring any vision to life.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10">
          <div className="flex justify-center gap-10 text-[11px] md:text-xs font-secondary uppercase">
            {TABS.map((tab) => {
              const isActive = tab.key === active;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={[
                    "relative pb-3 transition-colors text-xl font-secondary",
                    isActive
                      ? "text-primary"
                      : "text-black/60 hover:text-black",
                  ].join(" ")}
                >
                  <span className="mr-1 align-middle">·</span>
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="ecosystem-underline"
                      className="pointer-events-none absolute left-0 bottom-0 h-[1px] w-full bg-black"
                      transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          {/* LEFT: image */}
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={current?.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full"
              >
<Image
  src={current?.image}
  alt={current?.title}
  width={0}
  height={0}
  sizes="100vw"
  className="w-auto h-auto"
  priority
/>


              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: text + button */}
          <div className="flex flex-col justify-center">
            <h3 className="font-secondary text-2xl md:text-3xl text-black mb-4">
              {current?.title}
            </h3>
            <p className="font-primary text-sm md:text-base leading-relaxed text-black/70 whitespace-pre-line">
              {current?.body}
            </p>

            {/* 🔵 EXACT small button */}
            <a
              href={current?.url}
              className="mt-6 inline-flex items-center justify-center
                         bg-[#2D3091] text-white
                         text-[11px] font-secondary font-semibold tracking-[0.18em] uppercase
                         w-[120px] h-[32px]
                         hover:bg-[#222566] transition-colors"
            >
              KNOW MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
