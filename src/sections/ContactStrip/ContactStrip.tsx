import {useState, useCallback} from 'react';
import {useIntl} from 'react-intl';
import {Send, Mail, MapPin} from 'lucide-react';
import {motion} from 'framer-motion';
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
} from './ContactStrip.styles';

const CONTACT_ENDPOINT = 'http://localhost:8080/contact';

const EMPTY_FORM: IContactForm = {name: '', email: '', message: ''};

export const ContactStrip = () => {
  const intl = useIntl();
  const reducedMotion = useReducedMotion();

  const [form, setForm] = useState<IContactForm>(EMPTY_FORM);
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'sent' | 'error' | 'validation'
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
      setStatus('sending');
      try {
        const res = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(form),
        });
        const data = (await res.json()) as {status: string};
        if (data.status === 'Message Sent') {
          setStatus('sent');
          setForm(EMPTY_FORM);
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    },
    [form],
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

              {status === 'validation' && (
                <ContactFeedback $isError>
                  {intl.formatMessage({id: 'missingFields'})}
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
