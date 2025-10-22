// components/Feature.jsx
"use client";
import React from "react";
import Image from "next/image";
import featuredbanner from "@/public/assets/featurted_image.png";

const Feature = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById("target-section");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="relative flex items-center justify-center text-white overflow-hidden"
      id="target-section"
    >
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-4 px-4 gap-8">
        {/* Left Section */}
        <div className="flex-1 p-8 rounded-lg overflow-hidden">
          <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
            <Image
              src={featuredbanner}
              alt="Vels Featured Banner Image"
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Right Section - Vertically Centered */}
        <div className="flex-1 flex flex-col justify-center p-8 bg-black-50 rounded-lg">
          <div>
            <h2 className="text-3xl font-secondary font-semibold text-black mb-2">
              Our Legacy
            </h2>
            <span className="block w-24 h-px bg-primary mt-5 mb-2" aria-hidden />
            <p className="text-gray-700 font-primary leading-loose text-lg">
              Alongside our film city,{" "}
              <span className="font-semibold underline text-primary font-primary text-lg">
                Vels Trade & Convention Centre
              </span>{" "}
              serves as a versatile venue for exhibitions, conferences, and
              cultural events, attracting business and creative communities
              alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
