import {render, screen} from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import '@testing-library/jest-dom';
import {Footer} from './Footer';
import {renderWithRouter} from 'utils/test_utils';

describe('Footer', () => {
  test('renders the Privacy Policy link', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  test('renders the Terms & Conditions link', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument();
  });

  test('renders the copyright notice', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/chicmouse/i)).toBeInTheDocument();
  });

  test('privacy policy is a navigation link', () => {
    renderWithRouter(<Footer />);
    const link = screen.getByText('Privacy Policy').closest('a');
    expect(link).toBeInTheDocument();
  });

  test('terms and conditions is a navigation link', () => {
    renderWithRouter(<Footer />);
    const link = screen.getByText('Terms & Conditions').closest('a');
    expect(link).toBeInTheDocument();
  });
});
