import { createContext, useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import appEn from "./../translations/app_en.json";
import appEs from "./../translations/app_es.json";

interface ILanguageContextProps {
    language: string;
    messages: object;
    changeMessages: (language:string) => void;
}

interface ILanguageProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const LanguageContext = createContext({} as ILanguageContextProps);

export const LanguageProvider = ({children}: ILanguageProviderProps) => {
    const [language, setLanguage] = useState<string>("en-GB");
    const [messages, setMessages] = useState<{}>(appEn);

    const changeMessages = async (language:string) => {
        setLanguage(language)
        switch(language){
            case "es-ES":
                setMessages(appEs);
                return
            default:
                setMessages(appEn);
                return
        }
    };

    // useEffect(()=>{
        // if(user?.settings){
        //     if(user.settings.language){
        //         setLanguage(user.settings.language)
        //         changeMessages(user.settings.language)
        //     } else {
        //         setLanguage(deviceLanguage || "en-GB")
        //         changeMessages(deviceLanguage || "en-GB")
        //     }
        // }
    // }, [])

    return (
        <LanguageContext.Provider value={{
            language,
            messages,
            changeMessages
        }} >
            <IntlProvider messages={messages} locale={language}>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    )
}