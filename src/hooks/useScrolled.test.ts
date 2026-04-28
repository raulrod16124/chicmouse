import {renderHook, act} from '@testing-library/react';
import {describe, test, expect, beforeEach} from 'vitest';
import {useScrolled} from './useScrolled';

beforeEach(() => {
  Object.defineProperty(window, 'scrollY', {value: 0, writable: true});
});

describe('useScrolled', () => {
  test('returns false initially (scrollY = 0)', () => {
    const {result} = renderHook(() => useScrolled());
    expect(result.current).toBe(false);
  });

  test('returns true when scrolled past default threshold', () => {
    const {result} = renderHook(() => useScrolled());
    act(() => {
      Object.defineProperty(window, 'scrollY', {value: 50, writable: true});
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current).toBe(true);
  });

  test('returns false when scrollY is below the threshold', () => {
    const {result} = renderHook(() => useScrolled(100));
    act(() => {
      Object.defineProperty(window, 'scrollY', {value: 5, writable: true});
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current).toBe(false);
  });

  test('respects a custom threshold', () => {
    const {result} = renderHook(() => useScrolled(200));
    act(() => {
      Object.defineProperty(window, 'scrollY', {value: 201, writable: true});
      window.dispatchEvent(new Event('scroll'));
    });
    expect(result.current).toBe(true);
  });
});
