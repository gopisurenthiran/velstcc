"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* === Icons === */
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

const ChevronDown = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Navbar() {
  const [isMegaOpen, setIsMegaOpen] = useState(false); // desktop only
  const [hoveredItem, setHoveredItem] = useState("theatre"); // desktop only
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // right quick links
  const [scrolled, setScrolled] = useState(false);

  // MOBILE: dropdown toggle for sections
  const [sectionsOpen, setSectionsOpen] = useState(false);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isDrawerOpen) return;
    const handleClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
        setIsDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isDrawerOpen]);

  useEffect(() => {
    if (!isMegaOpen) return;
    const handleClick = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target)) setIsMegaOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMegaOpen]);

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-all ${scrolled ? "shadow-md" : ""}`}>
      <div className="max-w-8xl mx-auto relative flex items-center justify-center py-4 px-6">
        {/* === Desktop Nav (unchanged) === */}
        <nav className="hidden md:flex justify-between w-full max-w-8xl text-[16px] font-primary text-black/70 text-center">
          {navItems.map((item, i) =>
            item.hasSubmenu ? (
              <button key={i} onClick={() => setIsMegaOpen((v) => !v)} aria-expanded={isMegaOpen} className="flex-1 hover:text-[#2A1C79] transition-colors">
                {item.label}
              </button>
            ) : (
              <Link key={i} href={item.href} className="flex-1 hover:text-[#2A1C79] transition-colors" onClick={() => setIsMegaOpen(false)}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* === MOBILE top bar (logo center, hamburger right) === */}
        <div className="flex md:hidden w-full items-center justify-between">
          {/* no back arrow at all */}
          <div className="w-9 h-9" />
          <div className="text-sm font-semibold text-[#2A1C79] select-none">VELS</div>
          <button
            ref={buttonRef}
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open Quick Links Drawer"
            className="flex items-center justify-center w-9 h-9 hover:bg-black/5 rounded-full transition"
          >
            <MenuIcon className="text-[#2A1C79]" />
          </button>
        </div>
      </div>
{/* === DESKTOP hamburger (opens Quick Links drawer) === */}
{!isDrawerOpen && (
  <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 z-40">
    <button
      ref={buttonRef}
      onClick={() => setIsDrawerOpen(true)}
      aria-label="Open Quick Links"
      aria-expanded={false}
      className="flex items-center justify-center w-9 h-9 hover:bg-black/5 rounded-full transition"
    >
      <MenuIcon className="text-[#2A1C79]" />
    </button>
  </div>
)}



      {/* ===== MOBILE ONLY CONTENT ===== */}
      <div className="md:hidden px-6 pb-6">
        {/* Title + chevron (dropdown toggle) */}
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-semibold text-black mt-2 mb-3">Discover your world</h2>
          <button
            aria-label="Toggle sections"
            aria-expanded={sectionsOpen}
            onClick={() => setSectionsOpen((v) => !v)}
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-black/5 transition"
          >
            <ChevronDown className={`transition-transform ${sectionsOpen ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* When closed: show root list */}
        {!sectionsOpen && (
          <nav className="space-y-3">
            <Link href="/theatre" className="block text-[16px] font-semibold text-black">
              Vel’s Theatre
            </Link>

            {/* clicking this could also open sections if you prefer */}
            <button onClick={() => setSectionsOpen(true)} className="block text-left text-[16px] font-semibold text-black">
              Vel’s Film City
            </button>

            <div className="ml-3 mt-1 space-y-2">
              <Link href="/indoor" className="block text-[15px] text-black/70">
                Vel’s Film City - Indoor
              </Link>
              <Link href="/outdoor" className="block text-[15px] text-black/70">
                Vel’s Film City - Outdoor
              </Link>
            </div>
          </nav>
        )}

        {/* When open: show the sections list (dropdown) */}
        {sectionsOpen && (
          <div className="space-y-3">
            <Link href="#crafted" className="block text-[15px] text-black/80">
              Designed For Every Occasion
            </Link>
            <Link href="#talk" className="block text-[15px] text-black/80">
              Let’s Talk About Your Events
            </Link>
            <Link href="#getting" className="block text-[15px] text-black/80">
              Getting to VELS
            </Link>
            <Link href="#events" className="block text-[15px] text-black/80">
              Event Spotlight
            </Link>
          </div>
        )}
      </div>

      {/* === Right Drawer Quick Links (hamburger) === */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[380px] bg-[#F4F5FA] shadow-2xl z-50 border-l border-black/10 transform transition-transform duration-300 ease-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={drawerRef}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10">
          <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
          <button onClick={() => setIsDrawerOpen(false)} aria-label="Close drawer" className="w-9 h-9 flex items-center justify-center hover:bg-black/5 rounded-full">
            <CloseIcon />
          </button>
        </div>
        <div className="p-6 space-y-5">
          {quickItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsDrawerOpen(false)} className="block text-lg text-gray-800 hover:text-[#2A1C79] transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Drawer overlay */}
      {isDrawerOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setIsDrawerOpen(false)} />}
    </header>
  );
}
