"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PURPLE = "bg-[#2A1C79]";

const events = [
  { id: 1, tag: "Exhibition", title: "Manufacturer Meeting", date: "16th July 2025", image: "/assets/event.png", href: "#" },
  { id: 2, tag: "Exhibition", title: "2020–2025 Traders Meeting", date: "14th May 2025", image: "/assets/event.png", href: "#" },
  { id: 3, tag: "Convention", title: "Creative Awards (South Zone)", date: "12th June 2025", image: "/assets/event.png", href: "#" },
  { id: 4, tag: "Convention", title: "Creative Awards (National)", date: "12th June 2025", image: "/assets/event.png", href: "#" },
  { id: 5, tag: "Summit", title: "Design & Innovation Summit", date: "22nd Aug 2025", image: "/assets/event.png", href: "#" },
];

export default function EventsExact() {
  // Autoplay plugin instance so we can pause/resume on hover
  const autoplay = useRef(
    Autoplay({
      delay: 1500,               // auto-slide every 3.5s
      stopOnInteraction: false,  // keep playing after arrows/drag
      playOnInit: true
    })
  );

  const [emblaRef, embla] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
      slidesToScroll: 1,
      inViewThreshold: 0.7
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    return () => {
      embla.off("select", onSelect);
      embla.off("reInit", onSelect);
    };
  }, [embla, onSelect]);

  const next = useCallback(() => embla && embla.scrollNext(), [embla]);
  const prev = useCallback(() => embla && embla.scrollPrev(), [embla]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16" id="events">
      <h2 className="mb-10 text-center text-4xl tracking-tight font-secondary">Events</h2>

      <div className="relative">
        <div
          ref={emblaRef}
          className="overflow-hidden"
          // Pause on hover, resume on leave
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.play}
        >
          <div className="flex">
            {events.map((ev, i) => {
              const isActive = i === selectedIndex;

              return (
                <article
                  key={ev.id}
                  className={[
                    "shrink-0 px-4 md:px-5 lg:px-6 overflow-visible py-10",
                    "basis-[88%] sm:basis-[70%] lg:basis-[34%]"
                  ].join(" ")}
                >
                  {/* Card scaling effect */}
                  <div
                    className={[
                      "transition-transform duration-500 will-change-transform",
                      isActive ? "scale-[1.15] z-20" : "scale-[0.8] z-0"
                    ].join(" ")}
                  >
                    {/* image */}
                    <div
                      className={[
                        "relative aspect-[4/3] overflow-hidden shadow-md transition-all duration-500 ease-out",
                        isActive ? "opacity-100 grayscale-0" : "opacity-40 grayscale contrast-75"
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

                    {/* text block */}
                    <div className="mt-5">
                      <p
                        className={[
                          "text-sm uppercase tracking-wide font-primary",
                          isActive ? "text-[#2A1C79]" : "text-black/40"
                        ].join(" ")}
                      >
                        {ev.tag}
                      </p>
                        <div className={`mt-1 mb-4 h-px w-32 ${isActive ? "bg-primary" : "bg-primary"}`} />
                      <h3
                        className={[
                          "mt-1 text-lg leading-6 font-primary",
                          isActive ? "text-black" : "text-black/40"
                        ].join(" ")}
                      >
                        {ev.title}
                      </h3>
                       
                      <p className={isActive ? "text-lg text-black font-primary" : "text-lg text-black/40 font-primary"}>
                        {ev.date}
                      </p>

                     

                     
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* desktop arrows */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between lg:flex">
          <button
            onClick={prev}
            aria-label="Previous"
            className="pointer-events-auto ml-1 inline-flex h-9 w-9 items-center justify-center text-primary"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="pointer-events-auto mr-1 inline-flex h-9 w-9 items-center justify-center text-primary"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
