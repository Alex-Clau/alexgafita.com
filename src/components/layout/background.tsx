"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

const MESH_TOKEN_VARS = [
  "--atmosphere-mesh-1",
  "--atmosphere-mesh-2",
  "--atmosphere-mesh-3",
  "--atmosphere-mesh-4",
  "--atmosphere-mesh-5",
] as const;

function readAtmosphereMeshColors(): string[] {
  const styles = getComputedStyle(document.documentElement);
  return MESH_TOKEN_VARS.map((token) => styles.getPropertyValue(token).trim()).filter(
    Boolean,
  );
}

export function BackgroundAnimations() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [meshColors, setMeshColors] = useState<string[] | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);

    setMeshColors(readAtmosphereMeshColors());

    return () => media.removeEventListener("change", syncMotion);
  }, []);

  return (
    <div className="site-atmosphere" aria-hidden>
      <div className="site-atmosphere__base" />
      <div className="site-atmosphere__mesh">
        {meshColors && meshColors.length > 0 ? (
          <MeshGradient
            colors={meshColors}
            distortion={0.35}
            swirl={0.15}
            speed={reduceMotion ? 0 : 0.1}
            style={{ width: "100%", height: "100%" }}
          />
        ) : null}
      </div>
      <div className="site-atmosphere__glow" />
    </div>
  );
}
