import {
  Clock,
  Cookie,
  Database,
  Globe,
  Link2,
  Lock,
  RefreshCw,
  Scale,
  Settings,
  Shield,
  ShieldCheck,
  Target,
  UserCheck,
  Users,
} from 'lucide-react';
import {
  PolicyDivider,
  PolicyDividerLabel,
  PolicyHero,
  PolicyHeroEyebrow,
  PolicyHeroIconWrapper,
  PolicyHeroMeta,
  PolicyHeroTitle,
  PolicyIntro,
  PolicySection,
  PolicySectionHeader,
  PolicySectionIcon,
  PrivacyPolicyContent,
  PrivacyPolicyWrapper,
  Text,
  TextList,
  TextSecondarySubtitle,
  TextSubtitle,
} from './PrivacyPolicy.styles';

export const PrivacyPolicyEN = () => {
  return (
    <PrivacyPolicyWrapper data-testid="privacy-policy-en-page-id">
      <PolicyHero>
        <PolicyHeroIconWrapper>
          <Shield size={32} />
        </PolicyHeroIconWrapper>
        <PolicyHeroEyebrow>ChicMouse Studio &middot; Legal</PolicyHeroEyebrow>
        <PolicyHeroTitle>Privacy Policy</PolicyHeroTitle>
        <PolicyHeroMeta>Last updated: April 28, 2026</PolicyHeroMeta>
      </PolicyHero>

      <PrivacyPolicyContent>
        <PolicyIntro>
          <Text>
            This Privacy Policy describes how ChicMouse Studio collects, uses,
            and protects your personal data when you visit{' '}
            <a
              href="https://chicmouse.com/"
              rel="external nofollow noopener"
              target="_blank">
              https://chicmouse.com/
            </a>
            . Please read it carefully before using our website.
          </Text>
        </PolicyIntro>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <UserCheck size={20} />
            </PolicySectionIcon>
            <TextSubtitle>1. Data Controller</TextSubtitle>
          </PolicySectionHeader>
          <TextList>
            <li>
              <Text>
                <strong>Owner:</strong> ChicMouse Studio
              </Text>
            </li>
            <li>
              <Text>
                <strong>Activity:</strong> Mobile game development
              </Text>
            </li>
            <li>
              <Text>
                <strong>Email:</strong> admin@chicmouse.com
              </Text>
            </li>
            <li>
              <Text>
                <strong>Website:</strong> https://chicmouse.com/
              </Text>
            </li>
          </TextList>
          <Text>
            ChicMouse Studio is an independent project managed by an individual
            developer.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Database size={20} />
            </PolicySectionIcon>
            <TextSubtitle>2. Personal Data Collected</TextSubtitle>
          </PolicySectionHeader>
          <Text>This Website may collect the following personal data:</Text>
          <TextList>
            <li>
              <Text>Full name (provided voluntarily via the contact form)</Text>
            </li>
            <li>
              <Text>
                Email address (provided voluntarily via the contact form)
              </Text>
            </li>
            <li>
              <Text>
                Information voluntarily included in the message sent by the user
              </Text>
            </li>
          </TextList>
          <Text>
            The name and email address submitted through the contact form are
            transmitted directly to ChicMouse Studio&apos;s email inbox for the
            sole purpose of responding to your enquiry. This data is{' '}
            <strong>not stored on our servers</strong>, is not shared with third
            parties, and no user profiles are created.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Target size={20} />
            </PolicySectionIcon>
            <TextSubtitle>3. Purpose of Processing</TextSubtitle>
          </PolicySectionHeader>
          <Text>Data is used exclusively to:</Text>
          <TextList>
            <li>
              <Text>Respond to queries submitted by the user</Text>
            </li>
            <li>
              <Text>Maintain direct communication related to the request</Text>
            </li>
          </TextList>
          <TextSecondarySubtitle>
            Data will NOT be used for
          </TextSecondarySubtitle>
          <TextList>
            <li>
              <Text>Commercial purposes</Text>
            </li>
            <li>
              <Text>Sending advertising</Text>
            </li>
            <li>
              <Text>Profiling</Text>
            </li>
          </TextList>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Scale size={20} />
            </PolicySectionIcon>
            <TextSubtitle>4. Legal Basis</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            The legal basis for processing your data is the user&apos;s consent
            when submitting the contact form.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Clock size={20} />
            </PolicySectionIcon>
            <TextSubtitle>5. Data Retention</TextSubtitle>
          </PolicySectionHeader>
          <Text>Data will be retained only for as long as necessary to:</Text>
          <TextList>
            <li>
              <Text>Respond to the request</Text>
            </li>
            <li>
              <Text>Maintain the resulting communication</Text>
            </li>
          </TextList>
          <Text>
            Afterwards, data may be deleted or stored securely if there is a
            legal obligation to do so.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Users size={20} />
            </PolicySectionIcon>
            <TextSubtitle>6. Data Recipients</TextSubtitle>
          </PolicySectionHeader>
          <Text>Data is not shared with third parties.</Text>
          <Text>
            However, it may be processed by technical service providers required
            for the operation of the service (e.g. email provider), under their
            respective privacy policies.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <ShieldCheck size={20} />
            </PolicySectionIcon>
            <TextSubtitle>7. User Rights</TextSubtitle>
          </PolicySectionHeader>
          <Text>You may exercise the following rights:</Text>
          <TextList>
            <li>
              <Text>Access to your personal data</Text>
            </li>
            <li>
              <Text>Rectification of inaccurate data</Text>
            </li>
            <li>
              <Text>Erasure of your data</Text>
            </li>
            <li>
              <Text>Restriction of processing</Text>
            </li>
            <li>
              <Text>Objection to processing</Text>
            </li>
          </TextList>
          <Text>
            To exercise these rights, please contact us at:{' '}
            <a href="mailto:admin@chicmouse.com">admin@chicmouse.com</a>
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Lock size={20} />
            </PolicySectionIcon>
            <TextSubtitle>8. Data Security</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Reasonable technical and organisational measures are adopted to
            protect personal data against unauthorised access, loss, or
            alteration.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Link2 size={20} />
            </PolicySectionIcon>
            <TextSubtitle>9. Links to Third Parties</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            This Website may contain links to external sites. ChicMouse Studio
            is not responsible for their privacy policies.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <RefreshCw size={20} />
            </PolicySectionIcon>
            <TextSubtitle>10. Modifications</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            This Privacy Policy may be updated at any time. Changes will be
            published on this same page.
          </Text>
        </PolicySection>

        <PolicyDivider>
          <PolicyDividerLabel>Cookie Policy</PolicyDividerLabel>
        </PolicyDivider>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Cookie size={20} />
            </PolicySectionIcon>
            <TextSubtitle>1. What Are Cookies?</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Cookies are small files stored on the user&apos;s device when
            visiting a website that help improve the browsing experience.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Settings size={20} />
            </PolicySectionIcon>
            <TextSubtitle>2. Types of Cookies Used</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            This Website uses only technical cookies necessary for its
            operation. Specifically:
          </Text>
          <TextSecondarySubtitle>Technical cookies</TextSecondarySubtitle>
          <TextList>
            <li>
              <Text>Enable the correct functioning of the website</Text>
            </li>
            <li>
              <Text>Do not collect personally identifiable information</Text>
            </li>
            <li>
              <Text>Not used for advertising purposes</Text>
            </li>
          </TextList>
          <TextSecondarySubtitle>Contact form data</TextSecondarySubtitle>
          <Text>
            When you use the contact form, you voluntarily provide your{' '}
            <strong>name</strong> and <strong>email address</strong>. This data
            is not stored on our servers or on your device — it is transmitted
            directly to ChicMouse Studio&apos;s email inbox for the sole purpose
            of responding to your enquiry. The form requires you to accept this
            Privacy Policy before submitting.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Globe size={20} />
            </PolicySectionIcon>
            <TextSubtitle>3. Use of Google Fonts</TextSubtitle>
          </PolicySectionHeader>
          <Text>This Website uses fonts from Google Fonts.</Text>
          <Text>
            If fonts are loaded from Google&apos;s servers, a connection with
            those servers may occur, which involves processing the user&apos;s
            IP address. This processing is subject to Google&apos;s privacy
            policy:{' '}
            <a
              href="https://policies.google.com/privacy"
              rel="external nofollow noopener"
              target="_blank">
              https://policies.google.com/privacy
            </a>
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Lock size={20} />
            </PolicySectionIcon>
            <TextSubtitle>4. Cookie Management</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            As this Website only uses technically necessary cookies, prior
            consent is not required under applicable regulations. The user may,
            however, configure their browser to block or delete cookies at any
            time.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <RefreshCw size={20} />
            </PolicySectionIcon>
            <TextSubtitle>5. Modifications</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            This Cookie Policy may be updated at any time. Changes will be
            published on this same page.
          </Text>
        </PolicySection>
      </PrivacyPolicyContent>
    </PrivacyPolicyWrapper>
  );
};
