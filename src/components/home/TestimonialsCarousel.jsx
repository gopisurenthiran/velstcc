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
      containScroll: "trimSnaps",
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
      image: "/assets/testimonial-1.webp",
    },
    {
      id: 2,
      quote:
        "The atmosphere, layout, and support surpassed our expectations. Our attendees were extremely satisfied.",
      name: "Ruban",
      role: "CMO, Producer of Agarwal Movies",
      image: "/assets/testimonial.webp",
    },
    {
      id: 4,
      quote:
        "The infrastructure, ambiance, and coordination exceeded our requirements. Our delegates were thoroughly impressed throughout.",
      name: "Ramya",
      role: "Corporate Planner",
      image: "/assets/girl.png",
    },
    {
      id: 3,
      quote:
        "An exceptional space with outstanding amenities. The professional team and versatile setup made our product launch truly memorable.",
      name: "Balaji",
      role: "Marketing Director",
      image: "/assets/boy.png",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        {/* === Header === */}
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
          <motion.div
            className="max-w-2xl text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 primary-title leading-tight">
              What Our Clients Say
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 secondary-description">
              Vels Trade & Convention Centre stands in Chennai's vibrant core,
              providing effortless connectivity to the city's premier commercial
              and cultural destinations.
            </p>
          </motion.div>

          {/* Arrows */}
          <div className="flex justify-center md:justify-end mt-4 md:mt-0 gap-2">
            <button
              aria-label="Previous testimonials"
              onClick={scrollPrev}
              disabled={!canPrev}
              className="rounded-full border border-gray-200 p-2 sm:p-3 shadow-sm transition hover:shadow disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="size-5 sm:size-6" />
            </button>
            <button
              aria-label="Next testimonials"
              onClick={scrollNext}
              className="rounded-full border border-gray-200 p-2 sm:p-3 shadow-sm transition hover:shadow"
            >
              <ArrowRight className="size-5 sm:size-6" />
            </button>
          </div>
        </div>

        {/* === Embla Carousel === */}
        <div className="embla">
          <div className="embla__viewport overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex -ml-4 sm:-ml-6 pr-4 sm:pr-6">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="
                    embla__slide
                    pl-4 sm:pl-6
                    basis-[95%] sm:basis-[80%] md:basis-[50%]
                    shrink-0
                  "
                >
                  <article className="group flex flex-col md:flex-row-reverse h-full border border-gray-200 bg-white shadow-sm overflow-hidden transition hover:shadow-md">
                    {/* === Image === */}
                    <div className="grid w-full md:w-1/3 bg-white place-items-center">
                      <div className="relative w-full h-[200px] sm:h-[240px] md:h-[100%] flex items-center justify-center">
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={320}
                          height={320}
                          className="object-contain w-auto h-full max-h-[300px]"
                          priority={t.id === 1}
                        />
                      </div>
                    </div>

                    {/* === Text === */}
                    <div className="w-full md:w-2/3 p-5 sm:p-6 flex flex-col justify-between text-center md:text-left">
                      <p className="text-base sm:text-lg text-gray-700 secondary-description leading-relaxed">
                        {t.quote}
                      </p>
                      <div className="mt-5 sm:mt-6">
                        <h4 className="primary-subtitle font-medium text-gray-900 text-lg sm:text-xl">
                          {t.name}
                        </h4>
                        <p className=" secondary-subtitle font-bold text-black mt-1">
                          {t.role}
                        </p>
                        <span
                          className="mt-4 mx-auto md:mx-0 block h-px w-24 bg-primary"
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
