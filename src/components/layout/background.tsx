"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

// Original Nord atmosphere palette on Paper MeshGradient
const NORD_MESH_COLORS = [
  "#2e3440", // nord0 — polar night
  "#3b4252", // nord1
  "#88c0d0", // nord8 — frost cyan
  "#5e81ac", // nord10 — frost blue
  "#8fbcbb", // nord7 — frost teal
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
          opacity: 0.28,
        }}
      />
      {/* Soft frost veil matching the original CSS glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 60% at 50% -10%, rgba(136, 192, 208, 0.1), transparent 55%)",
        }}
      />
    </div>
  );
}
