"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ------------ slides ------------ */
const slides = [
  {
    title: "Marina Beach",
    description:
      "The world’s second-longest urban beach stretching along Chennai’s coastline. A broad blend of golden sands, lively waves, and vibrant local life—the city’s spirit and serenity.",
    src: "/assets/dis-img-1.png",
  },
  {
    title: "Central",
    description:
      "Iconic red-brick landmark—gateway to the city’s journeys and daily rhythm.",
    src: "/assets/dis-img-2.png",
  },
  {
    title: "LIC",
    description:
      "A mid-century modern silhouette anchoring Chennai’s skyline with timeless poise.",
    src: "/assets/dis-img-3.png",
  },
  {
    title: "Parrys Corner",
    description:
      "Historic trading hub blending colonial charm with Chennai’s commercial pulse.",
    src: "/assets/dis-img-2.png",
  },
];

export default function HoverExpandCarousel() {
  const [active, setActive] = useState(null);      // ✅ only once, no <number | null>
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);                // ✅ no <HTMLDivElement | null>

  /* detect mobile */
  useEffect(() => {
    const recheck = () => setIsMobile(window.innerWidth < 768);
    recheck();
    window.addEventListener("resize", recheck);
    return () => window.removeEventListener("resize", recheck);
  }, []);

  const toggle = (i) => {
    if (!isMobile) return;
    setActive((prev) => (prev === i ? null : i));
  };

  return (
    <section className="py-12 md:py-16 max-w-6xl container mx-auto px-5 sm:px-6 md:px-10 bg-white overflow-x-hidden">
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-8 max-w-2xl"
      >
        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] tracking-tight font-secondary font-medium mb-4">
          Discover Singara Chennai
        </h2>
        <p className="mt-1 text-base sm:text-lg text-black/70 font-primary leading-relaxed">
          A metropolis where heritage blends with modernity. A dynamic fusion of
          tradition, trade, and innovation. Eternally the cornerstone of South
          India&apos;s character and advancement.
        </p>
      </motion.div>

      {/* carousel */}
      <div
        ref={carouselRef}
        className="carousel flex gap-4 md:gap-5 overflow-x-auto md:overflow-hidden scroll-smooth pb-2"
        role="list"
      >
        {slides.map((s, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            className={`relative group flex-shrink-0 w-[85%] sm:w-[70%] md:w-auto overflow-hidden transition-all duration-500 cursor-pointer ${
              active === i ? "active" : ""
            }`}
          >
            <div className="relative h-[280px] sm:h-[320px] md:h-[400px] w-full overflow-hidden shadow-md">
              <Image
                src={s.src}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 70vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={i < 2}
              />

              {/* title */}
              <div className="absolute left-4 top-3 z-20 text-white text-lg sm:text-xl font-semibold font-secondary drop-shadow-md">
                {s.title}
              </div>

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

              {/* text overlay */}
              <div
                className={`absolute bottom-0 z-30 p-4 text-white transition-all duration-500 ${
                  active === i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0"
                }`}
              >
                <p className="text-sm sm:text-base leading-relaxed font-primary">
                  {s.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* desktop hover expand */}
      <style jsx>{`
        @media (min-width: 768px) {
          .carousel {
            display: flex;
          }
          /* default card size (desktop / tab) */
          .carousel > div {
            flex: 0 0 250px;
          }
          /* shrink siblings on hover */
          .carousel:hover > div {
            flex-basis: 230px;
            transition: all 0.5s ease;
          }
          /* hovered card grows */
          .carousel:hover > div:hover {
            flex-basis: 500px;
            transform: translateY(-6px);
          }
          /* inner fills flex item */
          .carousel > div > div {
            width: 100%;
            height: 400px;
          }
        }

        @media (max-width: 767px) {
          .carousel {
            scroll-snap-type: x mandatory;
          }
          .carousel > div {
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  );
}
