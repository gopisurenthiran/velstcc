"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const PURPLE = "bg-[#2A1C79]"; // brand purple

const events = [
  {
    id: 1,
    tag: "Exhibition",
    title: "Manufacturer Meeting",
    date: "16th July 2025",
    image: "/assets/event.png",
    href: "#",
  },
  {
    id: 2,
    tag: "Exhibition",
    title: "2020–2025 Traders Meeting",
    date: "14th May 2025",
    image: "/assets/event.png",
    href: "#",
  },
  {
    id: 3,
    tag: "Convention",
    title: "Creative Awards",
    date: "12th June 2025",
    image: "/assets/event.png",
    href: "#",
  },
];

export default function EventsExact() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const next = useCallback(() => embla && embla.scrollNext(), [embla]);
  const prev = useCallback(() => embla && embla.scrollPrev(), [embla]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-10 text-center text-4xl  tracking-tight font-secondary">
        Events
      </h2>

      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {events.map((ev, i) => {
              const isActive = i === selectedIndex;
              return (
                <article
                  key={ev.id}
                  className="
                    shrink-0
                    basis-[90%] sm:basis-[70%] lg:basis-[46%]
                    px-6
                    transition-all duration-700
                  "
                >
                  <div className="select-none">
                    {/* larger image area */}
                    <div
                      className={[
                        "relative aspect-[4/3.2] overflow-hidden rounded-lg",
                        "transition-all duration-500",
                        isActive
                          ? "opacity-100 scale-[1.03]"
                          : "opacity-25 grayscale contrast-75",
                      ].join(" ")}
                    >
                      <Image
                        src={ev.image}
                        alt={ev.title}
                        fill
                        className="object-cover"
                        sizes="(min-width:1024px) 700px, 90vw"
                        priority={i === 0}
                      />
                    </div>

                    {/* text */}
                    <div className="mt-5">
                      <p
                        className={[
                          "text-md uppercase tracking-wide font-primary",
                          isActive ? "text-[#2A1C79]" : "text-black/50",
                        ].join(" ")}
                      >
                        {ev.tag}
                      </p>

                      <h3 className="mt-1 text-lg leading-6 text-black font-primary">
                        {ev.title}
                      </h3>
                      <p className="text-lg text-black font-primary">{ev.date}</p>

                      {/* underline */}
                      <div className="mt-2 h-[1px] w-32 bg-black/10" />

                      <div className="mt-5 flex items-center">
                        <a
                          href={ev.href}
                          className={[
                            "inline-flex items-center px-4 py-2 text-md text-white font-primary shadow-sm",
                            PURPLE,
                            isActive
                              ? "hover:brightness-110"
                              : "opacity-30 pointer-events-none",
                          ].join(" ")}
                        >
                          EXPLORE MORE
                        </a>

                        <button
                          onClick={next}
                          aria-label="Next"
                          className={[
                            "ml-6 inline-flex h-9 w-9 items-center justify-center rounded-full border",
                            isActive
                              ? "border-black/20 text-black hover:bg-black/5"
                              : "border-black/10 text-black/30 pointer-events-none",
                          ].join(" ")}
                        >
                          →
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* optional arrows for desktop */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between lg:flex">
          <button
            onClick={prev}
            aria-label="Previous"
            className="pointer-events-auto ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/80 backdrop-blur hover:bg-white"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="pointer-events-auto mr-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/80 backdrop-blur hover:bg-white"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
