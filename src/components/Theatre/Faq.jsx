"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // ✅ add this
import { a } from "framer-motion/client";

const accent = "text-[#2A1C79]";

const faqs = [
  {
    q: "How can I book tickets at Vels Theatres?",
    a: "You can easily book your tickets online through our website or via authorized ticketing partners. On-site booking counters are also available for walk-ins, subject to seat availability.",
  },
  { q: "Does Vels Theatres offer Dolby Atmos or 4K projection?", a: "Yes. All our auditoriums are equipped with 4K Ultra HD projection and Dolby Atmos surround sound, ensuring an immersive movie experience that’s larger than life." },
  { q: "Is parking available at the theatre?", a: "Absolutely. We offer secure, well-marked parking spaces with dedicated areas for cars, two-wheelers, and VIP access. Valet services are also available during prime hours." },
  { q: "Are food and beverages allowed inside the auditorium?", a: "Outside food and drinks are not permitted. However, our in-house concessions and lounge serve a curated menu of popcorn, nachos, beverages, and gourmet theatre snacks." },
  { q: "Does the theatre support private screenings or events?", a: "Yes. Vels Theatres offers private screening packages for premieres, brand events, and special occasions. Our team can help customize the setup to suit your event theme. " },
  {q:"Is the theatre accessible for people with disabilities?", a:"Yes. Vels Theatres is fully wheelchair accessible with dedicated seating, ramps, elevators, and restrooms designed for guest convenience and comfort." },
  {q:"What safety measures are in place?", a:"We follow strict hygiene and safety protocols, including daily sanitization, air filtration, and trained emergency staff on site. Your comfort and safety remain our top priority."}
];

export default function FaqTheatre() {
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
      <h2 className="text-center primary-title mb-6">
        FAQ's
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
                  <p className="pb-5 secondary-description text-black/70">
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
