import {Cookie} from 'lucide-react';
import {useIntl} from 'react-intl';
import {Link} from 'react-router-dom';
import {useCookieConsent} from 'hooks/useCookieConsent';
import {
  AcceptButton,
  BannerActions,
  BannerContent,
  BannerIcon,
  BannerText,
  BannerTitle,
  BannerWrapper,
  RejectButton,
} from './CookieBanner.styles';

export const CookieBanner = () => {
  const {consent, accept, reject} = useCookieConsent();
  const intl = useIntl();

  if (consent !== null) return null;

  return (
    <BannerWrapper
      role="dialog"
      aria-live="polite"
      aria-label={intl.formatMessage({id: 'cookieBannerTitle'})}>
      <BannerIcon>
        <Cookie size={22} />
      </BannerIcon>
      <BannerContent>
        <BannerTitle>
          {intl.formatMessage({id: 'cookieBannerTitle'})}
        </BannerTitle>
        <BannerText>
          {intl.formatMessage({id: 'cookieBannerDescription'})}{' '}
          <Link to="/privacy-policy">
            {intl.formatMessage({id: 'cookieBannerPolicy'})}
          </Link>
        </BannerText>
      </BannerContent>
      <BannerActions>
        <RejectButton onClick={reject}>
          {intl.formatMessage({id: 'cookieBannerReject'})}
        </RejectButton>
        <AcceptButton onClick={accept}>
          {intl.formatMessage({id: 'cookieBannerAccept'})}
        </AcceptButton>
      </BannerActions>
    </BannerWrapper>
  );
};
