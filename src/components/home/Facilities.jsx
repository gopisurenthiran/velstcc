// app/components/Facilities.jsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROTATE_MS = 4000;

const facilities = [
  {
    title: "Restaurants",
    desc: "Indulge in a range of cuisines at our on-site and nearby restaurants, perfect for guests, performers, and crew seeking comfort and flavour between events.",
    image: "/assets/restaurants.webp",
  },
  {
    title: "ATM Facility",
    desc: "Convenient on-premises banking and cash withdrawal services to keep transactions smooth and stress-free.",
    image: "/assets/atm_facility.webp",
  },
  {
    title: "Makeup Rooms",
    desc: "Spacious, well-lit rooms with mirrors, dressing areas, and ample storage, ideal for artists, performers, and wedding preparations.",
    image: "/assets/makeup_rooms.webp",
  },
  {
    title: "Cafeterias and Food Court",
    desc: "Freshly prepared meals, snacks, and beverages catering to diverse palates and dietary preferences, because every break deserves great taste.",
    image: "/assets/cafeterias_and_food_court.webp",
  },
  {
    title: "Lavatories",
    desc: "Clean, well-maintained, and fully equipped restrooms designed for both male and female guests, ensuring comfort throughout the event.",
    image: "/assets/lavatories.webp",
  },
];

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
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
        <h2 className="text-4xl tracking-tight text-black font-secondary font-medium">
          All About Vel Conventional Centre
        </h2>
        <p className="mt-5 text-black/70 font-primary text-xl">
          Everything your guests could need thoughtfully within reach. 
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

        {/* RIGHT IMAGE WITH TRUE ASPECT + FADE */}
        <div className="relative w-full flex justify-center items-center overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-auto flex justify-center items-center"
            >
              <div className="relative w-full max-w-[600px]">
                <Image
                  src={facilities[active].image}
                  alt={facilities[active].title}
                  width={590} // real image resolution width
                  height={726} // real image resolution height
                  className="w-full h-auto object-contain rounded-lg"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
