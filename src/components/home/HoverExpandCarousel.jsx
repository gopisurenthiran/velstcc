"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

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
  {
    title: "Napier Bridge",
    description:
      "The glowing white waves of Napier Bridge—an icon that lights up Chennai’s nights.",
    src: "/assets/dis-img-3.png",
  },
];

export default function HoverExpandCarousel() {
  const [active, setActive] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);

  /* ---------- detect mobile & resize ---------- */
  useEffect(() => {
    const recheck = () => setIsMobile(window.innerWidth < 768);
    recheck();
    window.addEventListener("resize", recheck);
    return () => window.removeEventListener("resize", recheck);
  }, []);

  /* ---------- tap toggle (mobile) ---------- */
  const toggle = (i) => {
    if (!isMobile) return;
    setActive((prev) => (prev === i ? null : i));
  };

  /* ---------- auto-slide logic ---------- */
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const interval = setInterval(() => {
      if (isHovered) return; // pause on hover
      const total = slides.length;
      const nextIndex = (index + 1) % total;
      setIndex(nextIndex);

      const item = carousel.children[nextIndex];
      if (item) {
        item.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [index, isHovered]);

  return (
    <section
      className="py-16 container mx-auto px-6 md:px-10 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ---------- heading ---------- */}
      <div className="mb-8 max-w-2xl">
        <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight">
          Discover <span className="text-primary">Singara Chennai</span>
        </h2>
        <p className="mt-2 text-[14px] leading-6 text-black/70">
          A city where tradition meets innovation. A vibrant mosaic of culture,
          commerce, and creativity; forever the heartbeat of South India’s pride
          and progress.
        </p>
      </div>

      {/* ---------- carousel ---------- */}
      <div
        ref={carouselRef}
        className="carousel flex gap-5 overflow-x-auto scroll-smooth md:overflow-visible md:flex-nowrap"
        role="list"
      >
        {slides.map((s, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            className={`relative group flex-shrink-0 basis-[60%] md:basis-[250px] overflow-hidden transition-all duration-500 cursor-pointer ${
              active === i ? "active" : ""
            }`}
          >
            <div className="relative h-[400px] w-[250px] overflow-hidden shadow-md">
              <Image
                src={s.src}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 60vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={i < 2}
              />

              {/* title */}
              <div className="absolute left-4 top-3 z-20 text-white text-lg font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                {s.title}
              </div>

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

              {/* text overlay */}
              <div
                className={`absolute bottom-0 z-30 p-4 text-white transition-all duration-500 ${
                  active === i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0"
                }`}
              >
                <p className="text-sm leading-relaxed">{s.description}</p>
                <button className="mt-3 inline-flex bg-primary px-3 py-2 text-sm font-medium shadow hover:brightness-95">
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- desktop hover expand (250px → 500px) ---------- */}
      <style jsx>{`
        @media (min-width: 768px) {
          .carousel {
            display: flex;
          }

          /* Default card size */
          .carousel > div {
            flex-basis: 250px;
          }

          /* Slight shrink for siblings */
          .carousel:hover > div {
            flex-basis: 230px;
            transition: all 0.5s ease;
          }

          /* Hovered card expands big */
          .carousel:hover > div:hover {
            flex-basis: 500px;
            transform: translateY(-6px);
          }

          /* Sync inner width with flex-basis */
          .carousel:hover > div:hover > div {
            width: 500px;
          }

          .carousel:hover > div:not(:hover) > div {
            width: 230px;
          }

          /* Fixed height */
          .carousel > div > div {
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
