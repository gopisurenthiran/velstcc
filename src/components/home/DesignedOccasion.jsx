"use client";
import React, { useState, useEffect } from 'react'; // 👈 Import useEffect
import Image from 'next/image';

const tabData = [
    // ... (Paste the tabData array defined above here) ...
    {
        id: 'weddings',
        title: 'Weddings & Receptions',
        imageSrc: '/images/wedding.png', // Placeholder path
        content: "From intimate ceremonies to grand celebrations, our venue transforms into the perfect setting for unforgettable memories. Expect décor, premium hospitality, and seamless arrangements for your special day.",
        stats: [
            { value: '6', label: 'Grand Halls' },
            { value: '30,000 sq ft', label: 'Banquet Space',iconSrc: '/images/icons/space-icon.svg' },
            { value: '8000+', label: 'Seating Capacity' },
        ]
    },
    {
        id: 'trade',
        title: 'Trade Fairs & Exhibitions',
        imageSrc: '/images/trade-fair.jpg', // Placeholder path
        content: "Host regional and international trade shows with ease. Our expansive, pillar-free space is designed for high foot traffic and massive installations, offering full logistics support and custom booth arrangements.",
        stats: [
            { value: '3.5 L sq ft', label: 'Exhibition Space' },
            { value: '50 ft', label: 'Ceiling Height' },
            { value: '6000+', label: 'Parking' },
        ]
    },
    // Add two more placeholder tabs for completeness
    { id: 'corporate', title: 'Corporate Conferences & Expos', imageSrc: '/images/corporate.jpg', content: 'Dedicated spaces for large-scale corporate events and product launches...', stats: [] },
    { id: 'public', title: 'Public Gatherings', imageSrc: '/images/public-gathering.jpg', content: 'Ideal for political rallies, concerts, and community events with massive capacity...', stats: [] },
];


const DesignedOccasion = () => {

    const [activeTab, setActiveTab] = useState(tabData[0].id);
    const activeContent = tabData.find(tab => tab.id === activeTab);

    return (

        <section className="py-16 md:py-14 bg-[#f5f5f5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Designed For Every Occasion
                </h2>

                {/* 1. Tab Navigation */}
                <div className="flex flex-wrap justify-center border-b border-gray-200 mb-12">
                    {tabData.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                px-4 py-3 text-lg  font-medium transition-colors duration-300
                ${activeTab === tab.id
                                    ? 'border-b-4 border-black text-black' // Active state
                                    : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300' // Inactive state
                                }
            `}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* 2. Tab Content Area (Visible part of the active tab) */}
                {activeContent && (
                    <div className="grid grid-cols-1 bg-white lg:grid-cols-2 gap-10">

                        {/* Left Column: Image */}
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src={activeContent.imageSrc}
                                alt={activeContent.title}
                                fill={true}
                                className="object-cover"
                            />
                        </div>

                        {/* Right Column: Text Content and Stats */}
                        <div className="flex flex-col justify-center">
                            <div>
                                <h3 className="text-3xl font-baskervville  font-bold mb-4">{activeContent.title}</h3>
                                <p className="text-gray-600 font-founders   leading-relaxed mb-6">
                                    {activeContent.content}
                                </p>



                                {/* Embedded Stats Grid (Small Version) */}
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    {activeContent.stats.map((stat, index) => (
                                        <div key={index} className="flex flex-col items-start">

                                            {/* 1. Metric Value (remains the same) */}
                                            <div className="text-2xl font-founders font-bold text-black">
                                                {stat.value}
                                            </div>

                                            {/* 2. Icon and Label Container (New Flexbox alignment) */}
      <div className="flex items-center space-x-1 mt-1"> 

                                                {/* 🚀 IMAGE/ICON SLOT */}
                                                {/* You must ensure your stat object has a property like stat.iconSrc */}
                                                {/* If you are using local PNG/JPG files: */}
                                                {stat.iconSrc && (
                                                    <div className="relative w-3 h-3">
                                                        <Image
                                                            src={stat.iconSrc}
                                                            alt={stat.label}
                                                            fill={true}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                )}

                                                {/* 🚀 LABEL */}
                                                <p className="text-xs font-founders text-gray-500">
                                                    {stat.label}
                                                </p>

                                            </div>
                                            {/* End of Icon and Label Container */}

                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-4">
                                <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition">
                                    KNOW MORE
                                </button>
                                <button className="border border-black text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                                    DOWNLOAD FACT SHEET
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* VIEW ALL Button (positioned below the content area) */}
                <div className="text-center mt-12">
                    <button className="bg-transparent border border-gray-400 text-gray-800 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition">
                        VIEW ALL
                    </button>
                </div>

            </div>
        </section>

    );

};

export default DesignedOccasion;

