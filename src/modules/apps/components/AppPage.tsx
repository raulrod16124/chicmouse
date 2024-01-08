import { useNavigate, useParams } from "react-router-dom";
import { AppInfo, IAppPage } from "types";
import { AppPages } from "utils";
import {
  AppDescription,
  AppImage,
  AppImages,
  AppPageWrapper,
  AppTextContent,
  AppText,
  AppTitle,
  BackArrowButton,
  BodyInfoContent,
  ImagesContent,
  SideInfoContent,
  SideTextContent,
  TextLink,
  TextLinksWrapper,
} from "./AppPage.styles";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faDownload,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useIntl } from "react-intl";
import { Button } from "common/Button";
import { useWindowSize } from "hooks/useWindowSize";
import theme from "./../../../theme.json";
import { appDescriptions } from "../utils/appDescriptions";
import { useContext } from "react";
import { LanguageContext } from "context/LanguageContext";

export default function AppPage() {
  const intl = useIntl();
  const navigate = useNavigate();
  const { id: appName } = useParams();
  const { smallScreenDetected, windowWidth } = useWindowSize();
  const { language } = useContext(LanguageContext);

  const appData = AppPages.filter((app: IAppPage) => app.name === appName)[0];

  const renderAppImages = (img: string) => {
    return <AppImages key={img} src={img} alt="app-screenshot" />;
  };

  const mobileSize = windowWidth < 450 ? [100, 30] : [140, 35];

  if (!appData) {
    return (
      <ClipLoader
        color={theme.colors.greenDark}
        loading={!appData}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  return (
    // <AppPageWrapper className="animate__animated animate__zoomIn animate__delay-0.01s" >
    <AppPageWrapper>
      <BackArrowButton onClick={() => navigate("/applications")}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={"2x"}
          color={theme.colors.blue}
        />
      </BackArrowButton>
      <SideInfoContent>
        <AppImage src={appData.icon} alt={`${appData.name}-icon`} />
        <SideTextContent>
          <AppTitle>{appData.name.toUpperCase()}</AppTitle>
          <AppTextContent>
            <AppText margin={smallScreenDetected ? "5px" : "25px 0"}>
              {appData.stars}
              <FontAwesomeIcon
                icon={faStar}
                size={"2xs"}
                style={{ marginLeft: "5px" }}
                color={theme.colors.greenLighter}
              />
            </AppText>
            <AppText margin={smallScreenDetected ? "5px" : "25px 0"}>
              {appData.downloadsNumber}
              <FontAwesomeIcon
                icon={faDownload}
                size={"2xs"}
                style={{ marginLeft: "5px" }}
              />
            </AppText>
          </AppTextContent>

          <Button
            isExternalLink={true}
            externalUrl={
              appData.url ||
              "https://play.google.com/store/games?hl=es_419&gl=US"
            }
            content={intl.formatMessage({ id: "download" })}
            disabled={appData.name === "notReady"}
            width={smallScreenDetected ? mobileSize[0] : 180}
            height={smallScreenDetected ? mobileSize[1] : 50}
            align="center"
            background={theme.colors.greenDarken}
            color={theme.colors.white}
            fontSize={14}
            margin={smallScreenDetected ? "10px" : "25px 0"}
          />
          <TextLinksWrapper>
            <TextLink to={`/applications/${appName}/privacy-policy`}>
              {intl.formatMessage({ id: "privacyPolicy" })}
            </TextLink>
            <TextLink to={`/applications/${appName}/terms-and-conditions`}>
              {intl.formatMessage({ id: "termsAndConditions" })}
            </TextLink>
          </TextLinksWrapper>
        </SideTextContent>
      </SideInfoContent>
      <BodyInfoContent>
        <ImagesContent>
          {appData.images.map((img: string) => {
            return renderAppImages(img);
          })}
        </ImagesContent>
        <AppDescription
          margin={smallScreenDetected ? "50px 0 25px 0" : "50px 0 100px 0"}
        >
          {appDescriptions(appName, language)}
        </AppDescription>
      </BodyInfoContent>
    </AppPageWrapper>
  );
}
