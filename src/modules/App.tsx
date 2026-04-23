import { useContext } from "react";
import { Main, DefaultBackground } from "./App.styles";
import { Root } from "routes/Root";
import { LanguageContext } from "context/LanguageContext";

function App() {
  const { language } = useContext(LanguageContext);

  if (!language) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DefaultBackground />
      <Main data-testid="main-app-id">
        <Root />
      </Main>
    </>
  );
}

export default App;
