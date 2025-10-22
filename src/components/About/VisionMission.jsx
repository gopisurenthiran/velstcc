"use client";
import React, { useState } from "react";
import Image from "next/image";
import missionImg from "@/public/assets/featurted_image.png";
import visionImg from "@/public/assets/featurted_image.png";

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

  return ( <>
     <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24 font-founders">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Section */}
        <div>
          {/* Tabs */}
          <div className="flex items-center gap-8 mb-12">
            {["vision", "mission"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative text-lg font-secondary transition-all ${
                  activeTab === tab
                    ? "text-black"
                    : "text-black"
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
          <div>
            <h2 className="text-4xl font-secondary mb-4">{title}</h2>
            <hr className="border-t border-primary w-14 mb-6" />
            <p className="text-gray-700 leading-relaxed max-w-md text-lg font-primary">{desc}</p>
          </div>
        </div>

        {/* Right Section - Image with blue frame */}
        <div className="relative w-full flex justify-center items-center">
        

          {/* Image */}
          <div className="relative">
            <Image
              src={img}
              alt={title}
              className="w-[420px] h-[420px] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
    <div className="w-full bg-[#F9F9F9] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-8xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-secondary text-black mb-4">
          Lorem ipsum dolor sit amet
        </h2>
         <div className="w-48 h-[1px] bg-primary mb-5" />

        {/* Paragraph */}
        <p className="text-gray-600 leading-relaxed font-primary text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </>
 
  );
}
