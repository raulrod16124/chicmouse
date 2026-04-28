import {screen} from '@testing-library/react';
import {describe, test, expect, beforeEach} from 'vitest';
import '@testing-library/jest-dom';
import {TermsAndConditionsES} from './TermsAndConditionsES';
import {IntlProviderForTests} from 'utils/test_utils';
import {render} from '@testing-library/react';

beforeEach(() => {
  render(
    <IntlProviderForTests>
      <TermsAndConditionsES />
    </IntlProviderForTests>,
  );
});

describe('TermsAndConditionsES', () => {
  test('renders the component', () => {
    expect(
      screen.getByTestId('terms-and-conditions-es-page-id'),
    ).toBeInTheDocument();
  });

  test('renders the page title', () => {
    expect(screen.getByText('Términos y condiciones')).toBeInTheDocument();
  });

  test('renders multiple section headings', () => {
    expect(screen.getAllByRole('heading').length).toBeGreaterThan(5);
  });

  test('renders Identificación section', () => {
    expect(screen.getByText('Identificación')).toBeInTheDocument();
  });

  test('renders at least one list', () => {
    expect(screen.getAllByRole('list').length).toBeGreaterThan(0);
  });
});
