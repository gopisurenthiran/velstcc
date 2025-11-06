"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // ✅ add this

const accent = "text-[#2A1C79]";

const faqs = [
  {
    q: "What types of events can be hosted at the Trade & Convention Centre?",
    a: "Influencer marketing is a strategy where brands collaborate with digital creators who have a strong online following to promote products or services authentically. It works by leveraging trust and credibility built by influencers with their audience.",
  },
  { q: "Do you offer film production facilities?", a: "Yes. We provide space options, power, parking and on-ground support. Speak to our team for schedules and rates." },
  { q: "How can I book a venue?", a: "Submit an enquiry form or call our sales team. We’ll confirm availability, share a proposal, and guide you through contracts and payments." },
  { q: "Is parking and accommodation available nearby?", a: "Ample on-site parking is available, and we partner with nearby hotels for guest accommodation." },
];

export default function Faqs() {
  const [open, setOpen] = useState(0);

  return (
    <motion.section
      className="mx-auto max-w-4xl px-4 py-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }} // play animation only once
    >
      {/* Title */}
      <h2 className="text-center font-secondary text-4xl tracking-tight">
        FAQs
      </h2>

      <div className="mt-8 divide-y divide-black/10">
        {faqs.map((item, i) => {
          const isOpen = i === open;
          const id = `faq-${i}`;
          const panel = `faq-panel-${i}`;
          return (
            <motion.div
              key={id}
              className="py-4"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }} // slight stagger per FAQ
              viewport={{ once: true }}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel}
                id={id}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={[
                  "w-full text-left outline-none transition-colors",
                  "py-3",
                  isOpen ? `${accent}` : "text-black hover:text-black/70",
                ].join(" ")}
              >
                <span className="text-xl leading-7 font-primary">
                  {item.q}
                </span>
              </button>

              {/* Answer */}
              <div
                id={panel}
                role="region"
                aria-labelledby={id}
                className={[
                  "overflow-hidden transition-[grid-template-rows,opacity] duration-300",
                  isOpen ? "grid grid-rows-[1fr] opacity-100" : "grid grid-rows-[0fr] opacity-0",
                ].join(" ")}
              >
                <div className="min-h-0">
                  <p className="pb-5 text-lg leading-6 text-black/70 font-primary">
                    {item.a}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
