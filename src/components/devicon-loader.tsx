'use client';

import { useEffect } from 'react';

export function DeviconLoader() {
  useEffect(() => {
    // Check if the link already exists
    const existingLink = document.querySelector('link[href*="devicon"]');
    if (existingLink) return;

    // Create and add the link tag
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css';
    document.head.appendChild(link);
  }, []);

  return null;
}

