import {screen} from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import '@testing-library/jest-dom';
import {SinglePage} from './SinglePage';
import {renderWithRouter} from 'utils/test_utils';

describe('SinglePage', () => {
  test('renders without crashing', () => {
    const {container} = renderWithRouter(<SinglePage />);
    expect(container).not.toBeEmptyDOMElement();
  });

  test('renders the Hero section', () => {
    renderWithRouter(<SinglePage />);
    expect(screen.getByText('INDIE GAME STUDIO')).toBeInTheDocument();
  });

  test('renders the FeaturedGame section', () => {
    renderWithRouter(<SinglePage />);
    expect(screen.getByText('OUR LATEST GAME')).toBeInTheDocument();
  });

  test('renders the StudioStatement section', () => {
    renderWithRouter(<SinglePage />);
    expect(screen.getByText('STUDIO STATEMENT')).toBeInTheDocument();
  });

  test('renders the Contact section', () => {
    renderWithRouter(<SinglePage />);
    expect(screen.getByText('Want to get in touch?')).toBeInTheDocument();
  });

  test('renders the Footer with copyright', () => {
    renderWithRouter(<SinglePage />);
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
  });

  test('scrolls to section when state.scrollTo is set', () => {
    const scrollIntoViewMock = vi.fn();
    // Attach mock before rendering so the element already has it
    document.getElementById = vi.fn().mockReturnValue({
      scrollIntoView: scrollIntoViewMock,
    });
    renderWithRouter(<SinglePage />, {
      initialEntries: [{pathname: '/', state: {scrollTo: 'games'}}],
    });
    // The setTimeout delay is 80ms — fast-forward timers
    vi.useFakeTimers();
    vi.runAllTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });
});
