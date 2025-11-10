"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
  const [isMobile, setIsMobile] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("theatre");

  const drawerRef = useRef(null);
  const buttonRef = useRef(null);
  const megaRef = useRef(null);
  const discoverBtnRef = useRef(null);

  const navItems = [
    { href: "/designed", label: "Designed for Every Occasion" },
    { href: "/events", label: "Let’s Talk About Your Events" },
    { href: "/discover", label: "Discover Your World", hasSubmenu: true },
    { href: "/getting-to-vels", label: "Getting to VELS" },
    { href: "/plan-big-day", label: "Plan Your Big Day" },
  ];

  const quickItems = [
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  const discoverItems = [
    {
      id: "theatre",
      label: "VELS Theatre",
      desc: "Stage-ready venue for premieres, showcases, and talks.",
      href: "/theatre",
      image: "/assets/theatre.jpg",
    },
    {
      id: "filmcity",
      label: "VELS Film City",
      desc: "Explore Indoor and Outdoor film sets for every scene.",
      href: "#",
      children: [
        {
          id: "indoor",
          label: "VELS Film City Indoor",
          href: "/indoor",
          image: "/assets/indoor.jpg",
        },
        {
          id: "outdoor",
          label: "VELS Film City Outdoor",
          href: "/outdoor",
          image: "/assets/outdoor.jpg",
        },
      ],
    },
  ];

  const toggleMenu = () => {
    setIsOpen((v) => !v);
    setIsMegaOpen(false);
  };
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767.98px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMegaOpen) return;
    const handleClick = (e) => {
      if (megaRef.current && !megaRef.current.contains(e.target) && !discoverBtnRef.current.contains(e.target)) {
        setIsMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMegaOpen]);

  return (
    <header className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur ${scrolled ? "shadow-sm border-b border-black/5" : ""}`}>
      <div className="max-w-8xl mx-auto relative flex items-center justify-center py-4 px-6">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-between w-full text-[16px] font-primary text-black/70 text-center">
          {navItems.map((item, i) =>
            item.hasSubmenu ? (
              <button
                key={i}
                ref={discoverBtnRef}
                onClick={() => setIsMegaOpen((v) => !v)}
                className="flex-1 hover:text-[#2A1C79] transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <Link key={i} href={item.href} className="flex-1 hover:text-[#2A1C79] transition-colors">
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Hamburger Button */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-[60]">
          {!isOpen && (
            <button ref={buttonRef} onClick={toggleMenu} className="flex items-center justify-center w-9 h-9">
              <MenuIcon className="text-[#2A1C79]" />
            </button>
          )}
        </div>
      </div>

      {/* Desktop MegaMenu */}
      {!isMobile && isMegaOpen && (
        <div ref={megaRef} className="absolute left-0 right-0 top-full z-40 bg-white border-t border-black/10 shadow-md">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
            {/* Left column: Main items */}
            <div className="p-8 space-y-6 border-r border-black/10">
              {discoverItems.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  className={`cursor-pointer ${hoveredItem === item.id ? "text-[#2A1C79]" : ""}`}
                >
                  <Link href={item.href} className="text-lg font-semibold hover:underline" onClick={() => setIsMegaOpen(false)}>
                    {item.label}
                  </Link>
                  <p className="text-sm text-black/70 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Middle column: Always visible subitems */}
            <div className="p-8 border-r border-black/10">
              <ul className="space-y-3">
                {discoverItems[1].children.map((child) => (
                  <li
                    key={child.id}
                    onMouseEnter={() => setHoveredItem(child.id)}
                    className={`cursor-pointer ${hoveredItem === child.id ? "text-[#2A1C79]" : "text-black/80"}`}
                  >
                    <Link
                      href={child.href}
                      className="block text-[16px] hover:text-[#2A1C79]"
                      onClick={() => setIsMegaOpen(false)}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column: Dynamic image */}
            <div className="relative h-[420px] w-full overflow-hidden">
              {discoverItems
                .flatMap((i) => [i, ...(i.children || [])])
                .map((item) => (
                  <Image
                    key={item.id}
                    src={item.image}
                    alt={item.label}
                    fill
                    className={`object-cover transition-all duration-500 ${
                      hoveredItem === item.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
