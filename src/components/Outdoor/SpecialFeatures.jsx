"use client";
import Image from "next/image";
import React from "react";

import img1 from "@/public/assets/special-1.png";
import img2 from "@/public/assets/special-2.png";
import img3 from "@/public/assets/special-3.png";
import img4 from "@/public/assets/special-4.png";

const features = [
  {
    img: img1,
    title: "6,000-Car Parking Capacity",
    desc: "One of the largest dedicated parking facilities in the Indian film industry, accommodating cast, crew, visitors, and production vehicles with ease.",
  },
  {
    img: img2,
    title: "Expansive Parking for 6,000+ Cars ",
    desc: "A dedicated, high-capacity parking facility, one of the largest in the Indian film industry. Designed for easy access and smooth movement of crew, talent, and production vehicles. ",
  },
  {
    img: img3,
    title: "Architectural Grandeur, Indoors & Out ",
    desc: "From royal corridors and vintage sets to contemporary lounges, every corner of Vel Film City offers a ready-to-shoot aesthetic, saving hours of setup and lighting time. ",
  },
  {
    img: img4,
    title: "Scenic Sets & Customizable Spaces ",
    desc: "Be it a grand ballroom, a cozy café, or a floral courtyard, our pre-designed sets and adaptable backdrops give directors and DOPs endless creative possibilities. ",
  },
];

export default function SpecialFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className=" mb-10">
        <h2 className="text-2xl md:text-4xl font-secondary  text-gray-900 px-10">
           The Vels Signature 
        </h2>
        <div className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4 ml-10"></div>
      </div>

      <div
        className="
          max-w-6xl mx-auto px-4
          grid gap-4
          md:grid-cols-3
          md:grid-rows-[repeat(2,250px)]
        "
      >
     {/* Left Tall Image */}
<div className="relative group overflow-hidden md:row-span-2 h-[520px] ">
  <Image
    src={features[0].img}
    alt={features[0].title}
    fill
    sizes="100%"
    className="object-cover transition-transform duration-500 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 text-white transition-all">
    <h3 className="text-lg font-semibold font-secondary">{features[0].title}</h3>
    <div className="w-40 h-[0.5px] bg-white mb-6 mt-4"></div>
    <p className="text-sm mt-1 font-primary">{features[0].desc}</p>
  </div>
</div>

{/* Top Right 2 Images */}
<div className="col-span-2 grid grid-cols-2 gap-4 h-[250px]">
  {features.slice(1, 3).map((feature, index) => (
    <div
      key={index}
      className="relative group overflow-hidden "
    >
      <Image
        src={feature.img}
        alt={feature.title}
        fill
        sizes="100%"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-3 text-white transition-all">
        <h3 className="text-sm font-semibold font-secondary">{feature.title}</h3>
        <div className="w-40 h-[0.5px] bg-white mb-6 mt-4"></div>
        <p className="text-xs mt-1 font-primary">{feature.desc}</p>
      </div>
    </div>
  ))}
</div>

{/* Bottom Full Width */}
<div className="relative group overflow-hidden col-span-2 h-[250px] ">
  <Image
    src={features[3].img}
    alt={features[3].title}
    fill
    sizes="100%"
    className="object-cover transition-transform duration-500 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-3 text-white transition-all">
    <h3 className="text-sm font-semibold font-secondary">{features[3].title}</h3>
    <div className="w-40 h-[0.5px] bg-white mb-6 mt-4"></div>
    <p className="text-xs mt-1 font-primary">{features[3].desc}</p>
  </div>
</div>
      </div>
    </section>
  );
}
