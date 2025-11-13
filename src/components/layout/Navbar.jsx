"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

import velsLogo from "@/public/assets/vels-logo.png";

/* === Icons (JS, no types) === */
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

const ChevronDown = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // to show desktop hamburger only on "/"

  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("theatre");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sectionsOpen, setSectionsOpen] = useState(false);

  const megaRef = useRef(null);
  const drawerRef = useRef(null);
  const buttonRef = useRef(null);

  const navItems = [
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ'S" },
    { label: "Discover Your World", hasSubmenu: true },
    { href: "/contact", label: "Contact Us" },
  ];

  const quickItems = [
    { href: "#crafted", label: "Crafted to Host Every Milestone" },
    { href: "#talk", label: "Let’s Talk About Your Events" },
    { href: "#getting", label: "Getting to VELS" },
    { href: "#events", label: "Plan Your Big Day" },
  ];

  const discoverItems = [
    {
      id: "theatre",
      label: "Vel’s Theatre",
      desc: "Stage-ready venue for premieres, showcases, and talks.",
      href: "/theatre",
      image: "/assets/theare.webp",
    },
    {
      id: "indoor",
      label: "Vel’s Film City – Indoor",
      desc: "Perfectly crafted indoor film sets.",
      href: "/indoor",
      image: "/assets/filim.webp",
    },
    {
      id: "outdoor",
      label: "Vel’s Film City – Outdoor",
      desc: "Expansive outdoor sets for every scene.",
      href: "/outdoor",
      image: "/assets/trade.webp",
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close drawer on outside click
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

  // close desktop mega on outside click
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

  const handleMegaLinkClick = () => setIsMegaOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-8xl mx-auto relative flex items-center justify-center py-4 px-6">
        {/* === Desktop Nav – 4 equal columns, Discover centered === */}
        <nav className="hidden md:grid grid-cols-4 w-full max-w-7xl mx-auto text-[16px] font-primary text-black/70">
          {/* ABOUT */}
          <div className="flex justify-center">
            <Link href="/about" className="hover:text-[#2A1C79] transition-colors">
              About Us
            </Link>
          </div>

          {/* DISCOVER + arrow (normal weight) */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsMegaOpen((v) => !v)}
              aria-expanded={isMegaOpen}
              className="hover:text-[#2A1C79] transition-colors flex items-center gap-1 font-normal"
            >
              <span>Discover Your World</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isMegaOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* FAQ */}
          <div className="flex justify-center">
            <Link href="/faq" className="hover:text-[#2A1C79] transition-colors">
              FAQ&apos;S
            </Link>
          </div>

          {/* CONTACT */}
          <div className="flex justify-center">
            <Link href="/contact" className="hover:text-[#2A1C79] transition-colors">
              Contact Us
            </Link>
          </div>
        </nav>

        {/* === MOBILE top bar === */}
        <div className="flex md:hidden w-full items-center justify-between">
          {/* Left: hamburger that morphs to close */}
          <button
            ref={buttonRef}
            onClick={() => setIsDrawerOpen((v) => !v)}
            aria-label="Toggle Menu"
            aria-expanded={isDrawerOpen}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 transition"
          >
            <span className="relative block w-6 h-6">
              <MenuIcon
                className={`absolute inset-0 transition-all duration-200 ease-out ${
                  isDrawerOpen
                    ? "opacity-0 scale-75 rotate-90"
                    : "opacity-100 scale-100 rotate-0"
                }`}
              />
              <CloseIcon
                className={`absolute inset-0 transition-all duration-200 ease-out ${
                  isDrawerOpen
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-75 -rotate-90"
                }`}
              />
            </span>
          </button>

          {/* Center: logo text */}
          <div className="text-sm font-semibold text-[#2A1C79] select-none">
            VELS
          </div>

          {/* Right spacer */}
          <div className="w-9 h-9" />
        </div>
      </div>

      {/* === DESKTOP: Discover Mega Menu === */}
      {isMegaOpen && (
        <div
          ref={megaRef}
          className="absolute left-0 right-0 top-full z-40 bg-white border-t border-black/10 shadow-lg"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-8 py-10 items-start">
            {/* Left Column: links */}
            <div className="space-y-4">
              <div>
                <button
                  onMouseEnter={() => setHoveredItem("theatre")}
                  onClick={() => {
                    handleMegaLinkClick();
                    router.push("/theatre");
                  }}
                  className={`block text-left font-primary text-lg ${
                    hoveredItem === "theatre"
                      ? "text-black font-medium"
                      : "text-black/70 hover:text-[#2A1C79]"
                  }`}
                >
                  Vel’s Theatre
                </button>
              </div>

              <div>
                <h4 className="text-black font-primary text-lg font-medium mb-3">
                  Vel’s Film City
                </h4>
                <div className="ml-3 space-y-2">
                  <button
                    onMouseEnter={() => setHoveredItem("indoor")}
                    onClick={() => {
                      handleMegaLinkClick();
                      router.push("/indoor");
                    }}
                    className={`block text-left font-primary text-lg ${
                      hoveredItem === "indoor"
                        ? "text-[#A3A3A3]"
                        : "text-black/70 hover:text-[#2A1C79]"
                    }`}
                  >
                    Vel’s Film City – Indoor
                  </button>
                  <button
                    onMouseEnter={() => setHoveredItem("outdoor")}
                    onClick={() => {
                      handleMegaLinkClick();
                      router.push("/outdoor");
                    }}
                    className={`block text-left font-primary text-lg ${
                      hoveredItem === "outdoor"
                        ? "text-[#A3A3A3]"
                        : "text-black/70 hover:text-[#2A1C79]"
                    }`}
                  >
                    Vel’s Film City – Outdoor
                  </button>
                </div>
              </div>
            </div>

            {/* Center: image swap */}
            <div className="relative w-full shadow-md overflow-hidden">
              {discoverItems.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.label}
                  className={`w-full h-auto transition-all duration-500 ${
                    hoveredItem === item.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105 absolute inset-0"
                  }`}
                />
              ))}
            </div>

            {/* Right: description */}
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
                  <p className="text-black/70 mt-4 leading-relaxed font-primary font-light text-lg">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* === DESKTOP hamburger — ONLY on home page === */}
      {!isDrawerOpen && pathname === "/" && (
        <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 z-40">
          <button
            ref={buttonRef}
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open Menu"
            className="flex items-center justify-center w-9 h-9 hover:bg-black/5 rounded-full transition"
          >
            <MenuIcon className="text-[#2A1C79]" />
          </button>
        </div>
      )}

      {/* === Drawer (mobile + desktop quick links) === */}
      <div
        ref={drawerRef}
        className={`fixed top-0 h-full bg-[#F4F5FA] shadow-2xl z-50 transform transition-transform duration-300 ease-out border-black/10
          left-0 w-full border-r
          md:right-0 md:left-auto md:w-[380px] md:border-l
          ${
            isDrawerOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-full"
          }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 bg-white">
          <Link href="/" className="mb-3">
            <Image
              src={velsLogo}
              alt="VELS Logo"
              width={120}
              height={80}
              priority
              className="object-contain"
            />
          </Link>
          <button
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close drawer"
            className="w-9 h-9 flex items-center justify-center hover:bg-black/5 rounded-full"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Drawer content */}
        <div className="p-6 space-y-8 overflow-y-auto h-[calc(100%-64px)]">
          {/* MOBILE: full menu */}
          <div className="md:hidden space-y-8">
            {/* Main Menu */}
            <div>
              <h4 className="text-[18px] font-semibold text-black mb-3">
                Main Menu
              </h4>
              <nav className="space-y-3">
                {navItems
                  .filter((item) => !item.hasSubmenu)
                  .map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsDrawerOpen(false)}
                      className="block text-[16px] text-black/80"
                    >
                      {item.label}
                    </Link>
                  ))}
              </nav>
            </div>

            {/* Discover your world */}
            <div>
              <h4 className="text-[18px] font-semibold text-black mb-3">
                Discover your world
              </h4>

              <nav className="space-y-3 mb-3">
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    router.push("/theatre");
                  }}
                  className="block text-left text-[16px] font-semibold text-black"
                >
                  Vel’s Theatre
                </button>

                <button
                  onClick={() => setSectionsOpen((v) => !v)}
                  className="w-full text-left flex items-center justify-between text-[16px] font-semibold text-black"
                  aria-expanded={sectionsOpen}
                >
                  <span>Vel’s Film City</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      sectionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {sectionsOpen && (
                  <div className="ml-3 mt-1 space-y-2">
                    <button
                      onClick={() => {
                        setIsDrawerOpen(false);
                        router.push("/indoor");
                      }}
                      className="block text-left text-[15px] text-black/70"
                    >
                      Vel’s Film City - Indoor
                    </button>
                    <button
                      onClick={() => {
                        setIsDrawerOpen(false);
                        router.push("/outdoor");
                      }}
                      className="block text-left text-[15px] text-black/70"
                    >
                      Vel’s Film City - Outdoor
                    </button>
                  </div>
                )}
              </nav>
            </div>

            {/* Section anchors */}
            <div>
              <h4 className="text-[18px] font-semibold text-black mb-3">
                Explore Sections
              </h4>
              <div className="space-y-3">
                {quickItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className="block text-[16px] text-black/80"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP: only quick links in drawer */}
          <div className="hidden md:block">
            <div className="space-y-3">
              {quickItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsDrawerOpen(false)}
                  className="block text-lg text-black/80 font-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </header>
  );
}
