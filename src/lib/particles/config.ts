// Particle system configurations

import type { ISourceOptions } from '@tsparticles/engine';

// Constants
export const MOBILE_BREAKPOINT = 768;
export const INFRASTRUCTURE_PARTICLES_MOBILE = 15;
export const INFRASTRUCTURE_PARTICLES_DESKTOP = 30;
export const DATA_PACKETS_MOBILE = 10;
export const DATA_PACKETS_DESKTOP = 20;

// Infrastructure nodes config
export function getInfrastructureConfig(isMobile: boolean): ISourceOptions {
  return {
    particles: {
      number: { value: isMobile ? INFRASTRUCTURE_PARTICLES_MOBILE : INFRASTRUCTURE_PARTICLES_DESKTOP, density: { enable: true, value_area: 800 } },
      color: { value: ['#71717a', '#a1a1aa', '#d4d4d8'] }, // Neutral grays
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.5, max: 0.9 },
        animation: { enable: true, speed: 0.4, sync: false, minimumValue: 0.4 }
      },
      size: {
        value: { min: 4, max: 8 },
        animation: { enable: true, speed: 0.8, sync: false, minimumValue: 3 }
      },
      move: {
        enable: true,
        speed: { min: 0.1, max: 0.3 },
        direction: 'none' as const,
        random: true,
        straight: false,
        outModes: { default: 'bounce' as const }
      },
      links: {
        enable: true,
        distance: 220,
        color: '#71717a', // Neutral gray
        opacity: 0.2,
        width: 1.2,
        triangles: { enable: false }
      }
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: false } },
      modes: {
        grab: {
          distance: 280,
          links: { opacity: 0.4 }
        }
      }
    },
    retina_detect: true
  } as ISourceOptions;
}

// Data packets config
export function getDataPacketsConfig(isMobile: boolean): ISourceOptions {
  return {
    particles: {
      number: { value: isMobile ? DATA_PACKETS_MOBILE : DATA_PACKETS_DESKTOP, density: { enable: true, value_area: 800 } },
      color: { value: ['#71717a', '#a1a1aa'] }, // Neutral grays
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.4, max: 0.7 },
        animation: { enable: true, speed: 0.8, sync: false }
      },
      size: {
        value: { min: 2, max: 4 },
        animation: { enable: false }
      },
      move: {
        enable: true,
        speed: { min: 1, max: 2.5 },
        direction: 'bottom' as const,
        random: true,
        straight: false,
        outModes: { default: 'out' as const }
      },
      links: { enable: false }
    },
    interactivity: {
      events: { onHover: { enable: false }, onClick: { enable: false } }
    },
    retina_detect: true
  } as ISourceOptions;
}

