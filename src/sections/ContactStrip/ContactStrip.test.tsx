import {screen, fireEvent, waitFor} from '@testing-library/react';
import {describe, test, expect, vi, beforeEach} from 'vitest';
import '@testing-library/jest-dom';
import {ContactStrip} from './ContactStrip';
import {renderWithRouter} from 'utils/test_utils';

beforeEach(() => {
  // Prevent real fetch calls — individual tests override as needed
  vi.stubGlobal('fetch', vi.fn());
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('ContactStrip', () => {
  test('renders the contact section heading', () => {
    renderWithRouter(<ContactStrip />);
    expect(screen.getByText('Want to get in touch?')).toBeInTheDocument();
  });

  test('renders name, email and message inputs', () => {
    renderWithRouter(<ContactStrip />);
    expect(screen.getByPlaceholderText('Your name...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your message...')).toBeInTheDocument();
  });

  test('renders the privacy consent checkbox', () => {
    renderWithRouter(<ContactStrip />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  test('renders the send button', () => {
    renderWithRouter(<ContactStrip />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders the contact email address', () => {
    renderWithRouter(<ContactStrip />);
    expect(screen.getByText('admin@chicmouse.com')).toBeInTheDocument();
  });

  test('shows validation error when submitting empty form', async () => {
    renderWithRouter(<ContactStrip />);
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(
        screen.getByText('Please fill in all fields before sending.'),
      ).toBeInTheDocument();
    });
  });

  test('shows privacy consent error when fields filled but checkbox unchecked', async () => {
    renderWithRouter(<ContactStrip />);
    fireEvent.change(screen.getByPlaceholderText('Your name...'), {
      target: {value: 'John', name: 'name'},
    });
    fireEvent.change(screen.getByPlaceholderText('your@email.com'), {
      target: {value: 'john@example.com', name: 'email'},
    });
    fireEvent.change(screen.getByPlaceholderText('Your message...'), {
      target: {value: 'Hello world', name: 'message'},
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(
        screen.getByText(
          'You must accept the Privacy Policy to send your message.',
        ),
      ).toBeInTheDocument();
    });
  });

  test('successful submission shows success message', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: async () => ({status: 'Message Sent'}),
      }),
    );
    renderWithRouter(<ContactStrip />);
    fireEvent.change(screen.getByPlaceholderText('Your name...'), {
      target: {value: 'John', name: 'name'},
    });
    fireEvent.change(screen.getByPlaceholderText('your@email.com'), {
      target: {value: 'john@example.com', name: 'email'},
    });
    fireEvent.change(screen.getByPlaceholderText('Your message...'), {
      target: {value: 'Hello world', name: 'message'},
    });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(
        screen.getByText('Your message was successfully sent, thank you!.'),
      ).toBeInTheDocument();
    });
  });

  test('failed fetch shows error message', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockRejectedValue(new Error('Network error')),
    );
    renderWithRouter(<ContactStrip />);
    fireEvent.change(screen.getByPlaceholderText('Your name...'), {
      target: {value: 'John', name: 'name'},
    });
    fireEvent.change(screen.getByPlaceholderText('your@email.com'), {
      target: {value: 'john@example.com', name: 'email'},
    });
    fireEvent.change(screen.getByPlaceholderText('Your message...'), {
      target: {value: 'Hello world', name: 'message'},
    });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(
        screen.getByText('Oops, something went wrong. Try again later.'),
      ).toBeInTheDocument();
    });
  });
});
