import { AppPages } from "utils"
import { AppContent, AppImage, AppWrappercontent, AppInfoContent, AppTextContent, AppTitle, AppsList, AppsWrapper, AppText } from "./Applications.styles"
import { AppInfo } from "types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useIntl } from "react-intl";
import { useWindowSize } from "hooks/useWindowSize";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "common/Button";
import { useNavigate } from "react-router-dom";

export const Applications = () => {
    const intl = useIntl();

    const { smallScreenDetected } = useWindowSize();
    const navigate = useNavigate();

    const renderApp = ({ name, icon, stars, downloadsNumber}: AppInfo) => {
        const notReadyText = intl.formatMessage({id:"comingSoon"});
        const nameText = name === "notReady" ? notReadyText : name;
        const hoverCondition = name !== "notReady" && !smallScreenDetected;
        const hoverResult =  hoverCondition? "active" : " inactive";

        return (
            <AppContent 
                key={name} 
                hover={hoverResult} 
                cursor={smallScreenDetected ? "pointer" : "default"}
                onClick={() => 
                    smallScreenDetected && navigate(`/applications/${name.toLowerCase()}`)
                }
            >
                { !icon ? (
                    <ClipLoader
                        color={"#089289"}
                        loading={!!icon}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                ) : (
                    <AppImage src={icon} alt={`${name}-icon`} />
                ) }

                <AppInfoContent opacity={name === "notReady" ? 0.5 : 1}>
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

                    { !smallScreenDetected && 
                        <Button
                            content={intl.formatMessage({id:"seeMore"})} 
                            disabled={name === "notReady"}
                            width={100}
                            align="flex-end"
                            background="#089289"
                            color="#fff"
                            fontSize={14}
                            onClick={()=>navigate(`/applications/${name.toLowerCase()}`)}
                        />
                    }
                </AppInfoContent>
            </AppContent>
        )
    }

  return (
    <AppsWrapper className="animate__animated animate__zoomIn animate__delay-0.01s" >
        <AppsList>
            { AppPages.map( (app: AppInfo) => renderApp(app)) }
        </AppsList>
    </AppsWrapper>
  )
}
