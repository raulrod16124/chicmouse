import {
  ContactImage,
  ContactWrapper,
  ImageContent,
  CheeseText,
} from './Contact.styles';
import contactImage from 'assets/mouseTeleoperatorImage.webp';
import {useContext} from 'react';
import {LanguageContext} from 'context/LanguageContext';
import {contactText} from './utils/contactText';
import {motion} from 'framer-motion';
import {fadeUp} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';

export const Contact = () => {
  const {language} = useContext(LanguageContext);
  const reducedMotion = useReducedMotion();

  const animProps = reducedMotion
    ? {}
    : {
        variants: fadeUp,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: {once: true, margin: '-40px'},
      };

  return (
    <ContactWrapper data-testid="contact-page-id">
      <motion.div {...animProps}>
        <ImageContent>
          <ContactImage
            src={contactImage}
            alt="chicmouse-contact"
            loading="lazy"
          />
          <CheeseText href="mailto:info@chicmouse.com">
            info@chicmouse.com
          </CheeseText>
        </ImageContent>
      </motion.div>
      <motion.div
        {...animProps}
        {...(!reducedMotion && {transition: {delay: 0.1}})}>
        {contactText(language)}
      </motion.div>
    </ContactWrapper>
  );
};
