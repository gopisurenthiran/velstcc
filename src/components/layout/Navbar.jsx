"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* === Icons === */
const MenuIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="M6 6 18 18" />
  </svg>
);

export default function Navbar() {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("theatre");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const megaRef = useRef(null);
  const drawerRef = useRef(null);
  const buttonRef = useRef(null);

  const navItems = [
    { href: "#crafted", label: "Crafted to Host Every Milestone" },
    { href: "#talk", label: "Let’s Talk About Your Events" },
    { href: "/discover", label: "Discover Your World", hasSubmenu: true },
    { href: "#getting", label: "Getting to VELS" },
    { href: "#events", label: "Plan Your Big Day" },
  ];

  const quickItems = [
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  const discoverItems = [
    {
      id: "theatre",
      label: "Vels Theatre",
      desc: "Stage-ready venue for premieres, showcases, and talks.",
      href: "/theatre",
      image: "/assets/theatre.jpg",
    },
    {
      id: "indoor",
      label: "Vels Film City Indoor",
      desc: "Perfectly crafted indoor film sets.",
      href: "/indoor",
      image: "/assets/indoor.jpg",
    },
    {
      id: "outdoor",
      label: "Vels Film City Outdoor",
      desc: "Expansive outdoor sets for every scene.",
      href: "/outdoor",
      image: "/assets/outdoor.jpg",
    },
  ];

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Drawer outside click
  useEffect(() => {
    if (!isDrawerOpen) return;
    const handleClick = (e) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isDrawerOpen]);

  // Mega menu outside click
  useEffect(() => {
    if (!isMegaOpen) return;
    const handleClick = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setIsMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMegaOpen]);

  // Close mega menu on link click
  const handleMegaLinkClick = () => setIsMegaOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-8xl mx-auto relative flex items-center justify-center py-4 px-6">
        {/* === Desktop Nav === */}
        <nav className="hidden md:flex justify-between w-full max-w-8xl text-[16px] font-primary text-black/70 text-center">
          {navItems.map((item, i) =>
            item.hasSubmenu ? (
              <button
                key={i}
                onClick={() => setIsMegaOpen((v) => !v)}
                aria-expanded={isMegaOpen}
                className="flex-1 hover:text-[#2A1C79] transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={i}
                href={item.href}
                className="flex-1 hover:text-[#2A1C79] transition-colors"
                onClick={() => setIsMegaOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* === Hamburger (only menu icon when closed) === */}
        {!isDrawerOpen && (
          <div className="absolute right-6 top-1/2 -translate-y-1/2 z-[60]">
            <button
              ref={buttonRef}
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open Quick Links Drawer"
              className="flex items-center justify-center w-9 h-9 hover:bg-black/5 rounded-full transition"
            >
              <MenuIcon className="text-[#2A1C79]" />
            </button>
          </div>
        )}
      </div>
{/* === Discover Mega Menu === */}
{isMegaOpen && (
  <div
    ref={megaRef}
    className="absolute left-0 right-0 top-full z-40 bg-white border-t border-black/10 shadow-lg"
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-8 py-10 items-start">

      {/* === Left Column: Nested Items === */}
      <div className="space-y-4">
        {/* Vel’s Theatre */}
        <div>
          <button
            onMouseEnter={() => setHoveredItem("theatre")}
            onClick={() => {
              handleMegaLinkClick();
              window.location.href = "/theatre";
            }}
            className={`block  text-left font-primary text-lg ${
              hoveredItem === "theatre"
                ? "text-black font-medium"
                : "text-black/70 hover:text-[#2A1C79]"
            }`}
          >
            Vel’s Theatre
          </button>
        </div>

        {/* Vel’s Film City */}
        <div>
          <h4 className=" text-black font-primary text-lg font-medium  mb-3">Vel’s Film City</h4>
          <div className="ml-3 space-y-2">
            <button
              onMouseEnter={() => setHoveredItem("indoor")}
              onClick={() => {
                handleMegaLinkClick();
                window.location.href = "/indoor";
              }}
              className={`block text-left font-primary font-regular text-lg ${
                hoveredItem === "indoor"
                  ? "text-[#A3A3A3] "
                  : "text-black/70 hover:text-[#2A1C79]"
              }`}
            >
              Vel’s Film City – Indoor
            </button>

            <button
              onMouseEnter={() => setHoveredItem("outdoor")}
              onClick={() => {
                handleMegaLinkClick();
                window.location.href = "/outdoor";
              }}
              className={`block text-left text-lg font-primary font-regular ${
                hoveredItem === "outdoor"
                  ? "text-[#A3A3A3] "
                  : "text-black/70 hover:text-[#2A1C79]"
              }`}
            >
              Vel’s Film City – Outdoor
            </button>
          </div>
        </div>
      </div>

      {/* === Center Column: Image === */}
      <div className="relative h-[280px] md:h-[320px] w-full overflow-hidden rounded-lg shadow-md">
        {discoverItems.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.label}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hoveredItem === item.id
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          />
        ))}
      </div>

      {/* === Right Column: Description (no Learn more button) === */}
      <div className="space-y-3">
        {discoverItems.map((item) => (
          <div
            key={item.id}
            className={`transition-all duration-500 ${
              hoveredItem === item.id
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 hidden"
            }`}
          >
            <h3 className="text-2xl text-black font-secondary font-medium">
              {item.label}
            </h3>
            <p className="text-black/70 mt-4 leading-relaxed font-primary font-light text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)}



      {/* === Right Drawer Quick Links === */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[380px] bg-[#F4F5FA] shadow-2xl z-50 border-l border-black/10 transform transition-transform duration-300 ease-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={drawerRef}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10">
          <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
          <button
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close drawer"
            className="w-9 h-9 flex items-center justify-center hover:bg-black/5 rounded-full"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Links */}
        <div className="p-6 space-y-5">
          {quickItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setIsDrawerOpen(false)}
              className="block text-lg text-gray-800 hover:text-[#2A1C79] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
    </header>
  );
}
