import { AppPages } from "utils";
import {
  AppContent,
  AppImage,
  AppWrappercontent,
  AppInfoContent,
  AppTextContent,
  AppTitle,
  AppsList,
  AppsWrapper,
  AppText,
} from "./Applications.styles";
import { AppInfo } from "types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useIntl } from "react-intl";
import { useWindowSize } from "hooks/useWindowSize";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "common/Button";
import { useNavigate } from "react-router-dom";
import theme from "../../theme.json";

export const Applications = () => {
  const intl = useIntl();

  const { smallScreenDetected } = useWindowSize();
  const navigate = useNavigate();

  const renderApp = ({ name, icon, stars, downloadsNumber }: AppInfo) => {
    const appReady = name !== "notReady";
    const notReadyText = intl.formatMessage({ id: "comingSoon" });
    const nameText = !appReady ? notReadyText : name;
    const hoverCondition = appReady && !smallScreenDetected;
    const hoverResult = hoverCondition ? "active" : " inactive";

    const appName = nameText.charAt(0).toUpperCase() + nameText.slice(1);

    return (
      <AppContent
        key={name}
        hover={hoverResult}
        cursor={smallScreenDetected ? "pointer" : "default"}
        onClick={() =>
          smallScreenDetected &&
          name !== "notReady" &&
          navigate(`/applications/${name.toLowerCase()}`)
        }
      >
        {appReady && <AppImage src={icon} alt={`${name}-icon`} />}

        <AppInfoContent opacity={name === "notReady" ? 0.5 : 1}>
          <AppTitle>{appName}</AppTitle>
          <AppTextContent>
            <AppText>{intl.formatMessage({ id: "mobileApp" })}</AppText>
          </AppTextContent>
          <AppWrappercontent>
            <AppTextContent>
              <AppText>{stars}</AppText>
              <FontAwesomeIcon
                icon={faStar}
                size={"2xs"}
                color={theme.colors.greenLighter}
              />
            </AppTextContent>
            {!smallScreenDetected && (
              <Button
                content={intl.formatMessage({ id: "seeMore" })}
                disabled={name === "notReady"}
                width={100}
                align="flex-end"
                background={theme.colors.greenDarken}
                color={theme.colors.white}
                fontSize={14}
                onClick={() => navigate(`/applications/${name.toLowerCase()}`)}
              />
            )}
          </AppWrappercontent>
        </AppInfoContent>
      </AppContent>
    );
  };

  return (
    // <AppsWrapper className="animate__animated animate__zoomIn animate__delay-0.01s" >
    <AppsWrapper>
      <AppsList>{AppPages.map((app: AppInfo) => renderApp(app))}</AppsList>
    </AppsWrapper>
  );
};
