import {renderHook} from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import {useReducedMotion} from './useReducedMotion';

describe('useReducedMotion', () => {
  test('returns false when matchMedia.matches is false (default mock)', () => {
    const {result} = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);
  });

  test('returns true when matchMedia reports prefers-reduced-motion', () => {
    const original = window.matchMedia;
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: () => ({
        matches: true,
        media: '(prefers-reduced-motion: reduce)',
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });

    const {result} = renderHook(() => useReducedMotion());
    expect(result.current).toBe(true);

    // restore
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: original,
    });
  });
});
