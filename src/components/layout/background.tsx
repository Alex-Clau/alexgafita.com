// Cloud infrastructure & backend systems visualization — Nord-tuned

'use client';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';
import { MOBILE_BREAKPOINT, getInfrastructureConfig, getDataPacketsConfig } from '@/lib/particles/config';

function InfrastructureGrid() {
  return (
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="infrastructure-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="40" cy="40" r="1.5" fill="currentColor" opacity="0.25" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#infrastructure-grid)" className="text-primary/40" />
      </svg>
    </div>
  );
}

export function BackgroundAnimations() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    }).catch((error) => {
      console.error('Failed to initialize particles:', error);
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const infrastructureNodesConfig = useMemo(() => getInfrastructureConfig(isMobile), [isMobile]);
  const dataPacketsConfig = useMemo(() => getDataPacketsConfig(isMobile), [isMobile]);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#2e3440_0%,#3b4252_55%,#2e3440_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(136,192,208,0.08),transparent_55%)]" />
        <InfrastructureGrid />
      </div>

      {init && (
        <Particles
          id="tsparticles-infrastructure"
          options={infrastructureNodesConfig}
          className="pointer-events-none fixed inset-0 z-0"
        />
      )}

      {init && (
        <Particles
          id="tsparticles-data"
          options={dataPacketsConfig}
          className="pointer-events-none fixed inset-0 z-0"
        />
      )}
    </>
  );
}
