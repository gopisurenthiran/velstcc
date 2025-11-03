"use client";
import Image from "next/image";
import React from "react";

// Replace with your real image
import sustainabilityImg from "@/public/assets/tree.png"; 

const TABS = [
  {
    key: "sustainability",
    label: "Crafted for Comfort ",
    image: sustainabilityImg,
    items: [
      {
        title:"Every detail designed around you.",
        desc:
          "Behind the scenes, we take as much care of people as we do the production. From spacious makeup rooms and climate-controlled lounges to on-site dining and rest zones, every space is built to support long hours and large crews. ATM access, clean amenities, and a variety of cuisines nearby make your shoot days smoother and more enjoyable. At Vels, comfort isn’t an afterthought, it’s part of the creative experience. ",
      },
    ],
  },
  {
    key: "hss",
    label: "The Vels Assurance ",
    image: sustainabilityImg,
    items: [
      {
        title: "Safety, sustainability, and sophistication under one roof.",
        desc:
          "Our commitment to excellence goes beyond the lens. Each indoor facility operates with eco-friendly practices, energy-efficient systems, water reuse, and ozone-safe cooling, ensuring a responsible footprint. Layered with advanced CCTV surveillance, professional housekeeping, and round-the-clock security, every production here unfolds in a space that’s as safe as it is stunning. Because every frame deserves a foundation of trust.",
      },
    ],
  },
];

export default function IndoorTabs() {
  const [active, setActive] = React.useState(TABS[0].key);
  const current = TABS.find((t) => t.key === active);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-start">

        {/* LEFT IMAGE */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={current.image}
            alt={current.label}
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full">
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
                    <span className="inline-block font-secondary align-middle mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                  {tab.label}

                  <span
                    className={`pointer-events-none absolute left-0 -bottom-[1px] h-[1px] w-full bg-primary transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="mt-8 space-y-6">
            {current.items.map((it, idx) => (
              <div key={idx} className="max-w-2xl">
                <p className="text-xs md:text-sm font-primary text-gray-500 mt-1 leading-relaxed">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
