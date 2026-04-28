import {screen} from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import '@testing-library/jest-dom';
import {StudioStatement} from './StudioStatement';
import {renderWithRouter} from 'utils/test_utils';

describe('StudioStatement', () => {
  test('renders the section eyebrow', () => {
    renderWithRouter(<StudioStatement />);
    expect(screen.getByText('STUDIO STATEMENT')).toBeInTheDocument();
  });

  test('renders the studio headline', () => {
    renderWithRouter(<StudioStatement />);
    expect(screen.getByText(/Small team/)).toBeInTheDocument();
  });

  test('renders all three pillar titles', () => {
    renderWithRouter(<StudioStatement />);
    expect(screen.getByText('Player First')).toBeInTheDocument();
    expect(screen.getByText('Clean Design')).toBeInTheDocument();
    expect(screen.getByText('In-house Tech')).toBeInTheDocument();
  });

  test('renders pillar body text', () => {
    renderWithRouter(<StudioStatement />);
    expect(screen.getByText(/meaningful engagement/i)).toBeInTheDocument();
  });

  test('renders the section with id="studio"', () => {
    renderWithRouter(<StudioStatement />);
    expect(document.getElementById('studio')).toBeInTheDocument();
  });
});
