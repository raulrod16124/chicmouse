import {renderHook, act} from '@testing-library/react';
import {describe, test, expect, beforeEach} from 'vitest';
import {useCookieConsent} from './useCookieConsent';

const CONSENT_KEY = 'chicmouse_cookie_consent';

beforeEach(() => {
  localStorage.clear();
});

describe('useCookieConsent', () => {
  test('returns null consent when localStorage has no value', () => {
    const {result} = renderHook(() => useCookieConsent());
    expect(result.current.consent).toBeNull();
  });

  test('reads "accepted" from localStorage on mount', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    const {result} = renderHook(() => useCookieConsent());
    expect(result.current.consent).toBe('accepted');
  });

  test('reads "rejected" from localStorage on mount', () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    const {result} = renderHook(() => useCookieConsent());
    expect(result.current.consent).toBe('rejected');
  });

  test('accept() sets consent to "accepted"', () => {
    const {result} = renderHook(() => useCookieConsent());
    act(() => result.current.accept());
    expect(result.current.consent).toBe('accepted');
  });

  test('accept() persists "accepted" in localStorage', () => {
    const {result} = renderHook(() => useCookieConsent());
    act(() => result.current.accept());
    expect(localStorage.getItem(CONSENT_KEY)).toBe('accepted');
  });

  test('reject() sets consent to "rejected"', () => {
    const {result} = renderHook(() => useCookieConsent());
    act(() => result.current.reject());
    expect(result.current.consent).toBe('rejected');
  });

  test('reject() persists "rejected" in localStorage', () => {
    const {result} = renderHook(() => useCookieConsent());
    act(() => result.current.reject());
    expect(localStorage.getItem(CONSENT_KEY)).toBe('rejected');
  });

  test('ignores unknown values in localStorage (returns null)', () => {
    localStorage.setItem(CONSENT_KEY, 'unknown-value');
    const {result} = renderHook(() => useCookieConsent());
    expect(result.current.consent).toBeNull();
  });
});
