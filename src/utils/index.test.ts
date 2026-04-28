import {describe, test, expect} from 'vitest';
import {size, device, AppPages} from './index';

describe('size breakpoints', () => {
  test('mobileS is "320px"', () => {
    expect(size.mobileS).toBe('320px');
  });

  test('tablet is "768px"', () => {
    expect(size.tablet).toBe('768px');
  });

  test('laptop is "1024px"', () => {
    expect(size.laptop).toBe('1024px');
  });

  test('desktop is "2560px"', () => {
    expect(size.desktop).toBe('2560px');
  });
});

describe('device media queries', () => {
  test('device.laptop contains max-width and laptop breakpoint', () => {
    expect(device.laptop).toContain('max-width');
    expect(device.laptop).toContain('1024px');
  });

  test('device.tablet contains the tablet breakpoint', () => {
    expect(device.tablet).toContain('768px');
  });

  test('device.mobileS contains the mobileS breakpoint', () => {
    expect(device.mobileS).toContain('320px');
  });
});

describe('AppPages', () => {
  test('AppPages is an array', () => {
    expect(Array.isArray(AppPages)).toBe(true);
  });

  test('AppPages is not empty', () => {
    expect(AppPages.length).toBeGreaterThan(0);
  });

  test('first app has required fields', () => {
    expect(AppPages[0]).toHaveProperty('name');
    expect(AppPages[0]).toHaveProperty('url');
    expect(AppPages[0]).toHaveProperty('images');
    expect(AppPages[0]).toHaveProperty('icon');
  });

  test('first app images is an array', () => {
    expect(Array.isArray(AppPages[0].images)).toBe(true);
  });
});
