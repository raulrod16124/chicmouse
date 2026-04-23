import {useIntl} from 'react-intl';
import {
  AboutUsContent,
  AboutUsWrapper,
  CharacterAvatar,
  CharacterInfoWrapper,
  CharacterText,
  CharacterTextContent,
  CharacterTitle,
} from './AboutUs.styles';
import {useWindowSize} from 'hooks/useWindowSize';
import {
  designerDescriptions,
  programmerDescriptions,
} from './utils/teamDescriptions';
import {useContext} from 'react';
import {LanguageContext} from 'context/LanguageContext';
import {colors} from 'tokens/colors';
import {motion} from 'framer-motion';
import {fadeUp} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';

export const AboutUs = () => {
  const intl = useIntl();
  const {smallScreenDetected} = useWindowSize();
  const {language} = useContext(LanguageContext);
  const reducedMotion = useReducedMotion();

  const animProps = reducedMotion
    ? {}
    : {
        variants: fadeUp,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: {once: true, margin: '-60px'},
      };

  return (
    <AboutUsWrapper>
      <AboutUsContent>
        <motion.div {...animProps}>
          <CharacterInfoWrapper>
            <CharacterAvatar accentColor={colors.accentYellow}>
              TP
            </CharacterAvatar>
            <CharacterTextContent>
              <CharacterTitle padding="0 0 0 20px">
                {intl.formatMessage({id: 'programmer'})}
              </CharacterTitle>
              {programmerDescriptions(language)}
            </CharacterTextContent>
          </CharacterInfoWrapper>
        </motion.div>

        <motion.div
          {...animProps}
          {...(!reducedMotion && {transition: {delay: 0.1}})}>
          <CharacterInfoWrapper>
            <CharacterAvatar accentColor={colors.accentBlue}>
              TD
            </CharacterAvatar>
            <CharacterTextContent>
              <CharacterTitle padding="0 0 0 20px">
                {intl.formatMessage({id: 'designer'})}
              </CharacterTitle>
              {designerDescriptions(language)}
            </CharacterTextContent>
          </CharacterInfoWrapper>
        </motion.div>
      </AboutUsContent>
    </AboutUsWrapper>
  );
};
