import {screen} from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import '@testing-library/jest-dom';
import {ErrorPage} from './ErrorPage';
import {renderWithRouter} from 'utils/test_utils';

describe('ErrorPage', () => {
  test('renders the error message', () => {
    renderWithRouter(<ErrorPage />);
    expect(screen.getByText(/couldn't find that page/i)).toBeInTheDocument();
  });

  test('renders the go home button', () => {
    renderWithRouter(<ErrorPage />);
    expect(screen.getByText(/go home/i)).toBeInTheDocument();
  });

  test('renders an image', () => {
    renderWithRouter(<ErrorPage />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('go home button links to "/"', () => {
    renderWithRouter(<ErrorPage />);
    const link = screen.getByText(/go home/i).closest('a');
    expect(link).toHaveAttribute('href', '/');
  });
});
