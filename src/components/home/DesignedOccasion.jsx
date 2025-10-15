"use client";
import React, { useState } from "react";
import Image from "next/image";

/* ================== DATA ================== */
/* Put your real icon files here */
const statsData = [
  { icon: "/assets/icons/hall.svg",   value: "5",         label: "Grand Halls" },
  { icon: "/assets/icons/area.svg",   value: "25,000 Sq", label: "space" },
  { icon: "/assets/icons/guests.svg", value: "20,000",    label: "Guests" },
];

const tabData = [
  {
    id: "weddings",
    title: "Weddings & Receptions",
    imageSrc: "/assets/wedding.png",
    content:
      "From intimate ceremonies to grand celebrations, our venue transforms into the perfect setting for unforgettable memories. Expect décor, premium hospitality, and seamless arrangements for your special day.",
    stats: [
      { iconSrc: "/assets/icon-1.png",  value: "5",           label: "Grand Halls" },
      { iconSrc: "/assets/icon-2.png",  value: "25,000 sq", label: "Space" },
      { iconSrc: "/assets/icon-3.png",  value: "20,000",       label: "Guests" },
    ],
  },
  {
    id: "trade",
    title: "Trade Fairs & Exhibitions",
    imageSrc: "/images/trade-fair.jpg",
    content:
      "Host regional and international trade shows with ease. Our expansive, pillar-free space is designed for high foot traffic and massive installations, offering full logistics support and custom booth arrangements.",
    stats: [
      { iconSrc: "/assets/icons/expo.svg",    value: "3.5 L sq ft", label: "Exhibition Space" },
      { iconSrc: "/assets/icons/height.svg",  value: "50 ft",       label: "Ceiling Height" },
      { iconSrc: "/assets/icons/parking.svg", value: "6000+",       label: "Parking" },
    ],
  },
  {
    id: "corporate",
    title: "Corporate Conferences & Expos",
    imageSrc: "/images/corporate.jpg",
    content: "Dedicated spaces for large-scale corporate events and product launches...",
    stats: [],
  },
  {
    id: "public",
    title: "Public Gatherings",
    imageSrc: "/images/public-gathering.jpg",
    content: "Ideal for political rallies, concerts, and community events with massive capacity...",
    stats: [],
  },
];

/* ================== INLINE STATS (icon + number/label) ================== */
function InlineStats({ items = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">
      {items.map((stat, i) => (
        <div key={i} className="flex items-start gap-4">
          {/* Actual icon image — intrinsic size (no width/height) */}
          <img
            src={stat.icon || stat.iconSrc}
            alt={stat.label}
            className="shrink-0 inline-block"
            loading="lazy"
          />

          {/* Number + label */}
          <div className="leading-tight">
            <div className="font-founders font-bold text-md md:text-md text-black">
              {stat.value}
            </div>
            <div className="font-founders text-[13px] md:text-[14px] text-gray-600">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ================== MAIN ================== */
const DesignedOccasion = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const activeContent = tabData.find((t) => t.id === activeTab);

  // Prefer tab-specific stats if present; otherwise fall back to global strip
  const visibleStats =
    activeContent?.stats?.length ? activeContent.stats : statsData;

  return (
    <section className="py-16 md:py-14 bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-secondary text-center mb-12 md:mb-16">
          Designed For Every Occasion
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-12 font-secondary">
          {tabData.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={[
                  "relative px-4 py-3 text-base md:text-lg font-medium transition-all duration-300",
                  isActive ? "text-primary" : "text-secondary hover:text-primary",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded",
                ].join(" ")}
              >
                {tab.title}
                <span
                  aria-hidden
                  className={[
                    "absolute left-1/2 -translate-x-1/2 bottom-[6px] h-[1px] bg-primary transition-all duration-300",
                    isActive ? "w-1/2 opacity-100" : "w-0 opacity-0",
                  ].join(" ")}
                />
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        {activeContent && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
            {/* Image */}
            <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
              <Image
                src={activeContent.imageSrc}
                alt={activeContent.title}
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Text + Stats */}
            <div className="flex flex-col justify-center gap-8 p-6 sm:p-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-secondary font-bold mb-4">
                  {activeContent.title}
                </h3>
                <span className="block w-24 h-px bg-primary mb-5" aria-hidden />
                <p className="text-gray-600 font-founders leading-relaxed mb-8">
                  {activeContent.content}
                </p>

                {/* INLINE STATS (matches screenshot layout) */}
                <InlineStats items={visibleStats} />
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <button className="bg-primary text-white px-6 py-3 font-medium transition active:translate-y-[0.5px]">
                  KNOW MORE
                </button>
                <button className="border border-primary font-primary text-primary px-6  font-medium hover:bg-primary/5 transition active:translate-y-[0.5px]">
                  DOWNLOAD FACT SHEET
                </button>
              </div>
            </div>
          </div>
        )}

        {/* View All */}
        <div className="text-center mt-10 md:mt-12">
          <button className="bg-primary border border-primary text-white px-8 py-3 font-medium transition active:translate-y-[0.5px]">
            VIEW ALL
          </button>
        </div>
      </div>
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
    {/* Title */}
    <h2 className="font-secondary text-[28px] font-secondary leading-tight md:text-[40px] md:leading-[1.15] text-black">
      Let’s Talk About Your Events
    </h2>

    {/* Subtext */}
    <div className="mt-5 md:mt-6 space-y-2">
      <p className="font-founders text-[14px] font-secondary md:text-[16px] text-black/70">
        Let there be no confusion in finding the best place for your event.
      </p>
      <p className="font-founders text-[14px] font-secondary md:text-[16px] text-black/70">
        Reach out to us and we will help you with quality and clarity.
      </p>
    </div>

    {/* CTA: Direct Call */}
    <div className="mt-8 md:mt-10">
      <a
        href="tel:+917708922599" /* 👈 change to your number */
        aria-label="Call us now to enquire"
        className="inline-flex items-center justify-center font-primary bg-primary px-6 md:px-8 py-3 text-white font-medium tracking-wide shadow-[0_1px_0_rgba(0,0,0,0.08)] hover:opacity-95 active:translate-y-px transition"
      >
        ENQUIRE NOW
      </a>

     
    </div>
  </div>
    </section>
  );
};

export default DesignedOccasion;
