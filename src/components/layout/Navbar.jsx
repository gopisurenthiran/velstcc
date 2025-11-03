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
  const [isOpen, setIsOpen] = useState(false);             // drawer
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);     // desktop megamenu
  const [mobileDiscoverOpen, setMobileDiscoverOpen] = useState(false);
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

  // Megamenu content
  const theatre = { href: "/theatre", label: "VELS Theatre" };
  const filmCity = [
    { href: "indoor", label: "VELS Film City Indoor" },
    { href: "outdoor", label: "VELS Film City Outdoor" },
  ];

  const quickItems = [
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen((v) => !v);
    // ensure megamenu is closed when opening drawer
    setIsMegaOpen(false);
  };
  const closeMenu = () => setIsOpen(false);

  // Track md breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767.98px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Drawer: close + scroll lock
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    const onClickOutside = (e) => {
      if (!isOpen) return;
      const overlay = document.getElementById("drawer-overlay");
      const clickedOverlay = overlay && overlay.contains(e.target);
      const clickedDrawer = drawerRef.current && drawerRef.current.contains(e.target);
      const clickedButton = buttonRef.current && buttonRef.current.contains(e.target);
      if (clickedOverlay || (!clickedDrawer && !clickedButton)) closeMenu();
    };

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
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
  }, [isOpen]);

  // Desktop megamenu: outside click + esc
  useEffect(() => {
    if (!isMegaOpen) return;
    const onDocClick = (e) => {
      const insideMega = megaRef.current && megaRef.current.contains(e.target);
      const insideBtn  = discoverBtnRef.current && discoverBtnRef.current.contains(e.target);
      if (!insideMega && !insideBtn) setIsMegaOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setIsMegaOpen(false);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [isMegaOpen]);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full",
        "bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur",
        scrolled ? "shadow-sm border-b border-black/5" : "",
        "relative", // for absolute megamenu
      ].join(" ")}
    >
      <div className="max-w-8xl mx-auto relative flex items-center justify-center py-4 px-6">
        {/* Desktop Nav (Discover opens megamenu) */}
        <nav className="hidden md:flex justify-between w-full max-w-8xl text-sm md:text-[16px] font-primary text-black/70 text-center">
          {navItems.map((item, i) => {
            if (item.hasSubmenu) {
              return (
                <button
                  key={i}
                  ref={discoverBtnRef}
                  onClick={() => setIsMegaOpen((v) => !v)}
                  aria-expanded={isMegaOpen}
                  className="flex-1 hover:text-[#2A1C79] transition-colors duration-200"
                >
                  {item.label}
                </button>
              );
            }
            return (
              <Link
                key={i}
                href={item.href}
                className="flex-1 hover:text-[#2A1C79] transition-colors duration-200"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger button (hidden when drawer open) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-[60]">
          {!isOpen && (
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              aria-label="Open menu"
              aria-expanded={false}
              className="flex items-center justify-center w-9 h-9  transition"
            >
              <MenuIcon className="text-[#2A1C79]" />
            </button>
          )}
        </div>
      </div>

      {/* DESKTOP: Full-width megamenu (Discover) */}
      {!isMobile && isMegaOpen && (
        <div
          ref={megaRef}
          className="absolute left-0 right-0 top-full z-40 bg-white border-b border-black/10 shadow-md"
        >
          <div className="max-w-8xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Big primary card: VELS Theatre */}
              <Link
                href={theatre.href}
                className="md:col-span-2  border border-black/10 hover:border-black/20 hover:shadow-sm transition p-6 bg-white"
                onClick={() => setIsMegaOpen(false)}
              >
                <div className="text-xs uppercase tracking-wide text-black/50 mb-2">Primary</div>
                <div className="text-xl font-semibold text-[#2A1C79]">{theatre.label}</div>
                <p className="mt-2 text-sm text-black/70">
                  Stage-ready venue for premieres, showcases, talks, and more.
                </p>
              </Link>

              {/* Submenu column: Film City Indoor/Outdoor */}
              <div className=" border border-black/10 p-2 bg-white">
                <div className="text-xs uppercase tracking-wide text-black/50 px-3 pt-2 pb-1">Submenu</div>
                <ul className="mt-1">
                  {filmCity.map((s, idx) => (
                    <li key={idx}>
                      <Link
                        href={s.href}
                        className="block px-3 py-3 hover:bg-black/5 text-[15px] text-black/80"
                        onClick={() => setIsMegaOpen(false)}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DRAWER: Top dropdown (half height, rounded bottom) */}
      {isOpen && (
        <>
          <div id="drawer-overlay" aria-hidden="true" className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px]" />
          <aside
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site Menu"
            className={[
              "fixed top-0 right-0 z-50",
              "w-[86%] max-w-[360px] md:w-[360px]",
              "h-[50vh]  overflow-hidden",
              "bg-white shadow-2xl border-b border-l border-black/10",
              "transition-transform duration-300 ease-out flex flex-col",
              "animate-[menuDrop_200ms_ease-out]",
            ].join(" ")}
            style={{ animation: "menuDrop 0.25s ease-out" }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-black/10">
              <span className="text-sm font-medium text-black/70">Menu</span>
              <button onClick={closeMenu} aria-label="Close menu" className="w-9 h-9 flex items-center justify-center  hover:bg-black/5">
                <CloseIcon />
              </button>
            </div>

            <div className="p-3 space-y-6 overflow-y-auto">
              {/* Mobile nav with Discover accordion */}
              {isMobile && (
                <nav>
                  <h3 className="px-4 pb-2 text-xs uppercase tracking-wide text-black/50">Navigation</h3>
                  <ul className="space-y-1 text-[15px] font-foundersgrotesk">
                    {navItems.map((item, i) => {
                      if (!item.hasSubmenu) {
                        return (
                          <li key={i}>
                            <Link href={item.href} onClick={closeMenu} className="block px-4 py-3  hover:bg-black/5">
                              {item.label}
                            </Link>
                          </li>
                        );
                      }
                      // Discover accordion (shows same 3 links)
                      return (
                        <li key={i}>
                          <button
                            onClick={() => setMobileDiscoverOpen((v) => !v)}
                            aria-expanded={mobileDiscoverOpen}
                            className="w-full text-left px-4 py-3  hover:bg-black/5"
                          >
                            {item.label}
                          </button>
                          {mobileDiscoverOpen && (
                            <ul className="mt-1">
                              <li>
                                <Link
                                  href={theatre.href}
                                  onClick={closeMenu}
                                  className="block w-full px-6 py-2 hover:bg-black/5 text-[14px]"
                                >
                                  {theatre.label}
                                </Link>
                              </li>
                              {filmCity.map((s, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={s.href}
                                    onClick={closeMenu}
                                    className="block w-full px-6 py-2 hover:bg-black/5 text-[14px]"
                                  >
                                    {s.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}

              {/* Quick Links — always */}
              <nav>
                <h3 className="px-4 pb-2 text-xs uppercase tracking-wide text-black/50">Quick Links</h3>
                <ul className="space-y-1 text-[15px] font-foundersgrotesk">
                  {quickItems.map((q, i) => (
                    <li key={i}>
                      <Link href={q.href} onClick={closeMenu} className="block px-4 py-3  hover:bg-black/5">
                        {q.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Inline animation */}
          <style jsx>{`
            @keyframes menuDrop {
              from { transform: translateY(-16px); opacity: 0.9; }
              to   { transform: translateY(0);      opacity: 1; }
            }
          `}</style>
        </>
      )}
    </header>
  );
}
