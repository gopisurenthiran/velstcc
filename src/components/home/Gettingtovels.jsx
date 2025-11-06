/* components/GettingToVels.jsx */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

/* Replace with your real files */
const ITEMS = [
  { icon: "/assets/plane.svg", title: "4KM", sub: "from the airport" },
  { icon: "/assets/plane.svg", title: "4KM", sub: "from the upcoming new parandur airport" },
  { icon: "/assets/train.svg", title: "4KM", sub: "from the upcoming new thirumazhisai metro" },
  { icon: "/assets/bus.svg", title: "MTC Buses to VELS City", sub: "Monday – Sunday, from 6 AM – 9 PM" },
  { icon: "/assets/car.svg", title: "Seamlessly navigable", sub: "on all map apps" },
];

/* Animation presets */
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const listParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const listItem = {
  hidden: { opacity: 0, x: -25 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45 } }
};

export default function GettingToVels() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="font-secondary text-[28px] md:text-[40px] leading-tight text-black"
        >
          Getting to VELS
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-3 max-w-3xl text-[15px] md:text-lg text-black/70 font-primary"
        >
          Vels Trade & Convention Centre is located in the heart of Chennai, offering<br />
          seamless accessibility from the city’s key business and cultural hubs.
        </motion.p>

        {/* Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT: Map with slight scale reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
          >
            <Image
              src="/assets/location.png"
              alt="VELS location map"
              width={920}
              height={640}
              className="h-auto w-full object-cover"
              priority
            />
          </motion.div>

          {/* RIGHT: Icon List */}
          <motion.ul
            variants={listParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 md:space-y-7 flex flex-col justify-center"
          >
            {ITEMS.map((it, idx) => (
              <motion.li
                key={idx}
                variants={listItem}
                className="flex items-start gap-4"
              >
                <img src={it.icon} alt="" className="shrink-0 mt-0.5" loading="lazy" />
                <div className="leading-tight">
                  <div className="font-primary font-semibold text-[16px] md:text-[18px] text-black">
                    {it.title}
                  </div>
                  <div className="font-primary text-[12.5px] md:text-lg text-black/70">
                    {it.sub}
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
