// Particle system configurations — Nord frost palette

import type { ISourceOptions } from '@tsparticles/engine';

export const MOBILE_BREAKPOINT = 768;
export const INFRASTRUCTURE_PARTICLES_MOBILE = 15;
export const INFRASTRUCTURE_PARTICLES_DESKTOP = 30;
export const DATA_PACKETS_MOBILE = 10;
export const DATA_PACKETS_DESKTOP = 20;

export function getInfrastructureConfig(isMobile: boolean): ISourceOptions {
  return {
    particles: {
      number: {
        value: isMobile ? INFRASTRUCTURE_PARTICLES_MOBILE : INFRASTRUCTURE_PARTICLES_DESKTOP,
        density: { enable: true, value_area: 800 },
      },
      color: { value: ['#4c566a', '#81a1c1', '#88c0d0'] },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.25, max: 0.55 },
        animation: { enable: true, speed: 0.4, sync: false, minimumValue: 0.2 },
      },
      size: {
        value: { min: 3, max: 6 },
        animation: { enable: true, speed: 0.8, sync: false, minimumValue: 2 },
      },
      move: {
        enable: true,
        speed: { min: 0.1, max: 0.3 },
        direction: 'none' as const,
        random: true,
        straight: false,
        outModes: { default: 'bounce' as const },
      },
      links: {
        enable: true,
        distance: 220,
        color: '#5e81ac',
        opacity: 0.18,
        width: 1,
        triangles: { enable: false },
      },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'grab' }, onClick: { enable: false } },
      modes: {
        grab: {
          distance: 280,
          links: { opacity: 0.35 },
        },
      },
    },
    retina_detect: true,
  } as ISourceOptions;
}

export function getDataPacketsConfig(isMobile: boolean): ISourceOptions {
  return {
    particles: {
      number: {
        value: isMobile ? DATA_PACKETS_MOBILE : DATA_PACKETS_DESKTOP,
        density: { enable: true, value_area: 800 },
      },
      color: { value: ['#88c0d0', '#8fbcbb'] },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.2, max: 0.45 },
        animation: { enable: true, speed: 0.8, sync: false },
      },
      size: {
        value: { min: 2, max: 3.5 },
        animation: { enable: false },
      },
      move: {
        enable: true,
        speed: { min: 1, max: 2.5 },
        direction: 'bottom' as const,
        random: true,
        straight: false,
        outModes: { default: 'out' as const },
      },
      links: { enable: false },
    },
    interactivity: {
      events: { onHover: { enable: false }, onClick: { enable: false } },
    },
    retina_detect: true,
  } as ISourceOptions;
}
