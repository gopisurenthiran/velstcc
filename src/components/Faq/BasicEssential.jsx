"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  { id: "trade", label: "Trade & Convention Centre" },
  { id: "film", label: "Vels Film City" },
  { id: "theatres", label: "Vels Theatres" },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("trade");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on client
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activeIndex = TABS.findIndex((t) => t.id === activeTab);

  const goPrev = () => {
    const prevIndex = (activeIndex - 1 + TABS.length) % TABS.length;
    setActiveTab(TABS[prevIndex].id);
  };

  const goNext = () => {
    const nextIndex = (activeIndex + 1) % TABS.length;
    setActiveTab(TABS[nextIndex].id);
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto bg-white text-[#111] px-6 md:px-20 py-12 md:py-16 font-sans"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* -------------------------------------------
          TABS HEADER (MOBILE + DESKTOP)
      -------------------------------------------- */}
      <div className="w-full">
        {/* MOBILE: arrows + single active tab centered */}
        <div className="flex items-center justify-center gap-4 md:hidden mb-6">
          <button
            type="button"
            onClick={goPrev}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-black/10 bg-white shadow-sm text-sm"
          >
            ◄
          </button>

          <button
            type="button"
            className={[
              "relative pb-2 transition-colors",
              "text-sm xs:text-base sm:text-lg whitespace-nowrap primary-subtitle",
              "text-[#2D3091]",
            ].join(" ")}
          >
            <span className="mr-1 align-middle">·</span>
            <span>{TABS[activeIndex]?.label}</span>
            <motion.span
              layoutId="faq-underline-mobile"
              className="pointer-events-none absolute left-0 bottom-0 h-[1px] w-full bg-black"
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
            />
          </button>

          <button
            type="button"
            onClick={goNext}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-black/10 bg-white shadow-sm text-sm"
          >
            ►
          </button>
        </div>

        {/* DESKTOP: row of tabs with underline */}
        <div
          className="
            hidden md:flex justify-start md:justify-center 
            gap-6 lg:gap-10 
            primary-subtitle pb-0 mb-8
          "
        >
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={[
                  "relative pb-2 md:pb-3 transition-colors",
                  "text-sm sm:text-base md:text-lg whitespace-nowrap",
                  isActive
                    ? "text-[#2D3091]"
                    : "text-black/60 hover:text-black",
                ].join(" ")}
              >
                <span className="mr-1 align-middle">·</span>
                <span>{tab.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="faq-underline-desktop"
                    className="pointer-events-none absolute left-0 bottom-0 h-[1px] w-full bg-black"
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* -------------------------------------------
          TAB CONTENT
          - Mobile: NO animation
          - Desktop: With AnimatePresence
      -------------------------------------------- */}
      {isMobile ? (
        <div className="mt-2 md:mt-0">
          {activeTab === "trade" && <TradeConventionContent />}
          {activeTab === "film" && <FilmCityContent />}
          {activeTab === "theatres" && <TheatreContent />}
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="mt-2 md:mt-0"
          >
            {activeTab === "trade" && <TradeConventionContent />}
            {activeTab === "film" && <FilmCityContent />}
            {activeTab === "theatres" && <TheatreContent />}
          </motion.div>
        </AnimatePresence>
      )}
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
        className="primary-title mb-4"
        id="target-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Basics & Essentials
      </motion.h1>
      <div className="h-[1px] bg-[#2D3091] w-[120px] mb-6" />

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
              className={`w-full text-left text-lg secondary-subtitle mb-3 leading-snug ${
                openIndex === i ? "text-[#2D3091]" : "text-[#1a1a1a]"
              }`}
            >
              {faq.question}
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.p
                  className="mt-2 text-md secondary-description text-gray-600 leading-relaxed"
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
        className="primary-title mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Vels Film City
      </motion.h1>
      <div className="h-[1px] bg-[#2D3091] w-[120px] mb-6" />

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
              className={`w-full text-left secondary-subtitle mb-3 leading-snug ${
                openIndex === i ? "text-[#2D3091]" : "text-[#1a1a1a]"
              }`}
            >
              {faq.question}
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.p
                  className="mt-2 secondary-description text-gray-600 leading-relaxed"
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
        className="primary-title mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Vels Theatres
      </motion.h1>
      <div className="h-[1px] bg-[#2D3091] w-[120px] mb-6" />

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
              className={`w-full text-left secondary-subtitle mb-3 leading-snug ${
                openIndex === i ? "text-[#2D3091]" : "text-[#1a1a1a]"
              }`}
            >
              {faq.question}
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.p
                  className="mt-2 secondary-description text-gray-600 leading-relaxed"
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
