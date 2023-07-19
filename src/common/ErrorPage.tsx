import { 
  ErrorPageContent, 
  ErrorPageImg, 
  ErrorPageText, 
  ErrorPageWrapper, 
  RedirectButton
} from "./ErrorPage.styles"
import mouseConfusedImage from "assets/mouseConfusedImage.png";

export const ErrorPage = () => {
  return (
    <ErrorPageWrapper>
      <ErrorPageContent>
        <ErrorPageImg src={mouseConfusedImage} alt="mouse-confused-image" />
        <ErrorPageText>
          Ups, no se ha encontrado la página que buscaba.
        </ErrorPageText>
        <RedirectButton to={"/"}>
          Ir al inicio
        </RedirectButton>
      </ErrorPageContent>
    </ErrorPageWrapper>
  )
}
