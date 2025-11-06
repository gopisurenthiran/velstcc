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
        "An outstanding venue with world-class facilities. The scale and flexibility made our event seamless.",
      name: "Priya Sharma",
      role: "Event Organizer",
      image: "/assets/Testimonials-img-1.png",
      color: "bg-[#D64545]",
    },
    {
      id: 2,
      quote:
        "The ambience, design, and service exceeded our expectations. Our guests were highly impressed.",
      name: "Arjun Menon",
      role: "Event Organizer",
      image: "/assets/Testimonials-img-2.png",
      color: "bg-[#F5B942]",
    },
    {
      id: 3,
      quote:
        "Impeccable coordination and premium amenities. Our conference ran flawlessly from start to finish.",
      name: "V. Lakshmi",
      role: "Conference Chair",
      image: "/assets/boy.png",
      color: "bg-[#D64545]",
    },
    {
      id: 4,
      quote:
        "Spacious halls, great lighting, and excellent staff support. Highly recommended for large events.",
      name: "Rahul Iyer",
      role: "Producer",
      image: "/assets/girl.png",
      color: "bg-[#F5B942]",
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
    Testimonial
  </h2>
  <p className="mt-4 text-lg text-gray-600 font-primary">
    Vels Trade & Convention Centre is located in the heart of Chennai,
    offering <br /> seamless accessibility from the city's key business and
    cultural hubs.
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
                    <div className="grid w-full place-items-center md:w-1/3">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={320}
                        height={320}
                        className="h-full w-full"
                        priority={t.id === 1}
                      />
                    </div>

                    {/* Left: Text */}
                    <div className="w-full p-6 md:w-2/3 flex flex-col justify-between">
                      <p className="text-2xl leading-relaxed text-gray-700 font-primary">
                        {t.quote}
                      </p>
                      <div className="mt-6">
                        <h4 className="font-secondary font-medium text-gray-900">{t.name}</h4>
                        <p className="text-lg font-primary font-semibold text-black">{t.role}</p>
                        <span className="mb-5 block h-px w-24 bg-primary" aria-hidden />
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
