import {useNavigate, useParams} from 'react-router-dom';
import {useIntl} from 'react-intl';
import {motion, type Variants} from 'framer-motion';
import {ArrowLeft, Layers, Trophy, Heart} from 'lucide-react';
import {ClipLoader} from 'react-spinners';
import {fadeUp, staggerContainer} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';
import {AppPages} from 'utils';
import {colors} from 'tokens/colors';
import type {IAppPage} from 'types';
import spotlightImg from 'assets/stellar_merge_product_spotlight.webp';
import {
  GamePageWrapper,
  GameHeroSection,
  BackButtonWrapper,
  BackButton,
  GameHeroInner,
  GameHeroContent,
  GameGenreBadge,
  GameHeroHeader,
  GameHeroIcon,
  GameHeroName,
  GameHeroTagline,
  AvailableOnLabel,
  HeroStoreBadges,
  HeroStoreBadge,
  BadgeLabel,
  BadgeName,
  GameHeroImageWrapper,
  GameHeroImage,
  GameSection,
  GameSectionInner,
  GameSectionEyebrow,
  ScreenshotScroller,
  ScreenshotItem,
  FeatureGrid,
  FeatureCard,
  FeatureIconWrapper,
  FeatureTitle,
  FeatureBody,
  AboutColumns,
  AboutParagraph,
  LegalRow,
  LegalLink,
  GamePageLoader,
} from './GamePage.styles';

const heroImageVariants: Variants = {
  hidden: {opacity: 0, x: 40},
  visible: {opacity: 1, x: 0, transition: {duration: 0.6, delay: 0.15}},
};

const features = [
  {
    icon: <Layers size={22} />,
    titleKey: 'stellarMergeFeature1Title',
    bodyKey: 'stellarMergeFeature1Body',
  },
  {
    icon: <Trophy size={22} />,
    titleKey: 'stellarMergeFeature2Title',
    bodyKey: 'stellarMergeFeature2Body',
  },
  {
    icon: <Heart size={22} />,
    titleKey: 'stellarMergeFeature3Title',
    bodyKey: 'stellarMergeFeature3Body',
  },
];

export default function GamePage() {
  const intl = useIntl();
  const navigate = useNavigate();
  const {id: appName} = useParams();
  const reducedMotion = useReducedMotion();

  const appData = AppPages.find((app: IAppPage) => app.name === appName);

  if (!appData) {
    return (
      <GamePageLoader>
        <ClipLoader
          color={colors.accentBlue}
          loading={true}
          size={50}
          aria-label="Loading"
        />
      </GamePageLoader>
    );
  }

  const heroContentAnimProps = reducedMotion
    ? {}
    : {
        variants: fadeUp,
        initial: 'hidden' as const,
        animate: 'visible' as const,
      };

  const heroImageAnimProps = reducedMotion
    ? {}
    : {
        variants: heroImageVariants,
        initial: 'hidden' as const,
        animate: 'visible' as const,
      };

  const staggerProps = reducedMotion
    ? {}
    : {
        variants: staggerContainer,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: {once: true, margin: '-60px'} as const,
      };

  const cardAnimProps = reducedMotion
    ? {}
    : {
        variants: fadeUp,
      };

  const sectionAnimProps = reducedMotion
    ? {}
    : {
        variants: fadeUp,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: {once: true, margin: '-60px'} as const,
      };

  return (
    <GamePageWrapper>
      {/* ── Hero ──────────────────────────────────────────── */}
      <GameHeroSection>
        <BackButtonWrapper>
          <BackButton onClick={() => navigate(-1)}>
            <ArrowLeft size={16} />
            {intl.formatMessage({id: 'gameDetailBack'})}
          </BackButton>
        </BackButtonWrapper>

        <GameHeroInner>
          {/* Left — game info */}
          <GameHeroContent {...heroContentAnimProps}>
            <GameGenreBadge>
              {intl.formatMessage({id: 'gameDetailGenre'})}
            </GameGenreBadge>

            <GameHeroHeader>
              <GameHeroIcon
                src={appData.icon}
                alt={`${appData.name} icon`}
                loading="eager"
              />
              <GameHeroName>{appData.name}</GameHeroName>
            </GameHeroHeader>

            <GameHeroTagline>
              {intl.formatMessage({id: 'stellarMergeTagline'})}
            </GameHeroTagline>

            <div>
              <AvailableOnLabel>
                {intl.formatMessage({id: 'gameDetailAvailableOn'})}
              </AvailableOnLabel>
              <HeroStoreBadges>
                <HeroStoreBadge
                  href="#"
                  $disabled
                  aria-label="Download on the App Store"
                  aria-disabled="true">
                  <BadgeLabel>
                    {intl.formatMessage({id: 'downloadOn'})}
                  </BadgeLabel>
                  <BadgeName>App Store</BadgeName>
                </HeroStoreBadge>

                <HeroStoreBadge
                  href={appData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play">
                  <BadgeLabel>{intl.formatMessage({id: 'getItOn'})}</BadgeLabel>
                  <BadgeName>Google Play</BadgeName>
                </HeroStoreBadge>
              </HeroStoreBadges>
            </div>
          </GameHeroContent>

          {/* Right — spotlight image */}
          <GameHeroImageWrapper {...heroImageAnimProps}>
            <GameHeroImage
              src={spotlightImg}
              alt={`${appData.name} spotlight`}
              loading="eager"
            />
          </GameHeroImageWrapper>
        </GameHeroInner>
      </GameHeroSection>

      {/* ── Screenshots ───────────────────────────────────── */}
      <GameSection $alt>
        <GameSectionInner as={motion.div} {...sectionAnimProps}>
          <GameSectionEyebrow>
            {intl.formatMessage({id: 'gameDetailScreenshots'})}
          </GameSectionEyebrow>
          <ScreenshotScroller>
            {appData.images.map((img: string, i: number) => (
              <ScreenshotItem
                key={img}
                src={img}
                alt={`${appData.name} screenshot ${i + 1}`}
                loading="lazy"
              />
            ))}
          </ScreenshotScroller>
        </GameSectionInner>
      </GameSection>

      {/* ── Features ──────────────────────────────────────── */}
      <GameSection>
        <GameSectionInner>
          <GameSectionEyebrow as={motion.p} {...sectionAnimProps}>
            {intl.formatMessage({id: 'gameDetailFeatures'})}
          </GameSectionEyebrow>
          <FeatureGrid as={motion.div} {...staggerProps}>
            {features.map(f => (
              <FeatureCard key={f.titleKey} {...cardAnimProps}>
                <FeatureIconWrapper>{f.icon}</FeatureIconWrapper>
                <FeatureTitle>
                  {intl.formatMessage({id: f.titleKey})}
                </FeatureTitle>
                <FeatureBody>{intl.formatMessage({id: f.bodyKey})}</FeatureBody>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </GameSectionInner>
      </GameSection>

      {/* ── About ─────────────────────────────────────────── */}
      <GameSection $alt>
        <GameSectionInner as={motion.div} {...sectionAnimProps}>
          <GameSectionEyebrow>
            {intl.formatMessage({id: 'gameDetailAbout'})}
          </GameSectionEyebrow>
          <AboutColumns>
            <AboutParagraph>
              {intl.formatMessage({id: 'stellarMergeDescP1'})}
            </AboutParagraph>
            <AboutParagraph>
              {intl.formatMessage({id: 'stellarMergeDescP2'})}
            </AboutParagraph>
          </AboutColumns>
          {/* TODO: Pending to rewrite those files.
            <LegalRow>
                <LegalLink to={`/applications/${appName}/privacy-policy`}>
                {intl.formatMessage({id: 'privacyPolicy'})}
                </LegalLink>
                <LegalLink to={`/applications/${appName}/terms-and-conditions`}>
                {intl.formatMessage({id: 'termsAndConditions'})}
                </LegalLink>
            </LegalRow> 
          */}
        </GameSectionInner>
      </GameSection>
    </GamePageWrapper>
  );
}
