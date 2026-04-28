import {useState, useCallback} from 'react';
import {useIntl, FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';
import {Send, Mail, MapPin} from 'lucide-react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import {fadeUp} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';
import type {IContactForm} from 'types';
import {
  ContactSection,
  ContactInner,
  ContactHeadingBlock,
  ContactEyebrow,
  ContactHeading,
  ContactTagline,
  ContactSubText,
  ContactInfoList,
  ContactInfoItem,
  ContactInfoIcon,
  ContactEmail,
  ContactFormCard,
  ContactForm,
  ContactFieldGroup,
  ContactLabel,
  ContactInput,
  ContactTextarea,
  ContactSubmit,
  ContactFeedback,
  ContactPrivacyRow,
  ContactPrivacyCheckbox,
} from './ContactStrip.styles';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const EMPTY_FORM: IContactForm = {name: '', email: '', message: ''};

export const ContactStrip = () => {
  const intl = useIntl();
  const reducedMotion = useReducedMotion();

  const [form, setForm] = useState<IContactForm>(EMPTY_FORM);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'sent' | 'error' | 'validation' | 'privacy'
  >('idle');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {name, value} = e.target;
      setForm(prev => ({...prev, [name]: value}));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
        setStatus('validation');
        return;
      }
      if (!privacyAccepted) {
        setStatus('privacy');
        return;
      }
      setStatus('sending');
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {name: form.name, email: form.email, message: form.message},
          {publicKey: EMAILJS_PUBLIC_KEY},
        );
        setStatus('sent');
        setForm(EMPTY_FORM);
        setPrivacyAccepted(false);
      } catch {
        setStatus('error');
      }
    },
    [form, privacyAccepted],
  );

  const headingAnimProps = reducedMotion
    ? {}
    : {
        variants: fadeUp,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: {once: true, margin: '-60px'} as const,
      };

  const formAnimProps = reducedMotion
    ? {}
    : {
        variants: fadeUp,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        transition: {delay: 0.15},
        viewport: {once: true, margin: '-60px'} as const,
      };

  return (
    <ContactSection id="contact">
      <ContactInner>
        {/* Left — heading + info */}
        <ContactHeadingBlock as={motion.div} {...headingAnimProps}>
          <ContactEyebrow>
            {intl.formatMessage({id: 'contactEyebrow'})}
          </ContactEyebrow>
          <ContactHeading>
            {intl.formatMessage({id: 'contactHeading'})}
          </ContactHeading>
          <ContactTagline>
            {intl.formatMessage({id: 'contactTagline'})}
          </ContactTagline>
          <ContactSubText>
            {intl.formatMessage({id: 'contactBodyText'})}
          </ContactSubText>

          <ContactInfoList>
            <ContactInfoItem>
              <ContactInfoIcon>
                <Mail size={18} />
              </ContactInfoIcon>
              <ContactEmail href="mailto:admin@chicmouse.com">
                admin@chicmouse.com
              </ContactEmail>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContactInfoIcon>
                <MapPin size={18} />
              </ContactInfoIcon>
              Spain · Remote worldwide
            </ContactInfoItem>
          </ContactInfoList>
        </ContactHeadingBlock>

        {/* Right — form card */}
        <motion.div {...formAnimProps}>
          <ContactFormCard>
            <ContactForm onSubmit={handleSubmit} noValidate>
              <ContactFieldGroup>
                <ContactLabel>
                  {intl.formatMessage({id: 'enterAName'})}
                  <ContactInput
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={intl.formatMessage({id: 'namePlaceholder'})}
                    required
                    maxLength={100}
                    autoComplete="name"
                  />
                </ContactLabel>
                <ContactLabel>
                  {intl.formatMessage({id: 'enterAnEmail'})}
                  <ContactInput
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={intl.formatMessage({id: 'emailPlaceholder'})}
                    required
                    maxLength={254}
                    autoComplete="email"
                  />
                </ContactLabel>
              </ContactFieldGroup>

              <ContactLabel>
                {intl.formatMessage({id: 'enterAMessage'})}
                <ContactTextarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={intl.formatMessage({id: 'messagePlaceholder'})}
                  required
                  maxLength={2000}
                />
              </ContactLabel>

              <ContactPrivacyRow>
                <ContactPrivacyCheckbox
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={e => setPrivacyAccepted(e.target.checked)}
                />
                <span>
                  <FormattedMessage
                    id="privacyConsentLabel"
                    values={{
                      a: chunks => <Link to="/privacy-policy">{chunks}</Link>,
                    }}
                  />
                </span>
              </ContactPrivacyRow>

              {status === 'validation' && (
                <ContactFeedback $isError>
                  {intl.formatMessage({id: 'missingFields'})}
                </ContactFeedback>
              )}
              {status === 'privacy' && (
                <ContactFeedback $isError>
                  {intl.formatMessage({id: 'privacyConsentRequired'})}
                </ContactFeedback>
              )}
              {status === 'sent' && (
                <ContactFeedback>
                  {intl.formatMessage({id: 'messageSent'})}
                </ContactFeedback>
              )}
              {status === 'error' && (
                <ContactFeedback $isError>
                  {intl.formatMessage({id: 'somethingWrong'})}
                </ContactFeedback>
              )}

              <ContactSubmit type="submit" disabled={status === 'sending'}>
                {status === 'sending'
                  ? '...'
                  : intl.formatMessage({id: 'send'})}
                {status !== 'sending' && <Send size={15} />}
              </ContactSubmit>
            </ContactForm>
          </ContactFormCard>
        </motion.div>
      </ContactInner>
    </ContactSection>
  );
};
