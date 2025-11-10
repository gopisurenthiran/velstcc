// app/components/Facilities.jsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROTATE_MS = 4000;

const facilities = [
  {
    title: "Restaurants",
    desc: "On-site and nearby restaurants offering diverse cuisines for cast, crew, and guests.",
    image: "/assets/Restaurants.png",
  },
  {
    title: "ATM Facility",
    desc: "On-premises cash withdrawal and banking services.",
    image: "/assets/ATM Facility.png",
  },
  {
    title: "Makeup Rooms",
    desc: "Spacious, fully lit rooms with mirrors, dressing stations, and storage.",
    image: "/assets/Makeup Rooms.png",
  },
  {
    title: "Cafeterias and Food Court",
    desc: "Dining spaces serving fresh meals, snacks, and beverages.",
    image: "/assets/Cafeterias and Food Court.png",
  },
  {
    title: "Lavatories",
    desc: "Clean, well-maintained sanitary blocks for male and female staff.",
    image: "/assets/Lavatories.png",
  },
];

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const listParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

export default function Facilities() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // Autoplay rotation
  useEffect(() => {
    if (paused) return;
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % facilities.length);
    }, ROTATE_MS);

    return () => clearInterval(timerRef.current);
  }, [paused]);

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-10"
      >
        <h2 className="text-5xl tracking-tight text-black font-secondary">
          All About Vel Conventional
        </h2>
        <p className="mt-5 text-black/70 font-primary text-2xl">
          Everything our guests need.
        </p>
      </motion.div>

      {/* Layout */}
      <div className="grid items-start gap-10 md:grid-cols-2">

        {/* LEFT LIST (Animated Stagger) */}
        <motion.div
          variants={listParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4"
        >
          {facilities.map((item, i) => {
            const isActive = i === active;
            return (
              <motion.button
                key={item.title}
                variants={listItem}
                onClick={() => setActive(i)}
                className={[
                  "text-left rounded-md p-5 transition",
                  isActive
                    ? "bg-black/[0.04] shadow-sm ring-1 ring-black/10"
                    : "hover:bg-black/[0.03]",
                ].join(" ")}
              >
                <h3 className="font-secondary text-xl text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-md leading-relaxed text-black/70 font-primary">
                  {item.desc}
                </p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* RIGHT IMAGE WITH SMOOTH FADE + SCALE */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative aspect-[4/3] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={facilities[active].image}
                  alt={facilities[active].title}
                  fill
                  className=""
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
