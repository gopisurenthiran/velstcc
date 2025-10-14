"use client";
import React, { useState } from 'react'; // FIX: Removed 'use'
import Link from 'next/link';


// --- ICON COMPONENTS (Using simple SVG placeholders) ---

// Menu Icon (Hamburger)
const MenuIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12"></line>
        <line x1="4" x2="20" y1="6" y2="6"></line>
        <line x1="4" x2="20" y1="18" y2="18"></line>
    </svg>
);

// Close Icon (X)
const CloseIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
    </svg>
);

// --- MAIN NAV COMPONENT ---

const Navbar = () => {
    // 1. State for controlling the mobile menu visibility
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Your navigation links data
    const navItems = [
        { href: "/designed", label: "Designed For Every Occasion" },
        { href: "/events", label: "Let’s Talk About Your Events" },
        { href: "/discover", label: "Discover Your World" },
        { href: "/getting-to-vels", label: "Getting to VELS" },
        { href: "/plan-big-day", label: "Plan Your Big Day" },
    ];

    // Base classes for consistent styling
    const linkBaseClasses = "py-2 text-[#808080] font-medium transition-colors duration-200 hover:text-black";
    const baseNavClasses = "mt-4 font-foundersgrotesk  text-sm lg:text-base";

    return (
        <header className="bg-white sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center h-20">
                    
                    {/* Brand/Logo (Always Visible) */}
                    
                    {/* DESKTOP NAVIGATION LINKS (Hidden on mobile/tablet) */}
                    <nav className={`hidden md:flex flex-wrap justify-center font-founders  gap-x-18 ${baseNavClasses}`}>
                        {navItems.map((item, index) => (
                            // Using Next.js Link for navigation
                            <Link key={index} href={item.href} className={linkBaseClasses}>
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* HAMBURGER TOGGLE BUTTON (Visible ONLY on Mobile/Tablet) */}
                    <button 
                        className="md:hidden p-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {/* Show Close Icon if open, otherwise show Menu Icon */}
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* MOBILE / TABLET MENU CONTAINER (Toggles on click) */}
            <div 
                id="mobile-menu"
                // Toggles visibility: 'block' if open, 'hidden' if closed
                className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-100`}
            >
                <div className={`flex flex-col space-y-1 pb-3 pt-2 px-4 ${baseNavClasses}`}>
                    {navItems.map((item, index) => (
                        <Link 
                            key={index} 
                            href={item.href}
                            // Close menu after clicking a link
                            onClick={toggleMenu} 
                            className={`block px-2 ${linkBaseClasses}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;