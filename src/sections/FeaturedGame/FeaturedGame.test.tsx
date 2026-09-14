import {screen} from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import '@testing-library/jest-dom';
import {FeaturedGame} from './FeaturedGame';
import {renderWithRouter} from 'utils/test_utils';

describe('FeaturedGame', () => {
  test('renders the section eyebrow', () => {
    renderWithRouter(<FeaturedGame />);
    expect(screen.getByText('A CHICMOUSE ORIGINAL')).toBeInTheDocument();
  });

  test('renders the game tagline', () => {
    renderWithRouter(<FeaturedGame />);
    expect(
      screen.getByText('Merge. Strategize. Compete across the cosmos.'),
    ).toBeInTheDocument();
  });

  test('renders the game CTA link', () => {
    renderWithRouter(<FeaturedGame />);
    expect(screen.getByText('Meet Stellar Fusion')).toBeInTheDocument();
  });

  test('renders a product image', () => {
    renderWithRouter(<FeaturedGame />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });

  test('game CTA link navigates to the game page', () => {
    renderWithRouter(<FeaturedGame />);
    const link = screen.getByText('Meet Stellar Fusion').closest('a');
    expect(link).toHaveAttribute('href');
  });
});
