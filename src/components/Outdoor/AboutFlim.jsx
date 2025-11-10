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
    image: "/assets/Restaurants.png",
  },
  {
    title: "ATM Facility",
    desc:
      "Enjoy on-premises access to cash withdrawal and essential banking services.",
    image: "/assets/ATM Facility.png",
    
  },
  {
    title: "Makeup Rooms",
    desc:
      "Spacious, fully equipped rooms with mirrors, dressing stations, and dedicated storage for costumes and accessories.",
    image: "/assets/Makeup Rooms.png",
  },
  {
    title: "Cafeterias and Food Court",
    desc:
      "Relax and recharge at our dining spaces offering freshly prepared meals, snacks, and beverages to suit every palate.",
    image: "/assets/Cafeterias and Food Court.png",
  },
  {
    title: "Lavatories",
    desc:
      "Clean, well-maintained sanitary facilities for both male and female staff, ensuring hygiene and comfort throughout your shoot.",
    image: "/assets/Lavatories.png",
  },
];

export default function AboutFlim() {
  const [active, setActive] = useState(0);
  const [imgReady, setImgReady] = useState(true);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // Autoplay logic
  useEffect(() => {
    if (paused) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % facilities.length);
      setImgReady(false);
    }, ROTATE_MS);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  /* ---------- Animation Variants ---------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const fadeImage = {
    hidden: { opacity: 0, scale: 1.03 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, scale: 1.02, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Heading Section */}
      <motion.div
        className="mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.h2
          className="text-3xl tracking-tight text-black font-secondary"
          variants={fadeUp}
          custom={0}
        >
          Vels Film City: Where Vision Finds Space
        </motion.h2>

        <motion.div
          className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.p
          className="mt-5 text-black/70 font-primary text-2xl"
          variants={fadeUp}
          custom={1}
        >
          Where every detail is designed for comfort, convenience, and creativity.
        </motion.p>
      </motion.div>

      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* LEFT LIST with staggered animation */}
        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
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
                onClick={() => {
                  setActive(i);
                  setImgReady(false);
                }}
                variants={fadeUp}
                custom={i}
                className={[
                  "text-left rounded-md p-5 transition",
                  isActive
                    ? "bg-black/[0.04] shadow-sm ring-1 ring-black/10"
                    : "hover:bg-black/[0.03]",
                ].join(" ")}
                aria-current={isActive ? "true" : undefined}
              >
                <h3 className="font-secondary text-xl text-black">{item.title}</h3>
                <p className="mt-2 text-md leading-relaxed text-black/70 font-primary">
                  {item.desc}
                </p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* RIGHT IMAGE with animation */}
        <div className="relative">
          <div className="relative overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  variants={fadeImage}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={facilities[active].image || "/assets/facilities.png"}
                    alt={facilities[active].title}
                    fill
                    className="object-cover"
                    priority
                    onLoadingComplete={() => setImgReady(true)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
