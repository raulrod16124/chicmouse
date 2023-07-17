import { useNavigate, useParams } from "react-router-dom";
import { AppInfo, IAppPage } from "types";
import { AppPages } from "utils";
import { AppDescription, AppImage, AppImages, AppPageWrapper, AppText, AppTitle, BackArrowButton, BodyInfoContent, ImagesContent, SideInfoContent, SideTextContent } from "./AppPage.styles";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { useIntl } from "react-intl";
import { Button } from "common/Button";
import { useWindowSize } from "hooks/useWindowSize";
import { AppTextContent } from "../Applications.styles";

export default function AppPage() {
    const intl = useIntl();
    const navigate = useNavigate();
    const { id: appName } = useParams();
    const { smallScreenDetected, windowWidth } = useWindowSize();
    
    const appData = AppPages.filter( (app:IAppPage) => app.name === appName )[0];

    const renderAppImages = (img: string) => {
        return (
            <AppImages src={img} alt="app-screenshot" />
        );
    }

    const mobileSize = windowWidth < 450 ? [100, 30] : [140, 35];

    if(!appData){
        return (
            <ClipLoader
                color={"#089289"}
                loading={!appData}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        )
    }

    return (
        <AppPageWrapper className="animate__animated animate__zoomIn animate__delay-0.01s" >
            <BackArrowButton onClick={() => navigate("/applications")} >
                <FontAwesomeIcon icon={faArrowLeft} size={"2x"} color="#089289" />
            </BackArrowButton>
            <SideInfoContent>
                <AppImage src={appData.icon} alt={`${appData.name}-icon`} />
                <SideTextContent>
                    { !smallScreenDetected &&
                        <AppText margin={smallScreenDetected ? "5px" :"25px 0"}>
                            {appData.stars}
                            <FontAwesomeIcon icon={faStar} size={"2xs"} />
                        </AppText>
                    }
                    <AppTitle>
                        {appData.name.toUpperCase()}
                    </AppTitle>
                    <AppTextContent>
                        { smallScreenDetected &&
                            <AppText margin={smallScreenDetected ? "5px" :"25px 0"}>
                                {appData.stars}
                                <FontAwesomeIcon icon={faStar} size={"2xs"} />
                            </AppText>
                        }
                        <AppText fontSize="15px" margin={smallScreenDetected ? "10px" :"25px 0"}>
                            {appData.downloadsNumber}
                            {intl.formatMessage({id:"downloads"})}
                        </AppText>
                    </AppTextContent>

                    <Button
                        isExternalLink={true}
                        externalUrl="https://play.google.com/store/games?hl=es_419&gl=US"
                        content={intl.formatMessage({id:"download"})} 
                        disabled={appData.name === "notReady"}
                        width={smallScreenDetected ? mobileSize[0] : 200}
                        height={smallScreenDetected ? mobileSize[1] : 50}
                        align="center"
                        background="#089289"
                        color="#fff"
                        fontSize={14}
                        margin={smallScreenDetected ? "10px" :"25px 0"}
                    />
                </SideTextContent>
            </SideInfoContent>
            <BodyInfoContent>
                <ImagesContent>
                    {appData.images.map( (img: string) => {
                        return renderAppImages(img)
                    })}
                </ImagesContent>
                <AppDescription margin={smallScreenDetected ? "50px 0 25px 0" : "100px 0 5px 0"}>
                    {intl.formatMessage({id:"matchupDescriptionP1"})}
                </AppDescription>
                <AppDescription>
                    {intl.formatMessage({id:"matchupDescriptionP2"})}
                </AppDescription>
            </BodyInfoContent>
        </AppPageWrapper>
    )
}
