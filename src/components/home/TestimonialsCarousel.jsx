"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialsCarousel() {
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false, dragFree: false },
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
      color: "bg-[#D64545]", // red
    },
    {
      id: 2,
      quote:
        "The ambience, design, and service exceeded our expectations. Our guests were highly impressed.",
      name: "Arjun Menon",
      role: "Event Organizer",
      image: "/assets/Testimonials-img-2.png",
      color: "bg-[#F5B942]", // yellow
    },
    {
      id: 3,
      quote:
        "Impeccable coordination and premium amenities. Our conference ran flawlessly from start to finish.",
      name: "V. Lakshmi",
      role: "Conference Chair",
      image: "/assets/Testimonials-img-1.png",
      color: "bg-[#D64545]",
    },
    {
      id: 4,
      quote:
        "Spacious halls, great lighting, and excellent staff support. Highly recommended for large events.",
      name: "Rahul Iyer",
      role: "Producer",
      image: "/assets/Testimonials-img-2.png",
      color: "bg-[#F5B942]",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-4xl text-gray-900 font-secondary">
              Testimonial
            </h2>
            <p className="text-gray-600 mt-4 font-primary text-lg">
              Vels Trade & Convention Centre is located in the heart of Chennai,
              offering <br /> seamless accessibility from the city's key business and
              cultural hubs.
            </p>
          </div>

          {/* Arrow controls (top-right) */}
          <div className="flex items-center gap-2 mt-2">
            <button
              aria-label="Previous testimonials"
              onClick={scrollPrev}
              disabled={!canPrev}
              className="rounded-full border border-gray-200 p-2 shadow-sm hover:shadow transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              aria-label="Next testimonials"
              onClick={scrollNext}
              className="rounded-full border border-gray-200 p-2 shadow-sm hover:shadow transition"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Embla viewport */}
        <div className="embla">
          <div className="embla__viewport overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="
                    embla__slide
                    basis-[88%] sm:basis-[80%] md:basis-[48%] 
                    shrink-0
                  "
                >
                  <article className="group flex h-full flex-col md:flex-row-reverse items-stretch border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
                    {/* Right: Image on accent color */}
                    <div
                      className={` md:w-1/3 w-full grid place-items-center`}
                    >
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                        priority={t.id === 1}
                      />
                    </div>

                    {/* Left: Text */}
                    <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
                      <p className="text-gray-700 leading-relaxed">{t.quote}</p>
                      <div className="mt-6">
                        <h4 className="font-medium text-gray-900">{t.name}</h4>
                        <p className="font-semibold text-black">{t.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots (optional, modern & accessible) */}
        {/* If you want dots, we can add them by tracking selectedIndex. */}
      </div>
    </section>
  );
}
