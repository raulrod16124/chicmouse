import {describe, test, expect} from 'vitest';
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  cardEntrance,
  pageTransition,
} from './variants';

describe('Animation variants', () => {
  describe('fadeUp', () => {
    test('has hidden and visible states', () => {
      expect(fadeUp).toHaveProperty('hidden');
      expect(fadeUp).toHaveProperty('visible');
    });

    test('hidden state has opacity 0', () => {
      expect(fadeUp.hidden).toMatchObject({opacity: 0});
    });

    test('visible state has opacity 1', () => {
      expect(fadeUp.visible).toMatchObject({opacity: 1});
    });
  });

  describe('fadeIn', () => {
    test('has hidden and visible states', () => {
      expect(fadeIn).toHaveProperty('hidden');
      expect(fadeIn).toHaveProperty('visible');
    });

    test('hidden state has opacity 0', () => {
      expect(fadeIn.hidden).toMatchObject({opacity: 0});
    });
  });

  describe('staggerContainer', () => {
    test('is defined', () => {
      expect(staggerContainer).toBeDefined();
    });

    test('has hidden and visible states', () => {
      expect(staggerContainer).toHaveProperty('hidden');
      expect(staggerContainer).toHaveProperty('visible');
    });
  });

  describe('cardEntrance', () => {
    test('has hidden state with y offset', () => {
      expect(cardEntrance.hidden).toMatchObject({opacity: 0});
    });

    test('visible state has opacity 1', () => {
      expect(cardEntrance.visible).toMatchObject({opacity: 1});
    });
  });

  describe('pageTransition', () => {
    test('has hidden, visible and exit states', () => {
      expect(pageTransition).toHaveProperty('hidden');
      expect(pageTransition).toHaveProperty('visible');
      expect(pageTransition).toHaveProperty('exit');
    });

    test('exit state has opacity 0', () => {
      expect(pageTransition.exit).toMatchObject({opacity: 0});
    });
  });
});
