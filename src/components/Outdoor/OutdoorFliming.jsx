"use client";
import Image from "next/image";

export default function OutdoorFliming() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-secondary text-gray-900 mb-2">
           Limitless Outdoor Filming Arenas
          </h2>
          <div className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"></div>

            <p className="text-gray-600 text-md font-primary md:text-md leading-relaxed mb-8">
           Discover spaces where imagination meets scale. Our expansive outdoor filming zones provide vast, versatile locations designed for cinematic brilliance, ideal for grand sets, open-air productions, and immersive storytelling. From timeless heritage landscapes to contemporary cityscapes, every setting can be customized to match your creative vision.
          </p>

          <h3 className="text-2xl md:text-4xl font-primary  mt-10 text-gray-900 leading-snug mb-6">
          Grandeur. Access. Excellence. 
          </h3>

          <p className="text-gray-600 text-md font-primary md:text-md leading-relaxed mb-8">
           As a pan-Indian production hub, our campus welcomes filmmakers from Malayalam, Kannada, Telugu, and Bollywood industries, bringing diverse narratives to life under one sky. 
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
