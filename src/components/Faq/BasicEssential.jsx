"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ added for animation

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("trade");

  const tabs = [
    { id: "trade", label: "Trade & Convention Centre" },
    { id: "film", label: "Vels Film City" },
    { id: "theatres", label: "Vels Theatres" },
  ];

  return (
    <motion.div
      className="max-w-5xl mx-auto bg-white text-[#111] px-6 md:px-20 py-16 font-sans"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Tabs Header */}
      <div className="flex gap-10 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-2 text-lg font-secondary transition-colors duration-200 ${
              activeTab === tab.id
                ? "text-[#2D3091] font-medium"
                : "text-[#1a1a1a] hover:text-[#2D3091]"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute left-0 -bottom-[1px] w-full h-[1px] bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content — with smooth fade transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "trade" && <TradeConventionContent />}
          {activeTab === "film" && <FilmCityContent />}
          {activeTab === "theatres" && <TheatreContent />}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/* -----------------------------------------------------
   TAB 1: Trade & Convention Centre Content
----------------------------------------------------- */
function TradeConventionContent() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question:
        "What types of events can be hosted at the Trade & Convention Centre?",
      answer:
        "Influencer marketing is a strategy where brands collaborate with digital creators who have a strong online following to promote products or services authentically. It works by leveraging trust and credibility built by influencers with their audience.",
    },
    {
      question: "Do you offer film production facilities?",
      answer:
        "Yes, we provide end-to-end film production support including sound stages, lighting setups, post-production suites, and on-site amenities for both short and long-term productions.",
    },
    {
      question: "How can I book a venue?",
      answer:
        "You can contact our events team via email or phone listed on the Contact page. We also offer an online booking inquiry form for faster responses and tailored assistance.",
    },
    {
      question: "Is parking and accommodation available nearby?",
      answer:
        "Yes, ample parking is available within the facility, and there are multiple partner hotels and serviced apartments within walking distance for the convenience of guests and crew.",
    },
  ];

  return (
    <div>
      <motion.h1
        className="text-[32px] font-secondary mb-4" id="target-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Basics & Essentials
      </motion.h1>
      <div className="h-[1px] bg-[#2D3091] w-[120px] mb-6"></div>

      <div className="max-w-3xl">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="border-t border-gray-300 py-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className={`w-full text-left text-lg font-primary mb-5 leading-snug ${
                openIndex === i ? "text-[#2D3091]" : "text-[#1a1a1a]"
              }`}
            >
              {faq.question}
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.p
                  className="mt-3 text-md font-primary text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* -----------------------------------------------------
   TAB 2: Vels Film City Content
----------------------------------------------------- */
function FilmCityContent() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What facilities does Vels Film City provide?",
      answer:
        "Vels Film City offers modern studios, outdoor shooting areas, post-production suites, and advanced lighting and sound systems suitable for any scale of film or OTT production.",
    },
    {
      question: "Can I rent equipment on site?",
      answer:
        "Yes, high-end cameras, lights, and sound equipment are available for rent directly within the premises, ensuring smooth production logistics.",
    },
  ];

  return (
    <div>
      <motion.h1
        className="text-[32px] font-secondary mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Vels Film City
      </motion.h1>
      <div className="h-[1px] bg-[#2D3091] w-[120px] mb-6"></div>

      <div className="max-w-3xl">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="border-t border-gray-300 py-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className={`w-full text-left text-lg font-primary mb-5 leading-snug ${
                openIndex === i ? "text-[#2D3091]" : "text-[#1a1a1a]"
              }`}
            >
              {faq.question}
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.p
                  className="mt-3 text-md font-primary text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* -----------------------------------------------------
   TAB 3: Vels Theatres Content
----------------------------------------------------- */
function TheatreContent() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Vels Theatres unique?",
      answer:
        "Vels Theatres combines luxury seating, premium Dolby Atmos sound, and advanced projection to create an exceptional cinematic experience.",
    },
    {
      question: "Do you host private screenings?",
      answer:
        "Yes, private screenings, corporate events, and special premieres can be organized upon request with customized arrangements.",
    },
  ];

  return (
    <div>
      <motion.h1
        className="text-[32px] font-secondary mb-4" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Vels Theatres
      </motion.h1>
      <div className="h-[1px] bg-[#2D3091] w-[120px] mb-6"></div>

      <div className="max-w-3xl" >
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="border-t border-gray-300 py-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className={`w-full text-left text-lg font-primary mb-5 leading-snug ${
                openIndex === i ? "text-[#2D3091]" : "text-[#1a1a1a]"
              }`}
            >
              {faq.question}
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.p
                  className="mt-3 text-md font-primary text-gray-600 leading-relaxed" 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
