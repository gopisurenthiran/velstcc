"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ added
import missionImg from "@/public/assets/mission.webp";
import visionImg from "@/public/assets/vission.webp";

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState("vision");

  const tabContent = {
    vision: {
      title: "Vision",
      desc: "To establish Chennai as a premier global destination for film production by providing an inspiring creative environment, world-class studio spaces, advanced technology, and exceptional production support.",
      img: visionImg,
    },
    mission: {
      title: "Mission",
      desc: "To enable filmmakers and content creators to realize their vision by offering versatile indoor and outdoor facilities, India's largest studio floors, and a collaborative ecosystem that transforms concepts into cinematic masterpieces.",
      img: missionImg,
    },
  };

  const { title, desc, img } = tabContent[activeTab];

  return (
    <>
      {/* ---------- Vision & Mission Section ---------- */}
      <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24 font-founders">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Tabs */}
            <div className="flex items-center gap-8 mb-12">
              {["vision", "mission"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative text-lg font-secondary transition-all ${
                    activeTab === tab ? "text-black" : "text-black"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {activeTab === tab && (
                    <>
                      <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-primary rounded-full"></span>
                      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary"></span>
                    </>
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-secondary mb-4">{title}</h2>
              <hr className="border-t border-primary w-14 mb-6" />
              <p className="text-gray-700 leading-relaxed max-w-md text-lg font-primary">
                {desc}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            className="relative w-full flex justify-center items-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Image
                src={img}
                alt={title}
                className="w-[420px] h-[420px] object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Bottom Text Section ---------- */}
      <motion.div
        className="max-w-7xl mx-auto w-full bg-[#F9F9F9] py-24 px-6 md:px-16 lg:px-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-8xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-secondary text-black mb-4">
            FOUNDERS MESSAGE 
          </h2>
          
          <div className="w-48 h-[1px] bg-primary mb-5" />
          <h4 className="text-xl mb-4 font-secondary">WELCOME MESSAGE FROM CHAIRMAN </h4>
          <p className="text-gray-600 leading-relaxed font-primary text-lg">
            Welcome to Vels Film City, <br/> Trade & Convention Centre & Theatres <br/>		- where vision meets execution. <br/>
            When we embarked on this journey, our ambition was both clear and bold, to build a singular destination where innovation, craftsmanship, and collaboration thrive in seamless unity. Today, we stand as the premier film city in Tamil Nadu, offering infrastructure that rivals the world's finest. <br/>
Whether you're crafting a cinematic masterpiece, orchestrating a global trade summit, or unveiling your brand's next chapter, our ecosystem is purpose-built to elevate your vision at every turn. 
On behalf of our entire team, I invite you to discover our state-of-the-art facilities, witness our relentless pursuit of excellence, and bring your aspirations to life right here in Chennai. 
          </p>
          <p className="text-gray-600 leading-relaxed font-primary font-semibold text-lg mt-10">DR. ISHARI K. GANESH <br/>Founder & Chancellor of Vels University <br/>Chairman, Vels Group of Institutions & Companies </p>
        </div>
      </motion.div>
    </>
  );
}
