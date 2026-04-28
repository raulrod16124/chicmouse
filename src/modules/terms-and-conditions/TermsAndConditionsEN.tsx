import {
  Building2,
  CheckCircle,
  FileText,
  Globe,
  Link2,
  Lock,
  RefreshCw,
  Scale,
  ScrollText,
  Shield,
  ShieldAlert,
  XCircle,
} from 'lucide-react';
import {
  PolicyHero,
  PolicyHeroEyebrow,
  PolicyHeroIconWrapper,
  PolicyHeroMeta,
  PolicyHeroTitle,
  PolicyIntro,
  PolicySection,
  PolicySectionHeader,
  PolicySectionIcon,
  TermsAndConditionsContent,
  TermsAndConditionsWrapper,
  Text,
  TextList,
  TextSecondarySubtitle,
  TextSubtitle,
} from './TermsAndConditions.styles';

export const TermsAndConditionsEN = () => {
  return (
    <TermsAndConditionsWrapper data-testid="terms-and-conditions-en-page-id">
      <PolicyHero>
        <PolicyHeroIconWrapper>
          <ScrollText size={32} />
        </PolicyHeroIconWrapper>
        <PolicyHeroEyebrow>ChicMouse Studio · Legal</PolicyHeroEyebrow>
        <PolicyHeroTitle>Terms and Conditions</PolicyHeroTitle>
        <PolicyHeroMeta>Last updated: April 28, 2026</PolicyHeroMeta>
      </PolicyHero>

      <TermsAndConditionsContent>
        <PolicyIntro>
          <Text>
            This document governs access to and use of the website{' '}
            <a
              href="https://chicmouse.com/"
              rel="external nofollow noopener"
              target="_blank">
              https://chicmouse.com/
            </a>{' '}
            (hereinafter, the &quot;Website&quot;). Please read these terms
            carefully before using our services.
          </Text>
        </PolicyIntro>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Building2 size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Identification</TextSubtitle>
          </PolicySectionHeader>
          <TextList>
            <li>
              <Text>
                <strong>Owner:</strong> ChicMouse Studio
              </Text>
            </li>
            <li>
              <Text>
                <strong>Activity:</strong> Development of mobile games and
                digital content
              </Text>
            </li>
            <li>
              <Text>
                <strong>Contact email:</strong> admin@chicmouse.com
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
              <CheckCircle size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Acceptance of Terms</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Accessing and using this Website grants you the status of user and
            implies full and unconditional acceptance of these Terms and
            Conditions.
          </Text>
          <Text>
            If you do not agree with these terms, you must refrain from using
            the Website.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <FileText size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Purpose of the Website</TextSubtitle>
          </PolicySectionHeader>
          <Text>The Website is intended to:</Text>
          <TextList>
            <li>
              <Text>Present information about ChicMouse Studio</Text>
            </li>
            <li>
              <Text>Showcase games, projects, and related content</Text>
            </li>
            <li>
              <Text>Provide contact information</Text>
            </li>
          </TextList>
          <Text>
            The content of the Website is informational and promotional in
            nature.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <XCircle size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Conditions of Use</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            The user agrees to use the Website appropriately and in accordance
            with applicable law.
          </Text>
          <TextSecondarySubtitle>
            The following is prohibited
          </TextSecondarySubtitle>
          <TextList>
            <li>
              <Text>
                Using the Website for unlawful purposes or contrary to good
                faith
              </Text>
            </li>
            <li>
              <Text>Attempting to access restricted areas of the system</Text>
            </li>
            <li>
              <Text>Introducing viruses, malware, or any harmful code</Text>
            </li>
            <li>
              <Text>
                Engaging in activities that may damage, overload, or deteriorate
                the Website
              </Text>
            </li>
            <li>
              <Text>
                Copying, reproducing, or distributing content without
                authorisation
              </Text>
            </li>
          </TextList>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Shield size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Intellectual Property</TextSubtitle>
          </PolicySectionHeader>
          <Text>All content on the Website, including but not limited to:</Text>
          <TextList>
            <li>
              <Text>Designs and code</Text>
            </li>
            <li>
              <Text>Graphics and logos</Text>
            </li>
            <li>
              <Text>Texts</Text>
            </li>
            <li>
              <Text>Video games and their elements</Text>
            </li>
          </TextList>
          <Text>
            are owned by ChicMouse Studio or used under licence, and are
            protected by intellectual and industrial property regulations.
            Reproduction, distribution, or modification without the express
            authorisation of the owner is strictly prohibited.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Globe size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Game Content</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            The games, images, videos, and related materials displayed on the
            Website are the property of ChicMouse Studio. Their use is limited
            to personal and informational purposes.
          </Text>
          <Text>
            Commercial use, redistribution, or modification without prior
            authorisation is not permitted.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Link2 size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Links to Third Parties</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            The Website may contain links to third-party websites. ChicMouse
            Studio is not responsible for the content, policies, or practices of
            those external sites.
          </Text>
          <Text>
            Access to these sites is the sole responsibility of the user.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <ShieldAlert size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Limitation of Liability</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            The Website is provided for informational purposes and offered
            &quot;as is&quot;. ChicMouse Studio does not guarantee:
          </Text>
          <TextList>
            <li>
              <Text>The continuous availability of the Website</Text>
            </li>
            <li>
              <Text>The absence of errors</Text>
            </li>
            <li>
              <Text>The accuracy or up-to-date nature of the content</Text>
            </li>
          </TextList>
          <Text>
            To the extent permitted by law, ChicMouse Studio shall not be liable
            for damages arising from use of the Website, including data loss or
            service interruptions.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Lock size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Data Protection</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            The processing of personal data is governed by the{' '}
            <a href="/privacy-policy">Privacy Policy</a> of the Website. Users
            are advised to review that policy before using the Website.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <RefreshCw size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Modifications</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            ChicMouse Studio reserves the right to modify these Terms and
            Conditions at any time. Changes will take effect from the moment
            they are published on the Website.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Scale size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Applicable Law</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            These Terms and Conditions are governed by Spanish law. For the
            resolution of any dispute, the parties shall submit to the courts
            and tribunals that correspond under applicable regulations.
          </Text>
        </PolicySection>

        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <FileText size={20} />
            </PolicySectionIcon>
            <TextSubtitle>Contact</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            For any queries relating to these Terms and Conditions, you can get
            in touch via:
          </Text>
          <TextList>
            <li>
              <Text>Email: admin@chicmouse.com</Text>
            </li>
            <li>
              <Text>
                Website:{' '}
                <a
                  href="https://chicmouse.com/"
                  rel="external nofollow noopener"
                  target="_blank">
                  https://chicmouse.com/
                </a>
              </Text>
            </li>
          </TextList>
        </PolicySection>
      </TermsAndConditionsContent>
    </TermsAndConditionsWrapper>
  );
};
