// app/components/Facilities.jsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ROTATE_MS = 4000; // autoplay speed (ms)

// If you don't have separate images yet, all can point to the same file.
// Make sure files are under /public/
const facilities = [
  {
    title: "Restaurants",
    desc:
      "Choose from on-site and nearby restaurants serving a diverse range of cuisines — perfect for cast, crew, and guests.",
    image: "/assets/facilities.png",
  },
  {
    title: "ATM Facility",
    desc:
      "Enjoy on-premises access to cash withdrawal and essential banking services.",
    image: "/assets/facilities.png",
  },
  {
    title: "Makeup Rooms",
    desc:
      "Spacious, fully equipped rooms with mirrors, dressing stations, and dedicated storage for costumes and accessories.",
    image: "/assets/facilities.png",
  },
  {
    title: "Cafeterias and Food Court",
    desc:
      "Relax and recharge at our dining spaces offering freshly prepared meals, snacks, and beverages to suit every palate.",
    image: "/assets/facilities.png",
  },
  {
    title: "Lavatories",
    desc:
      "Clean, well-maintained sanitary facilities for both male and female staff, ensuring hygiene and comfort throughout your shoot.",
    image: "/assets/facilities.png",
  },
];

export default function AboutFlim() {
  const [active, setActive] = useState(0);
  const [imgReady, setImgReady] = useState(true); // ✅ show first image immediately
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null); // ✅ JS-safe

  // autoplay
  useEffect(() => {
    if (paused) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % facilities.length);
      setImgReady(false); // fade next image in
    }, ROTATE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mb-10">
        <h2 className="text-3xl tracking-tight text-black font-secondary">
          Vels Film City: Where Vision Finds Space&nbsp;
        </h2>
        <div className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"></div>
        <p className="mt-5 text-black/70 font-primary text-2xl">
          Where every detail is designed for comfort, convenience, and creativity.&nbsp;
        </p>
      </div>

      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* LEFT LIST */}
        <div className="flex flex-col gap-4">
          {facilities.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.title}
                onClick={() => {
                  setActive(i);
                  setImgReady(false); // trigger fade when clicking
                }}
                className={[
                  "text-left rounded-md p-5 transition",
                  isActive
                    ? "bg-black/[0.04] shadow-sm ring-1 ring-black/10"
                    : "hover:bg-black/[0.03]",
                ].join(" ")}
                aria-current={isActive ? "true" : undefined}
              >
                <h3 className="font-secondary text-xl  text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-md leading-relaxed text-black/70 font-primary">
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                key={active} // force fade per change
                src={facilities[active].image || "/assets/facilities.png"} // fallback to single image
                alt={facilities[active].title}
                fill
                className={[
                  " transition-opacity duration-500",
                  imgReady ? "opacity-100" : "opacity-0",
                ].join(" ")}
                priority
                onLoadingComplete={() => setImgReady(true)} // ✅ reveal when ready
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
