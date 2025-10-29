"use client";
import React, { useEffect, useRef } from "react";

export default function Theatre360() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    (async () => {
      const THREE = await import("three");
      const PANOLENS = await import("panolens");

      if (!window.THREE) window.THREE = THREE;

      const panorama = new PANOLENS.ImagePanorama("/assets/360.png");

      const viewer = new PANOLENS.Viewer({
        container: containerRef.current,
        autoRotate: true,
        autoRotateSpeed: 0.5,
        controlBar: true,
        horizontalView: true,
      });

      viewer.add(panorama);

      return () => {
        viewer.dispose();
      };
    })();
  }, []);

  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-2">Vels Theatres</h2>
      <div className="w-20 h-[1px] bg-black mx-auto mb-4"></div>
      <p className="text-gray-600 mb-8">
        Marquee moments and fan favorites, presented in a clean glide.
      </p>

      <div
        ref={containerRef}
        className="w-full h-[500px] mx-auto rounded-lg overflow-hidden"
      ></div>
    </section>
  );
}
