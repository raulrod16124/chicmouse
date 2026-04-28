import {render, screen, fireEvent} from '@testing-library/react';
import {describe, test, expect, beforeEach} from 'vitest';
import '@testing-library/jest-dom';
import {CookieBanner} from './CookieBanner';
import {renderWithRouter} from 'utils/test_utils';

const CONSENT_KEY = 'chicmouse_cookie_consent';

beforeEach(() => {
  localStorage.clear();
});

describe('CookieBanner', () => {
  test('renders the banner when consent has not been set', () => {
    renderWithRouter(<CookieBanner />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('renders the banner title', () => {
    renderWithRouter(<CookieBanner />);
    expect(screen.getByText('We use cookies')).toBeInTheDocument();
  });

  test('renders accept and reject buttons', () => {
    renderWithRouter(<CookieBanner />);
    expect(screen.getByText('Accept all')).toBeInTheDocument();
    expect(screen.getByText('Only necessary')).toBeInTheDocument();
  });

  test('does not render when consent is already "accepted"', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    const {queryByRole} = renderWithRouter(<CookieBanner />);
    expect(queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('does not render when consent is already "rejected"', () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    const {queryByRole} = renderWithRouter(<CookieBanner />);
    expect(queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('clicking "Accept all" stores "accepted" in localStorage', () => {
    renderWithRouter(<CookieBanner />);
    fireEvent.click(screen.getByText('Accept all'));
    expect(localStorage.getItem(CONSENT_KEY)).toBe('accepted');
  });

  test('clicking "Only necessary" stores "rejected" in localStorage', () => {
    renderWithRouter(<CookieBanner />);
    fireEvent.click(screen.getByText('Only necessary'));
    expect(localStorage.getItem(CONSENT_KEY)).toBe('rejected');
  });

  test('renders a link to the privacy policy', () => {
    renderWithRouter(<CookieBanner />);
    const link = screen.getByText('Privacy Policy').closest('a');
    expect(link).toHaveAttribute('href', '/privacy-policy');
  });
});
