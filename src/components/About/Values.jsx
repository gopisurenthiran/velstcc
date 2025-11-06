"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // ✅ Added for animation
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-secondary text-gray-900 inline-block">
            Values
          </h2>
          <div className="w-24 h-[1px] bg-primary mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT — image with offset white frame */}
          <motion.div
            className="relative flex justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md">
              <div aria-hidden className="absolute h-full" />
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
          </motion.div>

          {/* RIGHT — numbered list */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-100 h-[1px] bg-primary mb-5" />

            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {values.map((v, i) => (
                <motion.div
                  key={v.num}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  className="flex items-start gap-6"
                >
                  {/* number */}
                  <div className="w-14 flex-shrink-0">
                    <p className="text-2xl md:text-3xl font-medium text-gray-800 tracking-wide">
                      {v.num}
                    </p>
                  </div>

                  {/* title + description */}
                  <div className="flex-1 flex flex-col md:flex-row md:items-start md:gap-6">
                    <div className="min-w-[160px]">
                      <h3 className="text-xl md:text-base font-secondary text-gray-900">
                        {v.title}
                      </h3>
                    </div>
                    <p className="text-md text-gray-500 font-primary leading-relaxed max-w-xl">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
