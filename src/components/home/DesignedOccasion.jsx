"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

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
        label: "Dedicated Exhibition Utilities",
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate Conferences & Expos",
    imageSrc: "/assets/corporate_conferences_expos.webp",
    content:
      "Make every business moment impactful. Equipped with modern AV systems, acoustic excellence, and flexible seating, it’s the perfect stage for global conferences, leadership summits, and annual meets.",
    stats: [
      { iconSrc: "/assets/icon-1.svg", value: "5", label: "Grand Halls" },
      { iconSrc: "/assets/icon-2.svg", value: "25,000 sq", label: "Space" },
      {
        iconSrc: "/assets/icon-3.svg",
        value: "100%",
        label: "Integrated AV & Acoustic System",
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
      "Designed for presence and impact. Our grand halls and expansive outdoor arenas are ideal for political rallies, conventions, and public addresses with secure access and large audience capacity.",
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

/* ================== INLINE STATS ================== */
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
      className="grid grid-cols-2 gap-8 sm:gap-10 md:gap-16"
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
          className="flex items-start gap-3"
        >
          <img
            src={stat.iconSrc || stat.icon}
            alt={stat.label}
            className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
          />

          <div className="leading-tight">
            <div className="font-founders font-bold text-[15px] sm:text-[17px] text-black">
              {stat.value}
            </div>
            <div className="font-founders text-[12px] sm:text-[14px] text-black/70">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ================== MAIN COMPONENT ================== */
export default function DesignedOccasion() {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const activeContent = tabData.find((t) => t.id === activeTab);
  const visibleStats = activeContent.stats ?? statsData;

  return (
    <section className="py-16 md:py-14 bg-[#f5f5f5]" id="crafted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easing }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-secondary text-center mb-12 md:mb-16"
        >
          Crafted to Host Every Milestone
        </motion.h2>

        {/* TABS — single line scrollable on mobile */}
        <div
          className="
            flex overflow-x-auto whitespace-nowrap no-scrollbar
            justify-start md:justify-center
            gap-3 md:gap-4 
            mb-10 md:mb-12 font-secondary
          "
        >
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative px-4 py-2 
                text-sm sm:text-base md:text-lg 
                inline-flex items-center whitespace-nowrap 
                transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }
              `}
            >
              {tab.title}
              <span
                className={`
                  absolute left-1/2 -translate-x-1/2 bottom-[4px] 
                  h-[2px] bg-primary transition-all duration-300
                  ${
                    activeTab === tab.id ? "w-1/2 opacity-100" : "w-0 opacity-0"
                  }
                `}
              />
            </button>
          ))}
        </div>

        {/* CONTENT CARD */}
        {activeContent && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
            {/* IMAGE — FIXED FOR MOBILE */}
            <div className="w-full">
              <Image
                src={activeContent.imageSrc}
                alt={activeContent.title}
                width={800}
                height={600}
                className="
                  w-full h-[260px] sm:h-[340px] md:h-full 
                  
                  max-h-[500px]
                "
                priority
              />
            </div>

            {/* TEXT SECTION */}
            <div className="p-6 sm:p-8 flex flex-col justify-center gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-secondary font-bold mb-4">
                  {activeContent.title}
                </h3>

                <span className="block w-20 h-px bg-primary mb-5"></span>

                <p className="text-gray-600 font-founders leading-relaxed mb-8 text-sm sm:text-base">
                  {activeContent.content}
                </p>

                <InlineStats items={visibleStats} />
              </div>
              <div className="flex flex-wrap gap-3">
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
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-secondary text-2xl sm:text-3xl md:text-4xl text-black"
          variants={item}
        >
          Let’s Talk About Your Next Big Event
        </motion.h2>

        <motion.p
          className="font-founders text-sm sm:text-base text-black/70 mt-4"
          variants={item}
        >
          Your vision deserves the right stage — and we’re here to shape it.
        </motion.p>

        <motion.div className="mt-8" variants={item}>
          <MotionLink
            href="/contact"
            className="inline-flex items-center justify-center bg-primary px-8 py-3 text-white font-medium"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            ENQUIRE NOW
          </MotionLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
