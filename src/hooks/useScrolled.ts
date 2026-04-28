import {useEffect, useState} from 'react';

/**
 * Returns true when the page has been scrolled past 10px.
 * Used to apply backdrop-blur and border to the sticky Nav.
 */
export const useScrolled = (threshold = 10): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, {passive: true});
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return scrolled;
};
