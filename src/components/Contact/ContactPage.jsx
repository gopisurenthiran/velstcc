"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Added for animation

export default function ContactTabs() {
  const [activeTab, setActiveTab] = useState("trade");

  const renderForm = () => {
    return (
      <motion.form
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-md font-secondary font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border font-secondary border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block font-secondary text-md font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full font-secondary border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-md font-secondary font-medium mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter Your Phone No"
              className="w-full border border-gray-300 font-secondary px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-md font-secondary font-medium mb-2">
              Select Space <span className="text-red-500">*</span>
            </label>
            <select className="w-full font-secondary border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400">
              <option value="">Enter Your Space</option>
              <option>Auditorium</option>
              <option>Banquet Hall</option>
              <option>Outdoor Area</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-md font-secondary font-medium mb-2">
            Share Your Question Here And We’ll Reach Out Shortly.
          </label>
          <textarea
            rows="4"
            placeholder="Enter Your Name"
            className="w-full font-secondary border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-primary font-primary text-white text-sm uppercase tracking-wide"
        >
          Submit
        </button>
      </motion.form>
    );
  };

  return (
    <motion.div
      className="min-h-screen bg-white text-[#1a1a1a] font-serif overflow-x-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ---------- Tabs Navigation ---------- */}
      <motion.nav
        className="flex justify-center overflow-x-auto flex-wrap md:flex-nowrap gap-4 md:gap-10 px-4 py-4 no-scrollbar"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {[
          { id: "trade", label: "Trade & Convention Centre" },
          { id: "film", label: "Vels Film City" },
          { id: "theatre", label: "Vels Theatres" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm sm:text-md font-medium font-secondary px-4 py-2 whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-primary text-white"
                : "border border-transparent text-gray-600 hover:text-black"
            }`}
          >
            {tab.label}
            <div className="h-[1px] bg-white w-full mt-2"></div>
          </button>
        ))}
      </motion.nav>

      {/* ---------- Tab Content with Animation ---------- */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {activeTab === "trade" && (
            <motion.div
              key="trade"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-secondary font-semibold mb-6">
                Trade & Convention Centre
              </h1>
              <div className="text-lg font-primary leading-relaxed mb-8">
                <p>Survey No.167/4A & 3A</p>
                <p>Santhosha Nagar</p>
                <p>Chennai - Bangalore National Highway,</p>
                <p>Chembarambakkam,</p>
                <p>Tamil Nadu - 600123</p>
              </div>
              {renderForm()}
            </motion.div>
          )}

          {activeTab === "film" && (
            <motion.div
              key="film"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-secondary font-semibold mb-6">
                Vels Film City
              </h1>
              <div className="text-lg font-primary leading-relaxed mb-8">
                <p>Vels Film City Studios</p>
                <p>Thalambur, Chennai</p>
                <p>State-of-the-art shooting facilities.</p>
              </div>
              {renderForm()}
            </motion.div>
          )}

          {activeTab === "theatre" && (
            <motion.div
              key="theatre"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-secondary font-semibold mb-6">
                Vels Theatres
              </h1>
              <div className="text-lg font-primary leading-relaxed mb-8">
                <p>Vels Multiplex</p>
                <p>Pallavaram, Chennai</p>
                <p>Luxury screens with Dolby Atmos.</p>
              </div>
              {renderForm()}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ---------- Event Enquiry Section ---------- */}
      <motion.section
        className="max-w-3xl mx-auto px-4 pb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold font-secondary mb-2">
          Event Enquiry
        </h2>
        <div className="h-[1px] bg-primary w-[120px] mt-6 mb-2"></div>
        <p className="text-lg text-gray-700 font-primary mb-4">
          Interested in exhibitor services or venue <br /> specifications?
        </p>
        <button className="px-6 py-2 bg-primary font-primary text-white text-sm uppercase tracking-wide">
          Enquire Now
        </button>
      </motion.section>
    </motion.div>
  );
}
