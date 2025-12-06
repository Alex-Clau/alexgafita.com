// Cloud infrastructure & backend systems visualization

'use client';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';
import { MOBILE_BREAKPOINT, getInfrastructureConfig, getDataPacketsConfig } from '@/lib/particles/config';

// Infrastructure grid - represents cloud infrastructure layout (void-oriented, barely visible)
function InfrastructureGrid() {
  return (
    <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="infrastructure-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="40" cy="40" r="1.5" fill="currentColor" opacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#infrastructure-grid)" className="text-blue-400" />
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
        {/* Deep space base - represents scalable cloud infrastructure */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 via-indigo-950/30 to-neutral-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-950/25 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-950/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-blue-900/12 via-indigo-950/6 to-transparent" />

        {/* Infrastructure grid - cloud infrastructure layout */}
        <InfrastructureGrid />
      </div>

      {/* Cloud infrastructure nodes (services, APIs, databases) */}
      {init && (
        <Particles
          id="tsparticles-infrastructure"
          options={infrastructureNodesConfig}
          className="pointer-events-none fixed inset-0 z-0"
        />
      )}

      {/* Backend data packets (API requests, data processing) */}
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
