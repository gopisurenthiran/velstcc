"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROTATE_MS = 4000; // autoplay speed (ms)

const facilities = [
  {
    title: "Restaurants",
    desc:
      "From gourmet spreads to quick bites, our on-site and nearby restaurants cater to every palate, ensuring your cast, crew, and guests stay fueled through every frame.",
    image: "/assets/Restaurants.png",
  },
  {
    title: "ATM Facility",
    desc:
      "Convenient on-premise banking access for seamless transactions and cash withdrawals, because every production runs best when essentials are effortless.",
    image: "/assets/ATM Facility.png",
  },
  {
    title: "Makeup Rooms",
    desc:
      "Spacious, well-lit, and thoughtfully designed rooms equipped with mirrors, dressing stations, and storage for costumes and accessories, where transformation begins before the camera rolls.",
    image: "/assets/Makeup Rooms.png",
  },
  {
    title: "Cafeterias and Food Court",
    desc:
      "Vibrant dining spaces serving freshly prepared meals, snacks, and beverages to suit diverse tastes and dietary preferences, a perfect pause between scenes.",
    image: "/assets/Cafeterias and Food Court.png",
  },
  {
    title: "Lavatories",
    desc:
      "Hygienic, well-maintained, and thoughtfully located sanitary facilities for male and female staff, ensuring comfort behind the scenes matches the brilliance on screen.",
    image: "/assets/Lavatories.png",
  },
];

export default function AboutFlim() {
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
    return () => clearInterval(timerRef.current);
  }, [paused]);

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* HEADER ANIMATION */}
      <motion.div
        className="mb-10 text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl tracking-tight text-black font-secondary">
          Vels Film City: Where Vision Finds Space
        </h2>
        <motion.div
          className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.p
          className="mt-5 text-black/70 font-primary text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Everything your crew needs, perfectly within reach.
        </motion.p>
      </motion.div>

      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* LEFT LIST (Staggered) */}
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
                onClick={() => {
                  setActive(i);
                  setImgReady(false);
                }}
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
                aria-current={isActive ? "true" : undefined}
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

        {/* RIGHT IMAGE ANIMATION */}
        <div className="relative">
          <div className="relative overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
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
