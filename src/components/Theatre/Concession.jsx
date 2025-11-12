"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Added for animation

const ROTATE_MS = 4000; // autoplay speed (ms)

const facilities = [
  {
    title: "Popcorn",
    desc: "Freshly popped, perfectly seasoned, and endlessly comforting, our popcorn isn’t just a snack; it’s a scene-stealer.",
    image: "/assets/facilities.png",
  },
  {
    title: "Nachos",
    desc: "Crisp, cheesy, and loaded with flavour, the go-to bite for when the reel gets real.",
    image: "/assets/facilities.png",
  },
  {
    title: "Beverages",
    desc: "From artisanal coffees to chilled mocktails, our lounge keeps every guest refreshed and ready for the next act.",
    image: "/assets/facilities.png",
  },
];

export default function Concession() {
  const [active, setActive] = useState(0);
  const [imgReady, setImgReady] = useState(true);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // autoplay
  useEffect(() => {
    if (paused) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % facilities.length);
      setImgReady(false);
    }, ROTATE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <motion.section
      className="mx-auto max-w-6xl px-4 py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ---------- Heading ---------- */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl tracking-tight text-black font-secondary">
          Concessions & Lounge
        </h2>
        <p className="mt-5 text-black/70 font-primary text-xl">
          Where stories meet savours
        </p>
      </motion.div>

      {/* ---------- Grid Layout ---------- */}
      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* LEFT LIST */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
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
                className={[
                  "text-left rounded-md p-5 transition",
                  isActive
                    ? "bg-black/[0.04] shadow-sm ring-1 ring-black/10"
                    : "hover:bg-black/[0.03]",
                ].join(" ")}
                aria-current={isActive ? "true" : undefined}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
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

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={facilities[active].image || "/assets/facilities.png"}
                    alt={facilities[active].title}
                    fill
                    className="object-cover w-full h-full"
                    priority
                    onLoadingComplete={() => setImgReady(true)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
