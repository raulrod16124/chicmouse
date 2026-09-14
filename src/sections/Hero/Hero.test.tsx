import {render, screen} from '@testing-library/react';
import {describe, test, expect, beforeEach} from 'vitest';
import '@testing-library/jest-dom';
import {Hero} from './Hero';
import {IntlProviderForTests} from 'utils/test_utils';

beforeEach(() => {
  render(
    <IntlProviderForTests>
      <Hero />
    </IntlProviderForTests>,
  );
});

describe('Testing the Hero section', () => {
  test('should render the eyebrow text', () => {
    expect(screen.getByText('GAMES WORTH YOUR TIME')).toBeInTheDocument();
  });

  test('should render the headline', () => {
    expect(
      screen.getByText('Fun that respects your time.'),
    ).toBeInTheDocument();
  });
});
