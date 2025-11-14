"use client";
import { motion } from "framer-motion";

const ITEMS = [
  { icon: "/assets/plane.svg", title: "4 KM", sub: "from the airport" },
  { icon: "/assets/plane.svg", title: "4 KM", sub: "from the upcoming New Parandur Airport" },
  { icon: "/assets/train.svg", title: "4 KM", sub: "from the upcoming New Thirumazhisai Metro" },
  { icon: "/assets/bus.svg", title: "MTC Buses to VELS City", sub: "Monday – Sunday, from 6 AM – 9 PM" },
  { icon: "/assets/car.svg", title: "Seamlessly navigable", sub: "on all map apps" },
];

export default function Find() {
  /* ---------- Animation Variants ---------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
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

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Heading + Divider + Description */}
        <motion.h2
          className="font-secondary text-[28px] md:text-[40px] leading-tight text-black"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
         Finding your way to the spotlight – Vels Theatres 
        </motion.h2>

        <motion.div
          className="w-40 h-[2px] bg-[#2D3091] mb-6 mt-4"
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
         Reaching Vels Theatres is as seamless as watching the opening credits roll. 
        </motion.p>

        {/* Two-column layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Google Map Embed */}
          <motion.div
            className="relative overflow-hidden shadow-md aspect-[16/9]"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <iframe
              title="VELS City Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.98701967741!2d80.03668449781337!3d13.035878299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b2cf6afd315%3A0xc44a2aa4a8ba1b01!2sVELS%20CINEMAS!5e0!3m2!1sen!2sin!4v1763119601552!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </motion.div>

          {/* RIGHT: Icon list */}
          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
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
                    alt={it.title}
                    className="w-7 h-7 md:w-8 md:h-8 shrink-0 mt-0.5"
                    loading="lazy"
                  />
                  <div className="leading-tight">
                    <div className="font-primary font-semibold text-[16px] md:text-[18px] text-black">
                      {it.title}
                    </div>
                    <div className="font-primary text-[13px] md:text-[16px] text-black/70">
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
