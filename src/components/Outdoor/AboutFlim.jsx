"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROTATE_MS = 4000; // autoplay speed (ms)

const facilities = [
  {
    title: "Restaurants",
    desc:
      "Choose from on-site and nearby restaurants serving a diverse range of cuisines — perfect for cast, crew, and guests.",
    image: "/assets/restaurants.webp",
  },
  {
    title: "ATM Facility",
    desc:
      "Enjoy on-premises access to cash withdrawal and essential banking services.",
    image: "/assets/atm_facility.webp",
  },
  {
    title: "Makeup Rooms",
    desc:
      "Spacious, fully equipped rooms with mirrors, dressing stations, and dedicated storage for costumes and accessories.",
    image: "/assets/makeup_rooms.webp",
  },
  {
    title: "Cafeterias and Food Court",
    desc:
      "Relax and recharge at our dining spaces offering freshly prepared meals, snacks, and beverages to suit every palate.",
    image: "/assets/cafeterias_and_food_court.webp",
  },
  {
    title: "Lavatories",
    desc:
      "Clean, well-maintained sanitary facilities for both male and female staff, ensuring hygiene and comfort throughout your shoot.",
    image: "/assets/lavatories.webp",
  },
];

export default function AboutFlim() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // Autoplay logic
  useEffect(() => {
    if (paused) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % facilities.length);
    }, ROTATE_MS);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  /* ---------- Animation Variants ---------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  };

  const fadeImage = {
    hidden: { opacity: 0, scale: 1.02 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 1.01, transition: { duration: 0.4 } },
  };

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* TITLE */}
      <motion.div
        className="mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          className="primary-title text-black"
          variants={fadeUp}
        >
          Vels Film City: Where Vision Finds Space
        </motion.h2>

        <motion.div
          className="w-40 h-[1px] bg-[#2D3091] my-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          style={{ transformOrigin: "left" }}
        />

        <motion.p
          className="text-black/70 secondary-description"
          variants={fadeUp}
          custom={1}
        >
          Everything your crew needs, perfectly within reach.
        </motion.p>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* -------- LEFT LIST -------- */}
        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {facilities.map((item, i) => {
            const isActive = i === active;
            return (
              <motion.button
                key={item.title}
                onClick={() => setActive(i)}
                variants={fadeUp}
                custom={i}
                className={`text-left rounded-md p-5 transition ${
                  isActive
                    ? "bg-black/[0.05] shadow-sm ring-1 ring-black/10"
                    : "hover:bg-black/[0.03]"
                }`}
              >
                <h3 className="primary-subtitle text-black">{item.title}</h3>
                <p className="mt-2 secondary-description text-black/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* -------- RIGHT IMAGE (Actual Size) -------- */}
        <div className="relative flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={fadeImage}
              initial="hidden"
              animate="show"
              exit="exit"
              className="w-full max-w-[650px]" // MAX IMAGE WIDTH
            >
              <Image
                src={facilities[active].image}
                alt={facilities[active].title}
                width={590}   // real width
                height={726}   // real height
                className="w-full h-auto object-contain rounded-md"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
