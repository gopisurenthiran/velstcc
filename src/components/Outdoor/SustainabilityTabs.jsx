"use client";
import Image from "next/image";
import React from "react";

// Replace with your real image
import sustainabilityImg from "@/public/assets/tree.png"; 

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
    image: sustainabilityImg,
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

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 items-start">

        {/* LEFT IMAGE */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={current.image}
            alt={current.label}
            fill
            sizes=""
            className=" "
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
