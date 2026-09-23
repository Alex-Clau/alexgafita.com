"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

// Soft Nord frost mesh via Paper shaders (GPU, smooth loop)
const NORD_MESH_COLORS = [
  "#2e3440", // nord0
  "#3b4252", // nord1
  "#5e81ac", // nord10
  "#88c0d0", // nord8
  "#8fbcbb", // nord7
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
        distortion={0.55}
        swirl={0.25}
        speed={reduceMotion ? 0 : 0.18}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.72,
        }}
      />
    </div>
  );
}
