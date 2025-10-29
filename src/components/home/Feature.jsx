// components/Hero.jsx
"use client";
import React from 'react';
import Link from 'next/link';
import featuredbanner from "@/public/assets/featurted_image.png";
import Image from 'next/image'; // 👈 Import Next.js Image component
import { ArrowDown } from 'lucide-react';
const Feature = () => {

  const handleClick = (e) => {
    e.preventDefault();
    // 🛑 IMPORTANT: Replace 'target-section' with the actual ID of the next section below the hero
    const targetElement = document.getElementById('target-section');
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative flex items-center justify-center   text-white overflow-hidden" id="target-section">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-4 px-4 gap-8">
        
        
       <div className="flex-1 p-8  rounded-lg overflow-hidden">
 
    
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
                <Image
            src={featuredbanner}
            alt="Vels Featured Banner Image"
          
            // 🚀 FIX: Changed object-cover to object-contain
            className="object-contain rounded-lg" 
            sizes="(max-width: 768px) 100vw, 50vw" 
        />
    </div>
</div>

        {/* Right Section: Uses flex-1 to take equal space */}
        <div className="flex-1 p-8 bg-black-50 rounded-lg">
            <h2 className="text-3xl font-secondary  mt-4  font-semibold text-black mb-2">The Landmark of Unmatched 
<br></br>Scale & Excellence</h2>
            <p className="text-gray-700 font-founders leading-loose	">
               Welcome to Vels Trade & Convention Centre – South India’s only 3.5 lakh sq. ft. private trade hub. A marvel of space, design, and functionality, proudly standing as Tamil Nadu’s first privately owned trade centre, redefining possibilities for events of every scale.
            </p>
              <h2 className="text-3xl font-baskervville mt-2  text-black  mb-2">Bigger. Better. Beyond Compare.</h2>
              <p className="text-gray-700 font-founders leading-loose	mt-4">
While the Chennai Trade & Convention Centre offers 95,000 sq. ft.,Vels Trade & Convention Centre boasts nearly 4X the space – giving you the freedom to host anything from intimate gatherings to grand-scale exhibitions.            </p>
            
           <p className="text-gray-700 font-founders leading-loose mt-4	">VELS - where scale meets sophistication.</p> 
        
        </div>
    </div>
    </section>
  );
};

export default Feature;