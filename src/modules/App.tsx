import { useContext } from "react";
import { WebBackground, Main, DefaultBackground } from "./App.styles";
import { Root } from "routes/Root";
import { LanguageContext } from "context/LanguageContext";
import bg from "./../assets/bg.png";

function App() {
  const { language } = useContext(LanguageContext);

  if (!language) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DefaultBackground />
      <Main data-testid="main-app-id">
        <WebBackground src={bg} alt="background-image" />
        <Root />
      </Main>
    </>
  );
}

export default App;
