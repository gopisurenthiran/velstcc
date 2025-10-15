/* components/GettingToVels.jsx */
"use client";
import Image from "next/image";

/* Replace with your real files (kept as examples) */
const ITEMS = [
  { icon: "/assets/plane.png",  title: "4KM",  sub: "from the airport" },
  { icon: "/assets/plane.png",  title: "4KM",  sub: "from the upcoming new parandur airport" },
  { icon: "/assets/train.png",    title: "4KM",  sub: "from the upcoming new thirumazhisai metro" },
  { icon: "/assets/bus.png",      title: "MTC Buses to VELS City", sub: "Monday – Sunday, from 6 AM – 9 PM" },
  { icon: "/assets/car.png",  title: "Seamlessly navigable",   sub: "on all map apps" },
];

export default function GettingToVels() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Heading + blurb */}
        <h2 className="font-secondary text-[28px] md:text-[40px] leading-tight text-black">
          Getting to VELS
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] md:text-[16px] text-black/70 font-founders">
          Vels Trade & Convention Centre is located in the heart of Chennai, offering
          seamless accessibility from the city’s key business and cultural hubs.
        </p>

        {/* Two-column layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT: Map image with offset border accent */}
          <div className="relative">
            {/* subtle offset frame */}
           
            <div className="relative overflow-hidden ">
              {/* Use your actual map image or a Google Maps iframe if you prefer */}
              <Image
                src="/assets/location.png"  // 👈 replace with your map image
                alt="VELS location map"
                width={920}
                height={640}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Icon list (icon + two-line text) */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-6 md:space-y-7">
              {ITEMS.map((it, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  {/* Icon — intrinsic sizing (no fixed w/h) */}
                  <img
                    src={it.icon}
                    alt=""
                    className="shrink-0 inline-block mt-0.5" // keeps baselines neat
                    loading="lazy"
                  />
                  <div className="leading-tight">
                    <div className="font-founders font-semibold text-[16px] md:text-[18px] text-black">
                      {it.title}
                    </div>
                    <div className="font-founders text-[12.5px] md:text-[14px] text-black/70">
                      {it.sub}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
