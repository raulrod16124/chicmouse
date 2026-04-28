import {useIntl} from 'react-intl';
import {motion} from 'framer-motion';
import {ArrowRight} from 'lucide-react';
import {cardEntrance} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';
import {AppPages} from 'utils';
import spotlightImg from 'assets/stellar_merge_product_spotlight.webp';
import {
  FeaturedGameSection,
  FeaturedGameInner,
  SectionEyebrow,
  GameCard,
  ProductSpotlightWrapper,
  ProductSpotlightImage,
  GameInfo,
  GameHeader,
  GameIcon,
  GameName,
  GameTagline,
  GameDescription,
  StoreBadges,
  StoreBadge,
  StoreBadgeLabel,
  StoreBadgeName,
  GameCta,
} from './FeaturedGame.styles';

export const FeaturedGame = () => {
  const intl = useIntl();
  const reducedMotion = useReducedMotion();

  const game = AppPages[0];
  if (!game || game.name === 'notReady') return null;

  const cardAnimProps = reducedMotion
    ? {}
    : {
        variants: cardEntrance,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: {once: true, margin: '-80px'},
      };

  return (
    <FeaturedGameSection id="games">
      <FeaturedGameInner>
        <SectionEyebrow>
          {intl.formatMessage({id: 'featuredGameEyebrow'})}
        </SectionEyebrow>

        <GameCard {...cardAnimProps}>
          {/* Left — product spotlight image */}
          <ProductSpotlightWrapper
            as={motion.div}
            {...(reducedMotion
              ? {}
              : {
                  initial: {opacity: 0, x: -40},
                  whileInView: {opacity: 1, x: 0},
                  transition: {duration: 0.6, ease: 'easeOut'},
                  viewport: {once: true, margin: '-60px'},
                })}>
            <ProductSpotlightImage
              src={spotlightImg}
              alt={`${game.name} product spotlight`}
              loading="lazy"
            />
          </ProductSpotlightWrapper>

          {/* Right — game info */}
          <GameInfo>
            <GameHeader>
              <GameIcon
                src={game.icon}
                alt={`${game.name} icon`}
                width={80}
                height={80}
                loading="lazy"
              />
              <GameName>{game.name}</GameName>
            </GameHeader>

            <GameTagline>
              {intl.formatMessage({id: 'stellarMergeTagline'})}
            </GameTagline>

            <GameDescription>
              {intl.formatMessage({id: 'matchupDescriptionP1'})}
            </GameDescription>
            <GameDescription>
              {intl.formatMessage({id: 'matchupDescriptionP2'})}
            </GameDescription>

            <StoreBadges>
              <StoreBadge
                href="#"
                aria-label="Download on the App Store"
                aria-disabled="true"
                style={{opacity: 0.45, pointerEvents: 'none'}}>
                <StoreBadgeLabel>
                  {intl.formatMessage({id: 'downloadOn'})}
                </StoreBadgeLabel>
                <StoreBadgeName>App Store</StoreBadgeName>
              </StoreBadge>

              <StoreBadge
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play">
                <StoreBadgeLabel>
                  {intl.formatMessage({id: 'getItOn'})}
                </StoreBadgeLabel>
                <StoreBadgeName>Google Play</StoreBadgeName>
              </StoreBadge>
            </StoreBadges>

            <GameCta href={`/applications/${encodeURIComponent(game.name)}`}>
              {intl.formatMessage({id: 'exploreGameDetails'})}
              <ArrowRight size={16} />
            </GameCta>
          </GameInfo>
        </GameCard>
      </FeaturedGameInner>
    </FeaturedGameSection>
  );
};
