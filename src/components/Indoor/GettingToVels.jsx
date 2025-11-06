"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ITEMS = [
  { icon: "/assets/plane.svg", title: "4KM", sub: "from the airport" },
  { icon: "/assets/plane.svg", title: "4KM", sub: "from the upcoming new parandur airport" },
  { icon: "/assets/train.svg", title: "4KM", sub: "from the upcoming new thirumazhisai metro" },
  { icon: "/assets/bus.svg", title: "MTC Buses to VELS City", sub: "Monday – Sunday, from 6 AM – 9 PM" },
  { icon: "/assets/car.svg", title: "Seamlessly navigable", sub: "on all map apps" },
];

export default function GettingToVels() {
  /* ---------- Animation Variants ---------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Heading + blurb */}
        <motion.h2
          className="font-secondary text-[28px] md:text-[40px] leading-tight text-black"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          Plan. Connect. Create.
        </motion.h2>

        <motion.div
          className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          style={{ transformOrigin: "left" }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.p
          className="mt-3 max-w-3xl text-[15px] md:text-lg text-black/70 font-primary"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          custom={1}
          viewport={{ once: true }}
        >
          Whether you’re envisioning a grand production, a cultural showcase, or a business convention, we’re here to make it seamless. Reach out to our team to explore bookings, availability, and tailored arrangements for your next event or shoot.
        </motion.p>

        {/* Two-column layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT: Map image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden">
              <Image
                src="/assets/location.png"
                alt="VELS location map"
                width={920}
                height={640}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT: Icon list (staggered fade-in) */}
          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            <ul className="space-y-6 md:space-y-7">
              {ITEMS.map((it, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-4"
                  variants={fadeUp}
                  custom={idx}
                >
                  <img
                    src={it.icon}
                    alt=""
                    className="shrink-0 inline-block mt-0.5"
                    loading="lazy"
                  />
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
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
