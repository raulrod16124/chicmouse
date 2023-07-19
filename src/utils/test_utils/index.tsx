import { IntlProvider } from "react-intl";
import appEn from "../../translations/app_en.json";

export const mockIntl = () => {
    /* Mocking the useIntl library to change the language */
    return vi.mock("react-intl", async () => {
      const reactIntl = (await vi.importActual("react-intl")) as any;
      const intl = reactIntl.createIntl({
        locale: "en"
      });
  
      return {
        ...reactIntl,
        useIntl: () => intl
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
  )
}