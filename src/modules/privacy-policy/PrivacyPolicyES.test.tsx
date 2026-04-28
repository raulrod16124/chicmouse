import {render, screen} from '@testing-library/react';
import {describe, test, expect, beforeEach} from 'vitest';
import '@testing-library/jest-dom';
import {PrivacyPolicyES} from './PrivacyPolicyES';
import {IntlProviderForTests} from 'utils/test_utils';

beforeEach(() => {
  render(
    <IntlProviderForTests>
      <PrivacyPolicyES />
    </IntlProviderForTests>,
  );
});

describe('Testing the PrivacyPolicyES component', () => {
  test('should render the PrivacyPolicyES component in the document', () => {
    expect(screen.getByTestId('privacy-policy-es-page-id')).toBeInTheDocument();
  });

  test("should find the text 'Política de privacidad' in the document", () => {
    expect(screen.getByText('Política de privacidad')).toBeInTheDocument();
  });

  test('should find heading elements in the document', () => {
    expect(screen.getAllByRole('heading').length).toBeGreaterThan(10);
  });

  test('should find multiple lists in the document', () => {
    expect(screen.getAllByRole('list').length).toBeGreaterThan(0);
  });
});
