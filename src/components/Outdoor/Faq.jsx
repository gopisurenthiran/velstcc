"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const accent = "text-[#2A1C79]";

const faqs = [
  {
    q: "Power & Technical Support ",
    a: "Our stages offer reliable three-phase power with marked tie-in points, backed by on-site generators and UPS for critical areas. Certified electricians handle load planning, distribution, cabling, and safety compliance (earthing, testing, tags).",
  },
  {
    q: "Booking & availability process ",
    a: "Yes. We provide space options, power, parking and on-ground support. Speak to our team for schedules and rates.",
  },
  {
    q: "Power & technical support ",
    a: "Submit an enquiry form or call our sales team. We’ll confirm availability, share a proposal, and guide you through contracts and payments.",
  },
  {
    q: "Set construction guidelines",
    a: "Ample on-site parking is available, and we partner with nearby hotels for guest accommodation.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  /* ---------- Animation Variants ---------- */
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-4">
      {/* Heading */}
      <motion.h2
        className="text-center font-secondary text-4xl tracking-tight"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        FAQs
      </motion.h2>

      <motion.div
        className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4 mx-auto"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
        viewport={{ once: true }}
      ></motion.div>

      {/* FAQ List */}
      <motion.div
        className="mt-8 divide-y divide-black/10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {faqs.map((item, i) => {
          const isOpen = i === open;
          const id = `faq-${i}`;

          return (
            <motion.div key={id} variants={fadeUp}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                id={id}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={[
                  "w-full text-left outline-none transition-colors py-3",
                  isOpen ? `${accent}` : "text-black hover:text-black/70",
                ].join(" ")}
              >
                <span className="text-xl leading-7 font-primary">{item.q}</span>
              </button>

              {/* Animated Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`${id}-panel`}
                    role="region"
                    aria-labelledby={id}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                  >
                    <div className="min-h-0">
                      <p className="pb-5 text-lg leading-6 text-black/70 font-primary">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
