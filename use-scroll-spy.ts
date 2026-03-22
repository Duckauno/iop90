// ============================================================
// hooks/use-scroll-spy.ts — Tracks the active section in view
// ============================================================
'use client';

import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(sectionIds[i]);
          return;
        }
      }

      setActiveId('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
