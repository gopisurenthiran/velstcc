"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const drawerRef = useRef(null);
  const buttonRef = useRef(null);

  const navItems = [
    { href: "/designed", label: "Designed For Every Occasion" },
    { href: "/events", label: "Let’s Talk About Your Events" },
    { href: "/discover", label: "Discover Your World" },
    { href: "/getting-to-vels", label: "Getting to VELS" },
    { href: "/plan-big-day", label: "Plan Your Big Day" },
  ];

  const quickItems = [
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  // Track md breakpoint (Tailwind md = 768px)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767.98px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Header shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll only when mobile drawer is open. Close on Esc / outside.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    const onClickOutside = (e) => {
      if (!isOpen) return;

      // If mobile drawer open: close on overlay click
      if (isMobile) {
        const overlay = document.getElementById("drawer-overlay");
        if (overlay && overlay.contains(e.target)) closeMenu();
        if (drawerRef.current && !drawerRef.current.contains(e.target) && !(buttonRef.current && buttonRef.current.contains(e.target))) {
          // clicks outside drawer but not overlay (rare) also close
          closeMenu();
        }
      } else {
        // Desktop dropdown: close when clicking outside button+dropdown
        const dropdown = document.getElementById("desktop-quick-dropdown");
        const clickedInsideButton = buttonRef.current && buttonRef.current.contains(e.target);
        const clickedInsideDropdown = dropdown && dropdown.contains(e.target);
        if (!clickedInsideButton && !clickedInsideDropdown) closeMenu();
      }
    };

    if (isOpen) {
      if (isMobile) document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", onKey);
      document.addEventListener("mousedown", onClickOutside);
    } else {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isOpen, isMobile]);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full",
        "bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur",
        scrolled ? "shadow-sm border-b border-black/5" : "",
      ].join(" ")}
    >
     <div className="max-w-8xl mx-auto relative flex items-center justify-center py-4 px-6">
  {/* Centered desktop nav */}
  <nav className="hidden md:flex justify-between w-full max-w-5xl text-sm md:text-[15px] font-primary text-black/70 text-center">
    {navItems.map((item, i) => (
      <Link
        key={i}
        href={item.href}
        className="flex-1 hover:text-[#2A1C79] transition-colors duration-200"
      >
        {item.label}
      </Link>
    ))}
  </nav>

  {/* Hamburger */}
  <div className="absolute right-6 top-1/2 -translate-y-1/2 z-[60]">
    <button
      ref={buttonRef}
      onClick={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-[#2A1C79]/5 transition"
    >
      {isOpen ? (
        <CloseIcon className="text-[#2A1C79]" />
      ) : (
        <MenuIcon className="text-[#2A1C79]" />
      )}
    </button>

    {/* Desktop Quick Dropdown */}
    {!isMobile && isOpen && (
      <nav
        id="desktop-quick-dropdown"
        role="menu"
        className="absolute right-0 mt-3 min-w-[200px] rounded-md border border-black/10 bg-white shadow-lg overflow-hidden"
      >
        <ul className="py-1 text-sm text-black/80">
          {quickItems.map((q, i) => (
            <li key={i}>
              <Link
                href={q.href}
                className="block px-4 py-2 hover:bg-black/5"
                role="menuitem"
                onClick={closeMenu}
              >
                {q.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}
  </div>
</div>


      {/* MOBILE: overlay + right-side drawer */}
      {isMobile && isOpen && (
        <>
          <div id="drawer-overlay" aria-hidden="true" className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px]" />
          <aside
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className={[
              "fixed top-0 right-0 z-50 h-dvh w-[86%] max-w-[360px]",
              "bg-white shadow-xl border-l border-black/10",
              "transition-transform duration-300 ease-out translate-x-0",
              "flex flex-col",
            ].join(" ")}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/10">
              <span className="text-sm font-medium text-black/70">Menu</span>
              <button onClick={closeMenu} aria-label="Close menu" className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-black/5">
                <CloseIcon />
              </button>
            </div>

            <div className="p-3 space-y-6 overflow-y-auto">
              {/* Full site nav */}
              <nav>
                <h3 className="px-4 pb-2 text-xs uppercase tracking-wide text-black/50">Navigation</h3>
                <ul className="space-y-1 text-[15px] font-foundersgrotesk">
                  {navItems.map((item, i) => (
                    <li key={i}>
                      <Link href={item.href} onClick={closeMenu} className="block px-4 py-3 rounded-md hover:bg-black/5">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Quick links */}
              <nav>
                <h3 className="px-4 pb-2 text-xs uppercase tracking-wide text-black/50">Quick Links</h3>
                <ul className="space-y-1 text-[15px] font-foundersgrotesk">
                  {quickItems.map((q, i) => (
                    <li key={i}>
                      <Link href={q.href} onClick={closeMenu} className="block px-4 py-3 rounded-md hover:bg-black/5">
                        {q.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="mt-auto border-t border-black/10 p-4 text-xs text-black/60">
              <p>© {new Date().getFullYear()} VELS. All rights reserved.</p>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
