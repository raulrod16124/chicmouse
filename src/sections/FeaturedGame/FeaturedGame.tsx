import {useIntl} from 'react-intl';
import {motion} from 'framer-motion';
import {ExternalLink} from 'lucide-react';
import {cardEntrance, staggerContainer, fadeUp} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';
import {AppPages} from 'utils';
import {
  FeaturedGameSection,
  FeaturedGameInner,
  SectionEyebrow,
  GameCard,
  GameInfo,
  GameHeader,
  GameIcon,
  GameTitleBlock,
  GameName,
  GamePlatformBadge,
  GameDescription,
  GameCta,
  GameScreenshots,
  Screenshot,
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
          <GameInfo>
            <GameHeader>
              <GameIcon
                src={game.icon}
                alt={`${game.name} icon`}
                width={72}
                height={72}
                loading="lazy"
              />
              <GameTitleBlock>
                <GameName>{game.name}</GameName>
                <GamePlatformBadge>
                  {intl.formatMessage({id: 'mobileApp'})}
                </GamePlatformBadge>
              </GameTitleBlock>
            </GameHeader>

            <GameDescription>
              {intl.formatMessage({id: 'matchupDescriptionP1'})}
            </GameDescription>
            <GameDescription>
              {intl.formatMessage({id: 'matchupDescriptionP2'})}
            </GameDescription>

            <GameCta href={game.url} target="_blank" rel="noopener noreferrer">
              {intl.formatMessage({id: 'learnMore'})}
              <ExternalLink size={14} />
            </GameCta>
          </GameInfo>

          <motion.div
            {...(reducedMotion
              ? {}
              : {
                  variants: staggerContainer,
                  initial: 'hidden' as const,
                  whileInView: 'visible' as const,
                  viewport: {once: true, margin: '-60px'},
                })}>
            <GameScreenshots>
              {game.images.slice(0, 4).map((src, i) => (
                <motion.div
                  key={i}
                  {...(reducedMotion ? {} : {variants: fadeUp})}>
                  <Screenshot
                    src={src}
                    alt={`${game.name} screenshot ${i + 1}`}
                    loading="lazy"
                    width={180}
                    height={320}
                  />
                </motion.div>
              ))}
            </GameScreenshots>
          </motion.div>
        </GameCard>
      </FeaturedGameInner>
    </FeaturedGameSection>
  );
};
