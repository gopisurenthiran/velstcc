// app/components/Facilities.jsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ROTATE_MS = 4000; // autoplay speed (ms)

const facilities = [
  {
    title: "Popcorn",
    desc: "On-site and nearby restaurants offering diverse cuisines for cast, crew. and quests.",
    image: "/assets/facilities.png",
  },
  {
    title: "Nachos",
    desc: "On-premises cash withdrawal and banking services.",
    image: "/assets/facilities.png",
  },
  {
    title: "Beverages.",
    desc: "Spacious. fully lit rooms with mirrors. dressing stations. and storage forcostumes and accessories.",
    image: "/assets/facilities.png",
  },
];

export default function Concession() {
  const [active, setActive] = useState(0);
  const [imgReady, setImgReady] = useState(true); // ✅ show first image immediately
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // autoplay
  useEffect(() => {
    if (paused) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % facilities.length);
      setImgReady(false); // fade in next
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
        <h2 className="text-5xl tracking-tight text-black font-secondary">
          Concessions & Lounge
        </h2>
        <p className="mt-5 text-black/70 font-primary text-xl">
          Everything our guests need.
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
                  setImgReady(false); // fade when user clicks
                }}
                className={[
                  "text-left rounded-md p-5 transition",
                  isActive
                    ? "bg-black/[0.04] shadow-sm ring-1 ring-black/10"
                    : "hover:bg-black/[0.03]",
                ].join(" ")}
                aria-current={isActive ? "true" : undefined}
              >
                <h3 className="font-secondary text-xl text-black">
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
                src={facilities[active].image || "/assets/facilities.png"}
                alt={facilities[active].title}
                fill
                className={[
                  "transition-opacity duration-500",
                  imgReady ? "opacity-100" : "opacity-0",
                ].join(" ")}
                priority
                // ✅ more reliable than onLoad with next/image
                onLoadingComplete={() => setImgReady(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
