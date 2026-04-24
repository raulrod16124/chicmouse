import {useState, useCallback} from 'react';
import {useIntl} from 'react-intl';
import {Send} from 'lucide-react';
import {motion} from 'framer-motion';
import {fadeUp} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';
import type {IContactForm} from 'types';
import {
  ContactSection,
  ContactInner,
  ContactHeadingBlock,
  ContactHeading,
  ContactSubText,
  ContactEmail,
  ContactForm,
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
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  );

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

  const animProps = reducedMotion
    ? {}
    : {
        variants: fadeUp,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: {once: true, margin: '-60px'},
      };

  return (
    <ContactSection id="contact">
      <ContactInner {...animProps}>
        <ContactHeadingBlock>
          <ContactHeading>
            {intl.formatMessage({id: 'contactHeading'})}
          </ContactHeading>
          <ContactSubText>
            {intl.formatMessage({id: 'contactUsText'})}
          </ContactSubText>
          <ContactEmail href="mailto:info@chicmouse.com">
            info@chicmouse.com
          </ContactEmail>
        </ContactHeadingBlock>

        <ContactForm onSubmit={handleSubmit} noValidate>
          <ContactInput
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={intl.formatMessage({id: 'enterAName'})}
            required
            maxLength={100}
            autoComplete="name"
          />
          <ContactInput
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={intl.formatMessage({id: 'enterAnEmail'})}
            required
            maxLength={254}
            autoComplete="email"
          />
          <ContactTextarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={intl.formatMessage({id: 'enterAMessage'})}
            required
            maxLength={2000}
          />

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
            {status === 'sending' ? '...' : intl.formatMessage({id: 'send'})}
            {status !== 'sending' && <Send size={14} style={{marginLeft: 6}} />}
          </ContactSubmit>
        </ContactForm>
      </ContactInner>
    </ContactSection>
  );
};
