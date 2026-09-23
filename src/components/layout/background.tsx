"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

// Quiet Nord wash: polar night + one muted frost accent
const NORD_MESH_COLORS = [
  "#2e3440", // nord0
  "#3b4252", // nord1
  "#5e81ac", // nord10
];

export function BackgroundAnimations() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#2e3440]" />
      <MeshGradient
        colors={NORD_MESH_COLORS}
        distortion={0.3}
        swirl={0.12}
        speed={reduceMotion ? 0 : 0.08}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.32,
        }}
      />
      {/* Soft frost veil so the mesh stays lowkey */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 60% at 50% -10%, rgba(136, 192, 208, 0.08), transparent 55%)",
        }}
      />
    </div>
  );
}
