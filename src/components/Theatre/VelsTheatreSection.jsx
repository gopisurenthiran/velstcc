"use client";
import Image from "next/image";

export default function VelsTheatreSection() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-secondary text-gray-900 mb-2">
            Vels Theatres
          </h2>
          <div className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"></div>

          <h3 className="text-2xl md:text-4xl font-primary  mt-10 text-gray-900 leading-snug mb-6">
            BiggerScreen.<span className="text-gray-800">BiggerSound.</span>{" "}
            Bigger Experience.
          </h3>

          <p className="text-gray-600 text-md font-primary md:text-md leading-relaxed mb-8">
            Vels Theatres redefines movie magic with a full-height screen from
            floor to roof, delivering breathtaking visuals through 4K ultra
            high-definition projection and Dolby Atmos surround sound. Every
            scene feels larger than life; every note resonates around you.
          </p>

          <button className="bg-[#2D3091] font-primary text-white text-md font-medium px-6 py-3  shadow transition-all">
            BOOK TICKETS
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
         
          <Image
            src="/assets/featurted_image.png"
            alt="Vels Theatres"
            width={600}
            height={400}
            className="relative z-10 w-full h-auto rounded-none"
          />
        </div>
      </div>
    </section>
  );
}
