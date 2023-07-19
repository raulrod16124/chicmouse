import { useIntl } from "react-intl";
import { 
  ErrorPageContent, 
  ErrorPageImg, 
  ErrorPageText, 
  ErrorPageWrapper, 
  RedirectButton
} from "./ErrorPage.styles"
import mouseConfusedImage from "assets/mouseConfusedImage.png";

export const ErrorPage = () => {
  const intl = useIntl();

  return (
    <ErrorPageWrapper>
      <ErrorPageContent>
        <ErrorPageImg src={mouseConfusedImage} alt="mouse-confused-image" />
        <ErrorPageText>
          {intl.formatMessage({id:"wrongPath"})}
        </ErrorPageText>
        <RedirectButton to={"/"}>
          {intl.formatMessage({id:"goHome"})}
        </RedirectButton>
      </ErrorPageContent>
    </ErrorPageWrapper>
  )
}
