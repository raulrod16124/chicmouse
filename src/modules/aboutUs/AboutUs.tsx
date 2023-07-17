import { useIntl } from "react-intl"
import { 
    AboutUsContent, 
    AboutUsWrapper, 
    CharacterImage, 
    CharacterInfoWrapper, 
    CharacterText, 
    CharacterTextContent, 
    CharacterTitle
} from "./AboutUs.styles"
import mouseCharacter1 from "assets/mouseCharacter_1.png";
import mouseCharacter2 from "assets/mouseCharacter_2.png";
import { useWindowSize } from "hooks/useWindowSize";

export const AboutUs = () => {
    const intl = useIntl();
    const { smallScreenDetected } = useWindowSize();

    return (
        <AboutUsWrapper>
            <AboutUsContent>
                <CharacterInfoWrapper>
                    <CharacterImage src={mouseCharacter1} alt="mouse-character-1" />
                    <CharacterTextContent>
                        <CharacterTitle padding="0 0 0 20px">
                            {intl.formatMessage({id:"programmer"})}
                        </CharacterTitle>
                        <CharacterText padding="0 100px 0 20px">
                            {intl.formatMessage({id:"character1Info1"})}
                        </CharacterText>
                        <CharacterText padding="0 100px 0 20px">
                            {intl.formatMessage({id:"character1Info2"})}
                        </CharacterText>
                    </CharacterTextContent>
                </CharacterInfoWrapper>

                <CharacterInfoWrapper>
                    {smallScreenDetected && 
                        <CharacterImage src={mouseCharacter2} alt="mouse-character-2" />
                    }
                    <CharacterTextContent>
                        <CharacterTitle 
                            textAlign={smallScreenDetected ? "left" : "right"} 
                            padding={
                                smallScreenDetected ? "0 0 0 20px" : "50px 50px 0 0"
                            }
                        >
                            {intl.formatMessage({id:"designer"})}
                        </CharacterTitle>
                        <CharacterText padding={
                           smallScreenDetected ? "0 100px 0 20px" : "0 20px 0 100px"
                        }>
                            {intl.formatMessage({id:"character2Info1"})}
                        </CharacterText>
                        <CharacterText padding={
                           smallScreenDetected ? "0 100px 0 20px" : "0 20px 0 100px"
                        }>
                            {intl.formatMessage({id:"character2Info2"})}
                        </CharacterText>
                    </CharacterTextContent>
                    {!smallScreenDetected && 
                        <CharacterImage src={mouseCharacter2} alt="mouse-character-2" />
                    }
                </CharacterInfoWrapper>
            </AboutUsContent>
        </AboutUsWrapper>
    )
}
