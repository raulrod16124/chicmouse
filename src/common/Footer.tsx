import {memo, useMemo} from 'react';
import {useIntl} from 'react-intl';
import {
  FooterContent,
  FooterText,
  FooterWrapper,
  TextLink,
  TextLinksWrapper,
} from './Footer.styles';

export const Footer = memo(() => {
  const intl = useIntl();
  const currentYear = useMemo(() => new Date().getUTCFullYear(), []);

  return (
    <FooterWrapper>
      <FooterContent>
        <TextLinksWrapper>
          <TextLink to={'/privacy-policy'}>
            {intl.formatMessage({id: 'privacyPolicy'})}
          </TextLink>
          <TextLink to={'/terms-and-conditions'}>
            {intl.formatMessage({id: 'termsAndConditions'})}
          </TextLink>
        </TextLinksWrapper>
        <FooterText>
          &copy; {currentYear} {intl.formatMessage({id: 'allRightsReserved'})}
        </FooterText>
      </FooterContent>
    </FooterWrapper>
  );
});

Footer.displayName = 'Footer';
