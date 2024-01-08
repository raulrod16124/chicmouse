import { useIntl } from "react-intl";
import {
  AboutUsContent,
  AboutUsWrapper,
  CharacterImage,
  CharacterInfoWrapper,
  CharacterText,
  CharacterTextContent,
  CharacterTitle,
} from "./AboutUs.styles";
import programmer from "assets/programmer.png";
import designer from "assets/designer.png";
import { useWindowSize } from "hooks/useWindowSize";
import {
  designerDescriptions,
  programmerDescriptions,
} from "./utils/teamDescriptions";
import { useContext } from "react";
import { LanguageContext } from "context/LanguageContext";

export const AboutUs = () => {
  const intl = useIntl();
  const { smallScreenDetected } = useWindowSize();
  const { language } = useContext(LanguageContext);

  return (
    // <AboutUsWrapper className="animate__animated animate__zoomIn animate__delay-0.01s" >
    <AboutUsWrapper>
      <AboutUsContent>
        <CharacterInfoWrapper>
          <CharacterImage src={programmer} alt="the programmer" />
          <CharacterTextContent>
            <CharacterTitle padding="0 0 0 20px">
              {intl.formatMessage({ id: "programmer" })}
            </CharacterTitle>
            {programmerDescriptions(language)}
          </CharacterTextContent>
        </CharacterInfoWrapper>

        <CharacterInfoWrapper>
          <CharacterImage src={designer} alt="the designer" />
          <CharacterTextContent>
            <CharacterTitle padding="0 0 0 20px">
              {intl.formatMessage({ id: "designer" })}
            </CharacterTitle>
            {designerDescriptions(language)}
          </CharacterTextContent>
        </CharacterInfoWrapper>
      </AboutUsContent>
    </AboutUsWrapper>
  );
};
