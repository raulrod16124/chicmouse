import { Apps } from "utils"
import { AppContent, AppIcon, AppWrappercontent, AppInfoContent, AppTextContent, AppTitle, AppsList, AppsWrapper, AppText } from "./Applications.styles"
import { AppInfo } from "types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useIntl } from "react-intl";
import { useWindowSize } from "hooks/useWindowSize";
import ClipLoader from "react-spinners/ClipLoader";

export const Applications = () => {
    const intl = useIntl();

    const { smallScreenDetected } = useWindowSize();
    

    const renderApp = ({ name, icon, stars, downloadsNumber}: AppInfo) => {
        const notReadyText = intl.formatMessage({id:"comingSoon"});
        const nameText = name === "notReady" ? notReadyText : name;
        const hoverCondition = name !== "notReady" && !smallScreenDetected;
        const hoverResult =  hoverCondition? "active" : " inactive";

        return (
            <AppContent key={name} hover={hoverResult} >
                { !icon ? (
                    <ClipLoader
                        color={"#000"}
                        loading={!!icon}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                ) : (
                    <AppIcon src={icon} alt={`${name}-icon`} />
                ) }

                <AppInfoContent>
                    <AppTitle>{nameText}</AppTitle>
                    <AppWrappercontent>
                        <AppTextContent>
                            <AppText>{stars}</AppText>
                            <FontAwesomeIcon icon={faStar} size={"2xs"} />
                        </AppTextContent>
                        <AppTextContent>
                            <AppText>{downloadsNumber}</AppText>
                            <AppText>{intl.formatMessage({id:"downloads"})}</AppText>
                        </AppTextContent>
                    </AppWrappercontent>
                    
                    <button disabled={name === "notReady"} >Ver más</button>
                </AppInfoContent>
            </AppContent>
        )
    }

  return (
    <AppsWrapper className="animate__animated animate__zoomIn animate__delay-0.01s" >
        <AppsList>
            { Apps.map( (app: AppInfo) => renderApp(app)) }
        </AppsList>
    </AppsWrapper>
  )
}
