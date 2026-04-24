import {useCallback} from 'react';
import {useIntl} from 'react-intl';
import {motion} from 'framer-motion';
import {fadeUp, fadeIn} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';
import chicmouseImage from 'assets/chicmouseImage.webp';
import type {SectionId} from 'types';
import {
  HeroSection,
  HeroInner,
  HeroText,
  HeroEyebrow,
  HeroHeadline,
  HeroBody,
  HeroCtas,
  HeroCtaPrimary,
  HeroCtaSecondary,
  HeroImageWrapper,
  HeroImage,
} from './Hero.styles';

const scrollTo = (id: SectionId) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({behavior: 'smooth'});
};

export const Hero = () => {
  const intl = useIntl();
  const reducedMotion = useReducedMotion();

  const textAnimProps = reducedMotion
    ? {}
    : {
        variants: fadeUp,
        initial: 'hidden' as const,
        animate: 'visible' as const,
      };

  const imageAnimProps = reducedMotion
    ? {}
    : {
        variants: fadeIn,
        initial: 'hidden' as const,
        animate: 'visible' as const,
        transition: {delay: 0.2},
      };

  const handlePrimary = useCallback(() => scrollTo('games'), []);
  const handleSecondary = useCallback(() => scrollTo('studio'), []);

  return (
    <HeroSection id="hero">
      <HeroInner>
        <HeroText {...textAnimProps}>
          <HeroEyebrow>{intl.formatMessage({id: 'heroEyebrow'})}</HeroEyebrow>
          <HeroHeadline>
            {intl.formatMessage({id: 'heroHeadline'})}
          </HeroHeadline>
          <HeroBody>{intl.formatMessage({id: 'heroBody'})}</HeroBody>
          <HeroCtas>
            <HeroCtaPrimary onClick={handlePrimary}>
              {intl.formatMessage({id: 'heroCtaPrimary'})}
            </HeroCtaPrimary>
            <HeroCtaSecondary onClick={handleSecondary}>
              {intl.formatMessage({id: 'heroCtaSecondary'})}
            </HeroCtaSecondary>
          </HeroCtas>
        </HeroText>

        <HeroImageWrapper {...imageAnimProps}>
          <HeroImage
            src={chicmouseImage}
            alt="ChicMouse Studio"
            width={520}
            height={520}
            loading="eager"
          />
        </HeroImageWrapper>
      </HeroInner>
    </HeroSection>
  );
};
