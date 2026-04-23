import { useIntl } from "react-intl";
import {
  HomeContainer,
  HomeImage,
  HomeImageWrapper,
  HomeText,
  HomeTitle,
  HomeWrapper,
} from "./Home.styles";
import { useWindowSize } from "hooks/useWindowSize";
import chicmouseImage from "assets/chicmouseImage.png";
import "animate.css";

export const Home = () => {
  const intl = useIntl();
  const { smallScreenDetected } = useWindowSize();

  const renderHomeContent = (smallWindow: boolean) => {
    if (smallWindow) {
      return (
        <>
          <HomeImageWrapper>
            <HomeImage src={chicmouseImage} alt="elegant-mouse" />
          </HomeImageWrapper>
          <HomeTitle>{intl.formatMessage({ id: "homeTitle" })}</HomeTitle>
          <HomeText>{intl.formatMessage({ id: "homeText" })}</HomeText>
        </>
      );
    }
    return (
      <>
        <div>
          <HomeTitle>{intl.formatMessage({ id: "homeTitle" })}</HomeTitle>
          <HomeText>{intl.formatMessage({ id: "homeText" })}</HomeText>
        </div>
        <HomeImageWrapper>
          <HomeImage src={chicmouseImage} alt="elegant-mouse" />
        </HomeImageWrapper>
      </>
    );
  };

  return (
    <HomeWrapper data-testid="home-page-id">
      <HomeContainer className="animate__animated animate__zoomIn animate__delay-0.01s">
        {renderHomeContent(smallScreenDetected)}
      </HomeContainer>
    </HomeWrapper>
  );
};
