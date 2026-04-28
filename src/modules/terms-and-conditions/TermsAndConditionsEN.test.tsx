import {screen} from '@testing-library/react';
import {describe, test, expect, beforeEach} from 'vitest';
import '@testing-library/jest-dom';
import {TermsAndConditionsEN} from './TermsAndConditionsEN';
import {IntlProviderForTests} from 'utils/test_utils';
import {render} from '@testing-library/react';

beforeEach(() => {
  render(
    <IntlProviderForTests>
      <TermsAndConditionsEN />
    </IntlProviderForTests>,
  );
});

describe('TermsAndConditionsEN', () => {
  test('renders the component', () => {
    expect(
      screen.getByTestId('terms-and-conditions-en-page-id'),
    ).toBeInTheDocument();
  });

  test('renders the page title', () => {
    expect(screen.getByText('Terms and Conditions')).toBeInTheDocument();
  });

  test('renders multiple section headings', () => {
    expect(screen.getAllByRole('heading').length).toBeGreaterThan(5);
  });

  test('renders Identification section', () => {
    expect(screen.getByText('Identification')).toBeInTheDocument();
  });

  test('renders Applicable Law section', () => {
    expect(screen.getByText('Applicable Law')).toBeInTheDocument();
  });

  test('renders Contact section', () => {
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders at least one list', () => {
    expect(screen.getAllByRole('list').length).toBeGreaterThan(0);
  });
});
