"use client";
import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function ScrollArrow() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <button
      onClick={showScrollTop ? scrollToTop : scrollToBottom}
      className="fixed bottom-6 right-6 z-50 bg-white text-[#0E5DA2] p-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
      aria-label={showScrollTop ? "Scroll to top" : "Scroll down"}
    >
      {showScrollTop ? (
        <FaArrowUp className="text-xl" />
      ) : (
        <FaArrowDown className="text-xl" />
      )}
    </button>
  );
}
