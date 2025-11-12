"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialsCarousel() {
  const [emblaRef, embla] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
      containScroll: "trimSnaps", // keep spacing when snapping
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
  }, [embla, onSelect]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const testimonials = [
    {
      id: 1,
      quote:
        "A remarkable venue featuring premier facilities. The size and adaptability ensured our event ran flawlessly.",
      name: "Priya",
      role: "CEO, of OMG Event Organizing.",
      image: "/assets/girl.png",
      color: "bg-[#D64545]",
    },
    {
      id: 2,
      quote:
        "The atmosphere, layout, and support surpassed our expectations. Our attendees were extremely satisfied.",
      name: "Ruban",
      role: "CMO, Producer of Agarwal Movies",
      image: "/assets/boy.png",
      color: "bg-[#F5B942]",
    },

    {
      id: 4,
      quote:
        "The infrastructure, ambiance, and coordination exceeded our requirements. Our delegates were thoroughly impressed throughout.",
      name: "Ramya",
      role: "Corporate Planner",
      image: "/assets/girl.png",
      color: "bg-[#F5B942]",
    },
    {
      id: 3,
      quote:
        "An exceptional space with outstanding amenities. The professional team and versatile setup made our product launch truly memorable. ",
      name: "Balaji",
      role: "Marketing Director",
      image: "/assets/boy.png",
      color: "bg-[#D64545]",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="container mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between gap-6">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }} // animation plays only once when in view
          >
            <h2 className="text-4xl md:text-4xl text-gray-900 font-secondary">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-600 font-primary">
              Vels Trade & Convention Centre stands in Chennai's vibrant core,
              providing effortless connectivity to the city's premier commercial
              and cultural destinations.
            </p>
          </motion.div>

          {/* Arrow controls (top-right) */}
          <div className="mt-2 flex items-center gap-2">
            <button
              aria-label="Previous testimonials"
              onClick={scrollPrev}
              disabled={!canPrev}
              className="rounded-full border border-gray-200 p-2 shadow-sm transition hover:shadow disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              aria-label="Next testimonials"
              onClick={scrollNext}
              className="rounded-full border border-gray-200 p-2 shadow-sm transition hover:shadow"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Embla viewport */}
        <div className="embla">
          <div className="embla__viewport overflow-hidden" ref={emblaRef}>
            {/* Track: remove gap, use slide padding for gutters */}
            <div className="embla__container flex -ml-6 pr-6">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="
                    embla__slide
                    pl-6
                    basis-[88%] sm:basis-[80%] md:basis-[50%]
                    shrink-0
                  "
                >
                  <article className="group flex h-full flex-col items-stretch overflow-hidden  border border-gray-200 bg-white shadow-sm transition hover:shadow-md md:flex-row-reverse">
                    {/* Right: Image on accent color (kept simple; add t.color if desired) */}
                    {/* Right: Image on accent color */}
                    <div className="grid w-full place-items-center md:w-1/3 bg-white">
                      <div className="relative w-full h-[240px] md:h-[100%] flex items-center justify-center">
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={320}
                          height={320}
                          className="object-contain  w-auto h-full max-h-[320px]"
                          priority={t.id === 1}
                        />
                      </div>
                    </div>

                    {/* Left: Text */}
                    <div className="w-full p-6 md:w-2/3 flex flex-col justify-between">
                      <p className="text-xl text-gray-700 font-primary">
                        {t.quote}
                      </p>
                      <div className="mt-6">
                        <h4 className="font-secondary font-medium text-gray-900">
                          {t.name}
                        </h4>
                        <p className="text-lg font-primary font-semibold text-black">
                          {t.role}
                        </p>
                        <span
                          className="mb-5 block h-px w-24 bg-primary"
                          aria-hidden
                        />
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
