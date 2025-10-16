// app/components/Footer.jsx
"use client";
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-white">
      <div className="">
        {/* Top links */}
        <div className="flex flex-wrap justify-center gap-[6.5rem] text-md text-black/80 px-4 py-4 font-primary">
          <a href="#" className="hover:text-primary transition-colors">Vels Trade Convention Centre</a>
          <a href="#" className="hover:text-primary transition-colors">Media Room</a>
          <a href="#" className="hover:text-primary transition-colors">Events</a>
          <a href="#" className="hover:text-primary transition-colors">Wedding Halls</a>
          <a href="#" className="hover:text-primary transition-colors">Party Hall</a>
        </div>

      

        {/* Bottom section */}
        <div className="mt-6 flex flex-col  bg-gray-100 items-center justify-between gap-4 text-sm text-black/70 md:flex-row px-4 py-4 mx-auto max-w-7xl">
          <p className="order-2 md:order-1 font-primary text-lg">
            © Copyright Vels Trade Convention Centre 2025
          </p>

          <div className="flex items-center gap-6 order-3 md:order-2">
            <a href="#" className="hover:text-primary transition-colors font-primary text-lg">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors font-primary text-lg">Terms of Use</a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 order-1 md:order-3 ">
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition">
              <Linkedin size={16} />
            </a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition">
              <Facebook size={16} />
            </a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition">
              <Instagram size={16} />
            </a>
            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
