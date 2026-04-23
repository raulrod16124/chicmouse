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

export const AboutUs = () => {
  const intl = useIntl();
  const {smallScreenDetected} = useWindowSize();
  const {language} = useContext(LanguageContext);

  return (
    <AboutUsWrapper>
      <AboutUsContent>
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

        <CharacterInfoWrapper>
          <CharacterAvatar accentColor={colors.accentBlue}>TD</CharacterAvatar>
          <CharacterTextContent>
            <CharacterTitle padding="0 0 0 20px">
              {intl.formatMessage({id: 'designer'})}
            </CharacterTitle>
            {designerDescriptions(language)}
          </CharacterTextContent>
        </CharacterInfoWrapper>
      </AboutUsContent>
    </AboutUsWrapper>
  );
};
