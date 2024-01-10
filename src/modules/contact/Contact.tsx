import {
  ContactImage,
  ContactWrapper,
  ImageContent,
  CheeseText,
} from "./Contact.styles";
import cheese from "assets/cheese.png";
import { useContext } from "react";
import { LanguageContext } from "context/LanguageContext";
import { contactText } from "./utils/contactText";

export const Contact = () => {
  const { language } = useContext(LanguageContext);

  return (
    <ContactWrapper data-testid="contact-page-id">
      <ImageContent>
        <ContactImage src={cheese} alt="teleoperator-mouse-image" />
        <CheeseText>info@chicmouse.com</CheeseText>
      </ImageContent>
      {contactText(language)}
    </ContactWrapper>
  );
};
