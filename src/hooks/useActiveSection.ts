import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import type {SectionId} from 'types';

const SECTION_IDS: SectionId[] = ['hero', 'games', 'studio', 'team', 'contact'];

/**
 * Tracks which section is currently visible using IntersectionObserver.
 * Re-connects observers whenever the route changes so that navigating back
 * to "/" after a secondary page picks up the freshly-mounted section nodes.
 * On non-home routes the observers are skipped and 'hero' is returned so the
 * Home link appears active on secondary pages.
 */
export const useActiveSection = (): SectionId => {
  const {pathname} = useLocation();
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  useEffect(() => {
    // Reset to hero on every route change, then re-observe if on home.
    setActiveSection('hero');

    if (pathname !== '/') return;

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
  }, [pathname]);

  return activeSection;
};
