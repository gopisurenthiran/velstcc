"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // ✅ add this
import { a } from "framer-motion/client";

const accent = "text-[#2A1C79]";

const faqs = [
  {
    q: "What types of events can be hosted at the Trade & Convention Centre?",
    a: "Our venue accommodates a diverse range of events including trade shows, corporate conferences, product launches, exhibitions, seminars, cultural programs, wedding receptions, and large-scale social gatherings. The flexible spaces can be customized to suit your specific requirements.",
  },
  { q: "What is the maximum capacity of the venue?", a: "Our convention center can accommodate up to 5,000 guests in theatre-style seating and 3,000 guests for banquet-style events. We also offer smaller breakout rooms for intimate meetings ranging from 50 to 500 attendees." },
  { q: "Do you offer film production facilities?", a: "Yes, we provide comprehensive film production facilities including high ceilings, professional lighting infrastructure, ample power supply, and versatile spaces that can be transformed into shooting locations for films, commercials, and corporate videos." },
  { q: "How can I book a venue?", a: "You can book a venue by contacting our events team via phone, email, or by filling out the inquiry form on our website. Our team will discuss your requirements, provide a site visit, and guide you through the booking process with transparent pricing." },
  { q: "Is parking and accommodation available nearby?", a: "Yes, we offer extensive on-site parking for over 1,000 vehicles. Additionally, there are several premium hotels and accommodations within a 2-5 kilometer radius, with special rates available for event attendees through our partner network." },
  {q:"What audio-visual and technical equipment is included?", a:"Our venue is equipped with state-of-the-art audio systems, LED screens, projectors, wireless microphones, stage lighting, and high-speed Wi-Fi. Additional technical support and equipment can be arranged based on your event needs." },
  {q:"Do you provide catering services?", a:"Yes, we have an in-house catering team offering customizable menus ranging from traditional South Indian cuisine to international delicacies. We can accommodate various dietary requirements and preferences, with options for buffet, plated service, or cocktail-style catering"}
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
      <h2 className="text-center primary-title">
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
                <span className="text-xl leading-7 secondary-subtitle">
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
                  <p className="pb-5 text-lg leading-6 text-black/70 secondary-description">
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
