'use client';

import { useEffect } from 'react';

export function DeviconLoader() {
  useEffect(() => {
    // Add resource hints for Devicon CDN
    const addResourceHint = (rel: string, href: string, as?: string) => {
      const existing = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
      if (!existing) {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        if (as) {
          link.setAttribute('as', as);
        }
        if (rel === 'preconnect' || rel === 'dns-prefetch') {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      }
    };

    // Preconnect to CDN for faster loading
    addResourceHint('preconnect', 'https://cdn.jsdelivr.net');
    addResourceHint('dns-prefetch', 'https://cdn.jsdelivr.net');
    
    // Preload hero image
    addResourceHint('preload', '/profil.jpeg', 'image');

    // Load Devicon CSS
    const existingLink = document.querySelector('link[href*="devicon"]');
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  }, []);

  return null;
}

