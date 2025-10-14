"use client";
import Link from "next/link";
import Image from "next/image";

import velsLogo from "@/public/images/logo.png";
export default function Header() {
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-col items-center py-4 px-6">
                {/* ✅ Logo Section */}
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

                {/* ✅ Navigation Menu */}
              
            </div>
        </header>
    );
}
