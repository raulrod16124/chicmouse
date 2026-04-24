import {useEffect, useState} from 'react';
import type {SectionId} from 'types';

const SECTION_IDS: SectionId[] = ['hero', 'games', 'studio', 'team', 'contact'];

/**
 * Tracks which section is currently visible using IntersectionObserver.
 * Returns the SectionId of the section occupying most of the viewport.
 */
export const useActiveSection = (): SectionId => {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {threshold: 0.4},
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach(o => o.disconnect());
    };
  }, []);

  return activeSection;
};
