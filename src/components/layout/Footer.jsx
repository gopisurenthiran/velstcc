// app/components/Footer.jsx
"use client";

import Link from "next/link";
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white secondary-subtitle">
      {/* TOP LINK AREA */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="space-y-4 text-center text-xs sm:text-sm text-black/80">
          {/* Row 1 – 4 items, evenly spaced */}
          <div className="grid grid-cols-2 text-md sm:grid-cols-4 gap-y-2">
            <Link
              href="/theatre"
              className="hover:text-[#2A1C79] transition-colors"
            >
              Vel&apos;s Theatre
            </Link>
            <Link
              href="/indoor"
              className="hover:text-[#2A1C79] transition-colors"
            >
              Vel&apos;s Film City - Indoor
            </Link>
            <Link
              href="/outdoor"
              className="hover:text-[#2A1C79] transition-colors"
            >
              Vel&apos;s Film City - Outdoor
            </Link>
            <Link
              href="#getting"
              className="hover:text-[#2A1C79] transition-colors"
            >
              Getting to VELS
            </Link>
          </div>

          {/* Row 2 – 3 items, centered */}
          <div className="grid grid-cols-3 gap-y-2 max-w-xs text-md mx-auto pt-10 pb-5">
            <Link
              href="/about"
              className="hover:text-[#2A1C79] transition-colors"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="hover:text-[#2A1C79] transition-colors"
            >
              FAQ'S
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#2A1C79] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t  border-black/10 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs sm:text-sm text-black/70">
          {/* Left: Copyright */}
          <p className="md:basis-1/3 text-center md:text-left">
            © Copyright Vels Trade Convention Centre 2025
          </p>

          {/* Center: Privacy / Terms */}
          <div className="md:basis-1/3 flex justify-center gap-6">
            <Link
              href="#"
              className="hover:text-[#2A1C79] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="hover:text-[#2A1C79] transition-colors"
            >
              Terms of Use
            </Link>
          </div>

          {/* Right: Social icons */}
          <div className="md:basis-1/3 flex justify-center md:justify-end items-center gap-3">
            {[Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#2A1C79] text-[#2A1C79] hover:bg-[#2A1C79] hover:text-white transition"
              >
                <Icon size={14} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
