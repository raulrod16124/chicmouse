import spainFlag from 'assets/spain.png';
import englandFlag from 'assets/england.png';
import {useContext} from 'react';
import {LanguageContext} from 'context/LanguageContext';
import {Flag, FlagsWrapper} from './FarMenuItems.styles';

export const FarMenuItems = () => {
  const {language, changeMessages} = useContext(LanguageContext);

  return (
    <FlagsWrapper role="group" aria-label="Language selector">
      <Flag
        selected={language === 'es-ES'}
        src={spainFlag}
        alt="Español"
        title="Español"
        tabIndex={0}
        role="button"
        aria-pressed={language === 'es-ES'}
        aria-label="Cambiar a español"
        onClick={() => changeMessages('es-ES')}
        onKeyDown={e => e.key === 'Enter' && changeMessages('es-ES')}
      />
      <Flag
        selected={language === 'en-GB'}
        src={englandFlag}
        alt="English"
        title="English"
        tabIndex={0}
        role="button"
        aria-pressed={language === 'en-GB'}
        aria-label="Switch to English"
        onClick={() => changeMessages('en-GB')}
        onKeyDown={e => e.key === 'Enter' && changeMessages('en-GB')}
      />
    </FlagsWrapper>
  );
};
