"use client";
import Image from "next/image";

export default function IndoorFliming() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-secondary text-gray-900 mb-2">
          Where Vision Meets the Spotlight
          </h2>
          <div className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"></div>

            <p className="text-gray-600 text-md font-primary md:text-md leading-relaxed mb-8">
           Every frame begins here — in spaces where artistry and architecture converge. From epic sets to intimate scenes, Vels Film City’s indoor studios have powered India’s most iconic stories for over a decade.A favourite of filmmakers and creators, nearly 20% of major Indian productions have brought their visions to life within these walls. Engineered for precision, scale, and speed, our soundproofed, climate-controlled studios ensure nothing stands between imagination and execution. 
          </p>

          <h3 className="text-2xl md:text-4xl font-primary  mt-10 text-gray-900 leading-snug mb-6">
          Precision in Every Frame. Passion in Every Shot. 
          </h3>

          <p className="text-gray-600 text-md font-primary md:text-md leading-relaxed mb-8">
         Behind every flawless take is an ecosystem engineered for excellence. Our indoor spaces merge technology, talent, and timing to turn creative vision into cinematic mastery. 
          </p>

         
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
