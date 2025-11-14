"use client";
import Image from "next/image";
import { motion } from "framer-motion";

/* Replace with your real files (kept as examples) */
const ITEMS = [
  { icon: "/assets/plane.svg", title: "4KM", sub: "from the airport" },
  { icon: "/assets/plane.svg", title: "4KM", sub: "from the upcoming new parandur airport" },
  { icon: "/assets/train.svg", title: "4KM", sub: "from the upcoming new thirumazhisai metro" },
  { icon: "/assets/bus.svg", title: "MTC Buses to VELS City", sub: "Monday – Sunday, from 6 AM – 9 PM" },
  { icon: "/assets/car.svg", title: "Seamlessly navigable", sub: "on all map apps" },
];

export default function GettingVels() {
  /* ---------- Animation Variants ---------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const fadeImage = {
    hidden: { opacity: 0, scale: 1.03 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-white">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Heading + blurb */}
        <motion.h2
          className="font-secondary text-[28px] md:text-[40px] leading-tight text-black"
          variants={fadeUp}
          custom={0}
        >
          Plan. Connect. Create.
        </motion.h2>

        <motion.div
          className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.p
          className="mt-3 max-w-3xl text-[15px] md:text-lg text-black/70 font-primary"
          variants={fadeUp}
          custom={1}
        >
          Whether you’re envisioning a grand production, a cultural showcase, or a business convention,
          we’re here to make it seamless. Reach out to our team to explore bookings, availability, and
          tailored arrangements for your next event or shoot.
        </motion.p>

        {/* Two-column layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
            className="relative overflow-hidden rounded-2xl shadow-md aspect-[16/9]"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <iframe
              title="VELS City Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990136.8360316637!2d77.74080859375!3d13.036562500000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b31c8a9acb9%3A0x6f6093af61250de5!2sVELS%20Film%20City!5e0!3m2!1sen!2sin!4v1763122075154!5m2!1sen!2sin%22"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full rounded-2xl"
            ></iframe>
          </motion.div>

          {/* RIGHT: Icon list with staggered fade-up */}
          <motion.div
            className="flex flex-col justify-center"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <ul className="space-y-6 md:space-y-7">
              {ITEMS.map((it, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-4"
                  variants={fadeUp}
                  custom={idx + 3}
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
      </motion.div>
    </section>
  );
}
