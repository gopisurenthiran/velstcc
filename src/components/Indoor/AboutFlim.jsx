// app/components/AboutFlim.jsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROTATE_MS = 4000;

const facilities = [
  {
    title: "Restaurants",
    desc:
      "From gourmet spreads to quick bites, our on-site and nearby restaurants cater to every palate, ensuring your cast, crew, and guests stay fueled through every frame.",
    image: "/assets/restaurants.webp",
  },
  {
    title: "ATM Facility",
    desc:
      "Convenient on-premise banking access for seamless transactions and cash withdrawals, because every production runs best when essentials are effortless.",
    image: "/assets/atm_facility.webp",
  },
  {
    title: "Makeup Rooms",
    desc:
      "Spacious, well-lit, and thoughtfully designed rooms equipped with mirrors, dressing stations, and storage for costumes and accessories.",
    image: "/assets/makeup_rooms.webp",
  },
  {
    title: "Cafeterias and Food Court",
    desc:
      "Vibrant dining spaces serving freshly prepared meals, snacks, and beverages to suit diverse tastes and dietary preferences.",
    image: "/assets/cafeterias_and_food_court.webp",
  },
  {
    title: "Lavatories",
    desc:
      "Hygienic, well-maintained, and thoughtfully located sanitary facilities for male and female staff.",
    image: "/assets/lavatories.webp",
  },
];

export default function AboutFlim() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const activeFacility = facilities[active];

  /* AUTOPLAY */
  useEffect(() => {
    if (paused) return;
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % facilities.length);
    }, ROTATE_MS);

    return () => clearInterval(timerRef.current);
  }, [paused]);

  const goPrev = () => {
    setActive((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  const goNext = () => {
    setActive((prev) => (prev + 1) % facilities.length);
  };

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* HEADER */}
      <motion.div
        className="mb-10 text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="primary-subtitle text-black">
          Vels Film City: Where Vision Finds Space
        </h2>

        <motion.div
          className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
          viewport={{ once: true }}
        />

        <motion.p
          className="mt-5 text-black/70 secondary-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Everything your crew needs, perfectly within reach.
        </motion.p>
      </motion.div>

      {/* =============== DESKTOP / TABLET (md and up) =============== */}
      <div className="hidden md:grid items-start gap-10 md:grid-cols-2">
        {/* LEFT LIST */}
        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {facilities.map((item, i) => {
            const isActive = i === active;
            return (
              <motion.button
                key={item.title}
                onClick={() => setActive(i)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className={[
                  "text-left rounded-md p-5 transition",
                  isActive
                    ? "bg-black/[0.04] shadow-sm ring-1 ring-black/10"
                    : "hover:bg-black/[0.03]",
                ].join(" ")}
              >
                <h3 className="primary-subtitle text-xl text-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-md leading-relaxed text-black/70 secondary-description">
                  {item.desc}
                </p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* RIGHT IMAGE — ACTUAL SIZE */}
        <div className="relative w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full"
            >
              <Image
                src={activeFacility.image}
                alt={activeFacility.title}
                width={590}
                height={726}
                className="w-full h-auto object-contain rounded-md"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* =============== MOBILE (below md) =============== */}
      <div className="md:hidden">
        {/* TEXT FIRST */}
        <div className="mb-5">
          <h3 className="primary-subtitle text-lg sm:text-xl text-black mb-2">
            {activeFacility.title}
          </h3>
          <p className="secondary-description text-sm leading-relaxed text-black/75">
            {activeFacility.desc}
          </p>
        </div>

        {/* IMAGE SLIDER */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <Image
                src={activeFacility.image}
                alt={activeFacility.title}
                width={590}
                height={726}
                className="w-full h-auto object-cover rounded-md"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-md"
          >
            ❮
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-md"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}
