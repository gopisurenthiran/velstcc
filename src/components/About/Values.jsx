"use client";
import Image from "next/image";
import React from "react";
import imgSrc from "@/public/assets/featurted_image.png";

export default function ValuesSection() {
  const values = [
    { num: "01", title: "Excellence", desc: "Consistently delivering superior facilities and services for every production." },
    { num: "02", title: "Innovation", desc: "Embracing the latest technologies to elevate production quality and efficiency." },
    { num: "03", title: "Collaboration", desc: "Building strong partnerships among filmmakers, crews and creative teams." },
    { num: "04", title: "Integrity", desc: "Upholding transparency, honesty, and professionalism in all interactions." },
    { num: "05", title: "Customer Focus", desc: "Anticipating and meeting client needs for a smooth, seamless experience." },
    { num: "06", title: "Sustainability", desc: "Promoting environmentally responsible practices in all stages of filmmaking." },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title + small underline */}
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-secondary text-gray-900 inline-block">Values</h2>
             <div className="w-24 h-[1px] bg-primary mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT — image with offset white frame and decorative lines */}
          <div className="relative flex justify-start">
         

            {/* framed image: using two stacked boxes to create offset frame */}
            <div className="relative w-full max-w-md">
              {/* shadowed offset frame behind image */}
              <div
                aria-hidden
                className="absolute  h-full"
              />
              <div className="relative overflow-hidden">
                <Image
                  src={imgSrc}
                  alt="Values image"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — numbered list with divider line at top */}
          <div className="relative">
            {/* thin top divider (spans right column) */}
                <div className="w-100 h-[1px] bg-primary mb-5" />

            <div className="space-y-6">
              {values.map((v, i) => (
                <div key={v.num} className="flex items-start gap-6">
                  {/* number */}
                  <div className="w-14 flex-shrink-0">
                    <p className="text-2xl md:text-3xl font-medium text-gray-800 tracking-wide">{v.num}</p>
                  </div>

                  {/* title + description aligned horizontally like the screenshot */}
                  <div className="flex-1 flex flex-col md:flex-row md:items-start md:gap-6">
                    <div className="min-w-[160px]">
                      <h3 className="text-xl md:text-base font-secondary text-gray-900">{v.title}</h3>
                    </div>
                    <p className="text-md text-gray-500 font-primary leading-relaxed max-w-xl">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
