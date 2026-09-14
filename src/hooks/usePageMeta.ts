import {useEffect} from 'react';
import {useIntl} from 'react-intl';

const SITE_TITLE = 'ChicMouse Studio';

interface IPageMeta {
  titleKey?: string;
  descriptionKey?: string;
}

export const usePageMeta = ({
  titleKey,
  descriptionKey,
}: IPageMeta = {}) => {
  const intl = useIntl();
  const title = titleKey ? intl.formatMessage({id: titleKey}) : undefined;
  const description = descriptionKey
    ? intl.formatMessage({id: descriptionKey})
    : undefined;

  useEffect(() => {
    document.title = title ?? SITE_TITLE;

    const lang = intl.locale.startsWith('es') ? 'es' : 'en';
    if (document.documentElement.lang !== lang) {
      document.documentElement.lang = lang;
    }

    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute('content', description);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description]);
};