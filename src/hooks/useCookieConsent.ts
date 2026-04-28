import {useState, useEffect} from 'react';

export type CookieConsentStatus = 'accepted' | 'rejected' | null;

const CONSENT_KEY = 'chicmouse_cookie_consent';

const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap';

function injectGoogleFonts(): void {
  if (document.querySelector(`link[href="${FONTS_HREF}"]`)) return;

  const preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect';
  preconnect1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(preconnect1);

  const preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect';
  preconnect2.href = 'https://fonts.gstatic.com';
  preconnect2.crossOrigin = 'anonymous';
  document.head.appendChild(preconnect2);

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = FONTS_HREF;
  document.head.appendChild(link);
}

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsentStatus>(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted' || stored === 'rejected') return stored;
    return null;
  });

  useEffect(() => {
    if (consent === 'accepted') {
      injectGoogleFonts();
    }
  }, [consent]);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsent('accepted');
  };

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    setConsent('rejected');
  };

  return {consent, accept, reject};
};
