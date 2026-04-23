import spainFlag from 'assets/spain.webp';
import englandFlag from 'assets/england.webp';
import {memo, useCallback, useContext} from 'react';
import {LanguageContext} from 'context/LanguageContext';
import {Flag, FlagsWrapper} from './FarMenuItems.styles';

export const FarMenuItems = memo(() => {
  const {language, changeMessages} = useContext(LanguageContext);

  const switchToEs = useCallback(() => changeMessages('es-ES'), [changeMessages]);
  const switchToEn = useCallback(() => changeMessages('en-GB'), [changeMessages]);
  const keyDownEs = useCallback(
    (e: React.KeyboardEvent) => e.key === 'Enter' && changeMessages('es-ES'),
    [changeMessages],
  );
  const keyDownEn = useCallback(
    (e: React.KeyboardEvent) => e.key === 'Enter' && changeMessages('en-GB'),
    [changeMessages],
  );

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
        onClick={switchToEs}
        onKeyDown={keyDownEs}
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
        onClick={switchToEn}
        onKeyDown={keyDownEn}
      />
    </FlagsWrapper>
  );
});

FarMenuItems.displayName = 'FarMenuItems';
