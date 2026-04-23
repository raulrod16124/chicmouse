import {
  ContactImage,
  ContactWrapper,
  ImageContent,
  CheeseText,
} from './Contact.styles';
import contactImage from 'assets/mouseTeleoperatorImage.png';
import {useContext} from 'react';
import {LanguageContext} from 'context/LanguageContext';
import {contactText} from './utils/contactText';

export const Contact = () => {
  const {language} = useContext(LanguageContext);

  return (
    <ContactWrapper data-testid="contact-page-id">
      <ImageContent>
        <ContactImage src={contactImage} alt="chicmouse-contact" />
        <CheeseText href="mailto:info@chicmouse.com">
          info@chicmouse.com
        </CheeseText>
      </ImageContent>
      {contactText(language)}
    </ContactWrapper>
  );
};
