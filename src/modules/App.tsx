import { useContext } from "react";
import { Main } from "./App.styles";
import { Root } from "routes/Root";
import { LanguageContext } from "context/LanguageContext";
import { Footer } from "common/Footer";

function App() {

  const { language } = useContext(LanguageContext);

  if(!language){
    return <div>Loading...</div>
  }

  return (
    <Main>
      <Root />
      <Footer />
    </Main>
  )
}

export default App
