"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easing,
      duration: 0.5,
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { ease: easing, duration: 0.55 } },
};

/* ================== DATA ================== */
const statsData = [
  { icon: "/assets/icons/hall.svg", value: "5", label: "Grand Halls" },
  { icon: "/assets/icons/area.svg", value: "25,000 Sq", label: "space" },
  { icon: "/assets/icons/guests.svg", value: "20,000", label: "Guests" },
];

const tabData = [
  {
    id: "weddings",
    title: "Weddings & Receptions",
    imageSrc: "/assets/weddings_receptions.webp",
    content:
      "From intimate ceremonies to grand celebrations, our venue transforms into the perfect setting for unforgettable memories. Elegant décor, premium hospitality, and seamless arrangements for your special day.",
    stats: [
      { iconSrc: "/assets/icon-1.svg", value: "5", label: "Grand Halls" },
      { iconSrc: "/assets/icon-2.svg", value: "25,000 sq", label: "Space" },
      {
        iconSrc: "/assets/icon-3.svg",
        value: "20,000+",
        label: "Guests Capacity",
      },
    ],
  },
  {
    id: "trade",
    title: "Trade Fairs & Exhibitions",
    imageSrc: "/assets/trade_fairs_exhibitions.webp",
    content:
      "Showcase innovation at scale. With expansive halls and modular layouts, our space empowers brands to host large-scale expos, trade fairs, and product launches with global standards of infrastructure.",
    stats: [
      { iconSrc: "/assets/icon-1.svg", value: "5", label: "Grand Halls" },
      { iconSrc: "/assets/icon-2.svg", value: "25,000 sq", label: "Space" },
      {
        iconSrc: "/assets/icon-3.svg",
        value: "100%",
        label: " Dedicated Exhibition Utilities",
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate Conferences & Expos",
    imageSrc: "/assets/corporate_conferences_expos.webp",
    content:
      "Make every business moment impactful. Equipped with modern AV systems, acoustic excellence, and flexible seating, it’s the perfect stage for global conferences, leadership summits, and annual meets. ",
    stats: [
      { iconSrc: "/assets/icon-1.svg", value: "5", label: "Grand Halls" },
      { iconSrc: "/assets/icon-2.svg", value: "25,000 sq", label: "Space" },
      {
        iconSrc: "/assets/icon-3.svg",
        value: "100%",
        label: " Integrated AV & Acoustic System",
      },
    ],
  },
  {
    id: "public",
    title: "Public Gatherings",
    imageSrc: "/assets/public_gatherings.webp",
    content:
      "From cultural events to large community programs, our convention centre offers spacious layouts, easy access, and advanced crowd management for a safe, enjoyable experience for every attendee.",
    stats: [
      { iconSrc: "/assets/icon-1.svg", value: "5", label: "Grand Halls" },
      { iconSrc: "/assets/icon-2.svg", value: "25,000 sq", label: "Space" },
      { iconSrc: "/assets/icon-3.svg", value: "6000+", label: "Ample Parking" },
    ],
  },
  {
    id: "political",
    title: "Political Gatherings",
    imageSrc: "/assets/political_gatherings.webp",
    content:
      "Designed for presence and impact. Our grand halls and expansive outdoor arenas are ideal for political rallies, conventions, and public addresses with secure access and large audience capacity. ",
    stats: [
      { iconSrc: "/assets/icon-1.svg", value: "5", label: "Grand Halls" },
      { iconSrc: "/assets/icon-2.svg", value: "25,000 sq", label: "Space" },
      {
        iconSrc: "/assets/icon-3.svg",
        value: "100%",
        label: "Security & Access Management",
      },
    ],
  },
];

/* ================== INLINE STATS WITH ANIMATION ================== */
function InlineStats({ items = [] }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.15, duration: 0.6, ease: easing },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16"
    >
      {items.map((stat, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 25 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.55, ease: easing },
            },
          }}
          className="flex items-start gap-4"
        >
          <img
            src={stat.icon || stat.iconSrc}
            alt={stat.label}
            className="shrink-0 inline-block"
            loading="lazy"
          />

          <div className="leading-tight">
            <div className="font-founders font-bold text-md md:text-md text-black">
              {stat.value}
            </div>
            <div className="font-founders text-[13px] md:text-[14px] text-gray-600">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ================== MAIN ================== */
const DesignedOccasion = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const activeContent = tabData.find((t) => t.id === activeTab);
  const visibleStats = activeContent?.stats?.length
    ? activeContent.stats
    : statsData;

  return (
    <section className="py-16 md:py-14 bg-[#f5f5f5]" id="crafted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easing }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-4xl md:text-5xl font-secondary text-center mb-12 md:mb-16"
        >
          Crafted to Host Every Milestone 
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-12 font-secondary">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-3 text-base md:text-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {tab.title}
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-[6px] h-[1px] bg-primary transition-all duration-300 ${
                  activeTab === tab.id ? "w-1/2 opacity-100" : "w-0 opacity-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Content Card */}
        {activeContent && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
            <div className="flex bg-white">
              <Image
                src={activeContent.imageSrc}
                alt={activeContent.title}
                width={556} // actual image resolution width
                height={450} // actual image resolution height
                className="w-auto h-auto max-w-full max-h-[520px] object-contain rounded-none"
                priority
              />
            </div>

            <div className="flex flex-col justify-center gap-8 p-6 sm:p-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-secondary font-bold mb-4">
                  {activeContent.title}
                </h3>
                <span className="block w-24 h-px bg-primary mb-5" />
                <p className="text-gray-600 font-founders leading-relaxed mb-8">
                  {activeContent.content}
                </p>

                <InlineStats items={visibleStats} />
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="bg-primary text-white px-6 py-3 font-medium">
                  KNOW MORE
                </button>
               <a
  href="/assets/pdf/area.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-primary text-primary px-6 py-3 font-medium inline-block text-center"
>
  DOWNLOAD FACT SHEET
</a>

              </div>
            </div>
          </div>
        )}

        
      </div>

      {/* FOOTER CTA */}
      <motion.div
        className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.h2
          className="font-secondary text-[28px] md:text-[40px] text-black"
          id="talk"
          variants={item}
        >
          Let’s Talk About Your Next Big Event {" "}
        </motion.h2>

        <div className="mt-5 space-y-2">
          <motion.p
            className="font-founders text-[14px] md:text-[16px] text-black/70"
            variants={item}
          >
            No matter the scale, your vision deserves the right stage, and we’re
            here to make it happen. 
          </motion.p>
          <motion.p
            className="font-founders text-[14px] md:text-[16px] text-black/70"
            variants={item}
          >
            From the first conversation to the final spotlight, our team ensures
            your event unfolds with precision, polish, and perfection. 
          </motion.p>
        </div>

        <motion.div className="mt-8" variants={item}>
          <motion.a
            href="tel:+917708922599"
            className="inline-flex items-center justify-center bg-primary px-8 py-3 text-white font-medium"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            ENQUIRE NOW
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DesignedOccasion;
