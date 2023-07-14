import spainFlag from "assets/spain.png";
import englandFlag from "assets/england.png";
import { Flag, FlagsWrapper } from "../Nav.styles";
import { useContext } from "react";
import { LanguageContext } from "context/LanguageContext";

export const FarMenuItems = () => {
  const { language, changeMessages } = useContext(LanguageContext);

  return (
    <FlagsWrapper>
      <Flag 
        selected={language === "es-ES"} 
        src={spainFlag} alt="spanish-flag"
        onClick={() => changeMessages("es-ES")}
      />
      <Flag 
        selected={language === "en-GB"} 
        src={englandFlag} alt="english-flag"
        onClick={() => changeMessages("en-GB")}
      />
    </FlagsWrapper>
  )
}
