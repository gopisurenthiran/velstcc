// app/components/Footer.jsx
"use client";
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white font-primary">
      <div className="w-full">
        {/* Top links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-[6.5rem] text-md sm:text-md text-black/80 px-4 py-6">
          <a href="#" className="hover:text-primary transition-colors">
            Vels Trade Convention Centre
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Media Room
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Events
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Wedding Halls
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Party Hall
          </a>
        </div>

        {/* Bottom section */}
        <div className="mt-4 flex flex-col items-center justify-between gap-6 bg-gray-100 text-sm text-black/70 md:flex-row px-6 py-6 mx-auto max-w-7xl">
          {/* Social icons */}
          <div className="flex items-center gap-3 order-1 md:order-3">
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
            >
              <Youtube size={16} />
            </a>
          </div>

          {/* Copyright */}
          <p className="order-2 md:order-1 text-center md:text-left text-base sm:text-lg">
            © Copyright Vels Trade Convention Centre 2025
          </p>

          {/* Privacy / Terms */}
          <div className="flex items-center gap-6 order-3 md:order-2 text-base sm:text-lg">
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
