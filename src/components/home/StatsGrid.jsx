// components/StatsGrid.jsx
import React from 'react';
import Image from 'next/image'; // 👈 IMPORT THE IMAGE COMPONENT

// Assuming these paths are correct and lead to files in your /public directory
import icon1 from "@/public/images/icons/Block.png";
import icon2 from "@/public/images/icons/Line 469.png";
import icon3 from "@/public/images/icons/Map pin.png";
import icon4 from "@/public/images/icons/Capa_1.png";


// Data structure for the statistics
const statsData = [
  // 🚀 FIX 1: Pass the imported image object DIRECTLY, not wrapped in extra braces
  { value: '4', label: 'Number of Blocks', icon: icon1 },
  { value: '3.5 L sq. ft.', label: 'Total Space', icon: icon2 },
  { value: '50 ft', label: 'Ceiling Height', icon: icon3 },
  { value: '6000+', label: 'Car Parkings', icon: icon4 },
];

// Reusable component for a single stat item
const StatItem = ({ value, label, icon }) => (
  <div className="flex flex-col items-center text-center p-4">
    
    {/* 🚀 FIX 2: Render the image using the Next.js <Image> component */}
    <div className="mb-2">
      <Image
        src={icon} // The 'icon' prop is now the imported image object
        alt={label} // Use the label for accessibility
      
        // className="w-10 h-10" // Optional: You can also use Tailwind for size
        priority // Icons are important, load them eagerly
      />
    </div>
    
    {/* Metric Value */}
    <div className="text-3xl md:text-4xl font-bold text-black mb-1">
      {value}
    </div>
    
    {/* Label */}
    <p className="text-sm text-gray-600 font-medium whitespace-nowrap">
      {label}
    </p>
  </div>
);

const StatsGrid = () => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x divide-gray-200">
          {statsData.map((stat, index) => (
            <StatItem 
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
        
        {/* Optional: Add a subtle separator line below the stats */}
      </div>
    </section>
  );
};

export default StatsGrid;