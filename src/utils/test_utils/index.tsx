import {render} from '@testing-library/react';
import {IntlProvider} from 'react-intl';
import {MemoryRouter, type MemoryRouterProps} from 'react-router-dom';
import appEn from '../../translations/app_en.json';

export const mockIntl = () => {
  /* Mocking the useIntl library to change the language */
  return vi.mock('react-intl', async () => {
    const reactIntl = (await vi.importActual('react-intl')) as any;
    const intl = reactIntl.createIntl({
      locale: 'en',
    });

    return {
      ...reactIntl,
      useIntl: () => intl,
    };
  });
};

interface ILanguageProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const IntlProviderForTests = ({children}: ILanguageProviderProps) => {
  return (
    <IntlProvider locale="en-GB" messages={appEn}>
      {children}
    </IntlProvider>
  );
};

/**
 * Renders a component wrapped in MemoryRouter + IntlProvider.
 * Use this for components that contain Links or call useNavigate/useLocation.
 */
export const renderWithRouter = (
  ui: React.ReactElement,
  {
    initialEntries = ['/'],
  }: {initialEntries?: MemoryRouterProps['initialEntries']} = {},
) =>
  render(
    <MemoryRouter initialEntries={initialEntries}>
      <IntlProvider locale="en-GB" messages={appEn}>
        {ui}
      </IntlProvider>
    </MemoryRouter>,
  );
