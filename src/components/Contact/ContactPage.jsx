"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function ContactTabs() {
  const [activeTab, setActiveTab] = useState("trade");

  /* --- FULL TAB LABELS --- */
  const tabLabels = {
    trade: "Trade & Convention Centre",
    film: "Vels Film City",
    theatre: "Vels Theatres",
  };

  /* --- MAP SRC PER TAB (PUT YOUR REAL EMBED URLS HERE) --- */
  const MAP_SRC = {
    trade:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.98047056669!2d80.0456360738114!3d13.036915013445475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b475a4ddbaf%3A0xbf23d710d8e78aaa!2sVELS%20Trade%20%26%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1763122190448!5m2!1sen!2sin%22", // 🔁 replace with real Trade & Convention embed
    film:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990136.8360316637!2d77.74080859375!3d13.036562500000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b31c8a9acb9%3A0x6f6093af61250de5!2sVELS%20Film%20City!5e0!3m2!1sen!2sin!4v1763122075154!5m2!1sen!2sin%22", // 🔁 replace with real Film City embed
    theatre:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.98701967741!2d80.03668449781337!3d13.035878299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b2cf6afd315%3A0xc44a2aa4a8ba1b01!2sVELS%20CINEMAS!5e0!3m2!1sen!2sin!4v1763119601552!5m2!1sen!2sin", // 🔁 replace with real Theatre embed
  };

  /* --- FORM HOOKS OUTSIDE --- */
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* --- EMAILJS SUBMIT HANDLER --- */
  const onSubmit = () => {
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_sm2d2ao", // EmailJS service ID
        "template_uex9tuy", // EmailJS template ID
        formRef.current, // actual form
        "1OAToflI7vmUK7Dqz" // EmailJS public key
      )
      .then(() => {
        toast.success("Message sent successfully!");
        reset();
      })
      .catch(() => {
        toast.error("Something went wrong. Try again!");
      });
  };

  /* --- THE FORM (used only in trade + film tabs) --- */
  const renderForm = () => (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hidden field → sends FULL tab name */}
      <input
        type="hidden"
        {...register("tabName")}
        value={tabLabels[activeTab]}
        readOnly
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-md font-secondary font-medium mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter Your Name"
            className="w-full border font-secondary border-gray-300 px-3 py-2"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-md font-secondary font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
            placeholder="Enter Your Email"
            className="w-full border font-secondary border-gray-300 px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-md font-secondary font-medium mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              minLength: { value: 10, message: "Enter a valid number" },
            })}
            placeholder="Enter Your Phone No"
            className="w-full border border-gray-300 font-secondary px-3 py-2"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors.phone.message}</p>
          )}
        </div>

        {/* Space */}
        <div>
          <label className="block text-md font-secondary font-medium mb-2">
            Select Space <span className="text-red-500">*</span>
          </label>
          <select
            {...register("space", { required: "Please select a space" })}
            className="w-full font-secondary border border-gray-300 px-3 py-2"
          >
            <option value="">Enter Your Space</option>
            <option>Auditorium</option>
            <option>Banquet Hall</option>
            <option>Outdoor Area</option>
          </select>
          {errors.space && (
            <p className="text-red-500 text-xs">{errors.space.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-md font-secondary font-medium mb-2">
          Share Your Question Here And We’ll Reach Out Shortly.
        </label>
        <textarea
          rows={4}
          {...register("message", { required: "Message is required" })}
          placeholder="Enter Your Message"
          className="w-full font-secondary border border-gray-300 px-3 py-2"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="px-6 py-2 bg-primary font-primary text-white text-sm uppercase tracking-wide"
      >
        Submit
      </button>
    </motion.form>
  );

  /* --- MAIN UI RETURN --- */
  return (
    <motion.div
      className="min-h-screen bg-white text-[#1a1a1a] font-serif"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* ⭐ Toast Top Right */}
      <Toaster position="top-right" />

      {/* Tabs */}
      <motion.nav
        className="flex justify-center overflow-x-auto gap-4 md:gap-10 px-4 py-4"
        id="target-section"
      >
        {[
          { id: "trade", label: "Trade & Convention Centre" },
          { id: "film", label: "Vels Film City" },
          { id: "theatre", label: "Vels Theatres" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-sm sm:text-md font-secondary px-4 py-2 ${
              activeTab === tab.id ? "bg-primary text-white" : "text-gray-600"
            }`}
          >
            {tab.label}
            <div className="h-[1px] bg-white w-full mt-2"></div>
          </button>
        ))}
      </motion.nav>

      {/* Tab Content */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {/* TRADE TAB */}
          {activeTab === "trade" && (
            <motion.div
              key="trade"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-2xl font-secondary font-semibold mb-6">
                Trade & Convention Centre
              </h1>
              <div className="text-lg font-primary leading-relaxed mb-8">
                <p>Survey No.167/4A & 3A</p>
                <p>Santhosha Nagar</p>
                <p>Chennai - Bangalore National Highway</p>
                <p>Chembarambakkam</p>
                <p>Tamil Nadu - 600123</p>
              </div>

              {renderForm()}
            </motion.div>
          )}

          {/* FILM TAB */}
          {activeTab === "film" && (
            <motion.div
              key="film"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-2xl font-secondary font-semibold mb-6">
                Vels Film City
              </h1>
              <div className="text-lg font-primary leading-relaxed mb-8">
                <p>22PX+J5X, EVP Santhosha Nagar</p>
                <p>Chennai-Bangalore National Highway</p>
                <p>Chembarambakkam</p>
                <p>Chennai, Tamil Nadu 600123</p>
              </div>

              {renderForm()}
            </motion.div>
          )}

          {/* THEATRE TAB – ONLY ADDRESS */}
          {activeTab === "theatre" && (
            <motion.div
              key="theatre"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-2xl font-secondary font-semibold mb-6">
                Vels Theatres
              </h1>
              <div className="text-lg font-primary leading-relaxed mb-8">
                <p>Survey no 167/4A & 3A</p>
                <p>Santhosha Nagar</p>
                <p>Chennai - Bangalore National Highway</p>
                <p>Chembarambakkam</p>
                <p>Tamil Nadu - 600123</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---------- MAP SECTION (updates per TAB) ---------- */}
        {MAP_SRC[activeTab] && (
          <div className="mt-10 w-full h-64 md:h-80 relative rounded-lg overflow-hidden shadow-md">
            <iframe
              key={activeTab}
              title={`${tabLabels[activeTab]} Map`}
              src={MAP_SRC[activeTab]}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        )}
      </section>
    </motion.div>
  );
}
