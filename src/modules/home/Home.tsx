import { useIntl } from "react-intl";
import { HomeContainer, HomeImage, HomeText, HomeTitle, HomeWrapper } from "./Home.styles"
import homeImage from "assets/homeImage.png";

export const Home = () => {
  const intl = useIntl();

  return (
    <HomeWrapper>
      <HomeContainer>

        <HomeImage src={homeImage} alt="elegant-mouse" />

        <HomeTitle>CHIC MOUSE</HomeTitle>

        <HomeText>{intl.formatMessage({id:"homeText"})}</HomeText>

      </HomeContainer>
    </HomeWrapper>
  )
}
