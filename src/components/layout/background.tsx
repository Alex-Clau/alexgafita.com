"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

// Original Nord frost palette — bright enough to lift the center again
const NORD_MESH_COLORS = [
  "#2e3440", // nord0
  "#3b4252", // nord1
  "#88c0d0", // nord8
  "#5e81ac", // nord10
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
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #2e3440 0%, #3b4252 48%, #2e3440 100%)",
        }}
      />
      <MeshGradient
        colors={NORD_MESH_COLORS}
        distortion={0.35}
        swirl={0.15}
        speed={reduceMotion ? 0 : 0.1}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.5,
        }}
      />
      {/* Original Nord frost wash — lifts the center like the CSS glow */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(120% 80% at 50% -10%, rgba(136, 192, 208, 0.14), transparent 55%)",
            "radial-gradient(42% 34% at 18% 22%, rgba(136, 192, 208, 0.12), transparent 70%)",
            "radial-gradient(36% 30% at 82% 18%, rgba(94, 129, 172, 0.1), transparent 72%)",
            "radial-gradient(48% 38% at 68% 78%, rgba(143, 188, 187, 0.08), transparent 75%)",
          ].join(", "),
        }}
      />
    </div>
  );
}
