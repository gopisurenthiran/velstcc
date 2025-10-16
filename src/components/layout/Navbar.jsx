"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

/* Icons */
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const CloseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="M6 6 18 18" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/designed", label: "Designed For Every Occasion" },
    { href: "/events", label: "Let’s Talk About Your Events" },
    { href: "/discover", label: "Discover Your World" },
    { href: "/getting-to-vels", label: "Getting to VELS" },
    { href: "/plan-big-day", label: "Plan Your Big Day" },
  ];

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full",
        "bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur",
        scrolled ? "shadow-sm border-b border-black/5" : "",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto flex item-auto justify-center relative py-4 px-6">
        {/* centered nav */}
        <nav className="flex flex-wrap justify-center text-sm md:text-[15px] font-foundersgrotesk text-black/70 gap-12 text-center">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="hover:text-[#2A1C79] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* right hamburger */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="absolute right-6 flex flex-col justify-center items-center gap-[4px] w-8 h-8 rounded-md hover:bg-[#2A1C79]/5 transition"
        >
          {isOpen ? <CloseIcon className="text-[#2A1C79]" /> : <MenuIcon className="text-[#2A1C79]" />}
        </button>
      </div>

      {/* mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="flex flex-col items-center space-y-2 py-3">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-black/70 hover:text-[#2A1C79] text-sm transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
