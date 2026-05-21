import {
  ScrollText,
  CheckCircle,
  Users,
  UserCheck,
  Lock,
  Layers,
  CreditCard,
  XCircle,
  BookOpen,
  FileText,
  RefreshCw,
  AlertTriangle,
  Scale,
  Globe,
  Mail,
} from 'lucide-react';
import {
  TermsAndConditionsWrapper,
  PolicyHero,
  PolicyHeroIconWrapper,
  PolicyHeroEyebrow,
  PolicyHeroTitle,
  PolicyHeroMeta,
  TermsAndConditionsContent,
  PolicyIntro,
  PolicySection,
  PolicySectionHeader,
  PolicySectionIcon,
  TextSubtitle,
  Text,
  TextList,
} from './TermsAndConditions.styles';

export const StellarFusionTermsAndConditionsEN = () => {
  return (
    <TermsAndConditionsWrapper data-testid="stellar-fusion-terms-and-conditions-en-page-id">
      <PolicyHero>
        <PolicyHeroIconWrapper>
          <ScrollText size={32} />
        </PolicyHeroIconWrapper>
        <PolicyHeroEyebrow>Stellar Fusion &middot; Legal</PolicyHeroEyebrow>
        <PolicyHeroTitle>Terms and Conditions</PolicyHeroTitle>
        <PolicyHeroMeta>Last updated: May 14, 2026</PolicyHeroMeta>
      </PolicyHero>

      <TermsAndConditionsContent>
        <PolicyIntro>
          <Text>
            These Terms and Conditions govern your access to and use of Stellar
            Fusion, a mobile puzzle game developed by ChicMouse. By downloading,
            installing, or playing the game, you agree to these Terms. If you do
            not agree, do not use the game.
          </Text>
        </PolicyIntro>

        {/* 1. Acceptance of Terms */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <CheckCircle size={20} />
            </PolicySectionIcon>
            <TextSubtitle>1. Acceptance of Terms</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            By accessing or using Stellar Fusion you confirm that you are at
            least 13 years old (or 16 in certain EU member states) and that you
            have read, understood, and agree to be bound by these Terms.
          </Text>
        </PolicySection>

        {/* 2. Account Registration */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Users size={20} />
            </PolicySectionIcon>
            <TextSubtitle>2. Account Registration</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            To save your progress and access social features (clans, rankings,
            friend requests) you must create an account using a username and an
            avatar appearance of your choice. You are responsible for keeping
            your account credentials secure and for all activity that occurs
            under your account.
          </Text>
        </PolicySection>

        {/* 3. User Conduct */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <UserCheck size={20} />
            </PolicySectionIcon>
            <TextSubtitle>3. User Conduct</TextSubtitle>
          </PolicySectionHeader>
          <Text>You agree not to:</Text>
          <TextList>
            <li>
              Cheat, exploit bugs, or use unauthorised third-party software
            </li>
            <li>Harass, threaten, or abuse other players</li>
            <li>
              Use offensive, hateful, or discriminatory usernames or messages
            </li>
            <li>Attempt to reverse-engineer, decompile, or modify the game</li>
            <li>
              Interfere with servers, networks, or the game&apos;s
              infrastructure
            </li>
          </TextList>
          <Text>
            We reserve the right to suspend or permanently ban accounts that
            violate these rules without prior notice.
          </Text>
        </PolicySection>

        {/* 4. Intellectual Property */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Lock size={20} />
            </PolicySectionIcon>
            <TextSubtitle>4. Intellectual Property</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            All content in Stellar Fusion &mdash; including but not limited to
            artwork, music, code, text, and game mechanics &mdash; is owned by
            ChicMouse or its licensors. You are granted a limited,
            non-exclusive, non-transferable, revocable licence to play the game
            for personal, non-commercial purposes only.
          </Text>
        </PolicySection>

        {/* 5. Virtual Items and Game Content */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Layers size={20} />
            </PolicySectionIcon>
            <TextSubtitle>5. Virtual Items and Game Content</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Any virtual currency, cosmetic items, or other in-game content you
            acquire is licensed to you, not sold. Virtual items have no
            real-world monetary value and cannot be transferred, exchanged, or
            redeemed for cash.
          </Text>
        </PolicySection>

        {/* 6. In-App Purchases */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <CreditCard size={20} />
            </PolicySectionIcon>
            <TextSubtitle>6. In-App Purchases</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Certain features or cosmetic items may be available for purchase
            through Google Play. All transactions are processed by Google Play;
            ChicMouse does not store payment information. Purchases are final
            and non-refundable except where required by applicable law or
            Google&apos;s refund policy.
          </Text>
        </PolicySection>

        {/* 7. Prohibited Activities */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <XCircle size={20} />
            </PolicySectionIcon>
            <TextSubtitle>7. Prohibited Activities</TextSubtitle>
          </PolicySectionHeader>
          <Text>In addition to the conduct rules above, you must not:</Text>
          <TextList>
            <li>Sell, trade, or transfer your account to another person</li>
            <li>Use automated bots, scripts, or macros to play the game</li>
            <li>
              Create multiple accounts to circumvent bans or gain unfair
              advantages
            </li>
            <li>
              Publish, reproduce, or publicly display game content without
              written permission from ChicMouse
            </li>
          </TextList>
        </PolicySection>

        {/* 8. User-Generated Content */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <BookOpen size={20} />
            </PolicySectionIcon>
            <TextSubtitle>8. User-Generated Content</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            If you submit any content through the game (e.g., clan names, chat
            messages), you grant ChicMouse a worldwide, royalty-free licence to
            use, display, and moderate that content in connection with the game.
            You retain ownership but remain solely responsible for the content
            you submit.
          </Text>
        </PolicySection>

        {/* 9. Privacy */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <FileText size={20} />
            </PolicySectionIcon>
            <TextSubtitle>9. Privacy</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Your use of Stellar Fusion is also governed by our{' '}
            <a href="/applications/stellar-fusion/privacy-policy">
              Privacy Policy
            </a>
            , which is incorporated into these Terms by reference.
          </Text>
        </PolicySection>

        {/* 10. Updates and Changes to the Game */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <RefreshCw size={20} />
            </PolicySectionIcon>
            <TextSubtitle>10. Updates and Changes to the Game</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            We may update, modify, or discontinue any feature of Stellar Fusion
            at any time without liability. Continued use of the game after an
            update constitutes your acceptance of the changes.
          </Text>
        </PolicySection>

        {/* 11. Disclaimers and Limitation of Liability */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <AlertTriangle size={20} />
            </PolicySectionIcon>
            <TextSubtitle>
              11. Disclaimers and Limitation of Liability
            </TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Stellar Fusion is provided &ldquo;as is&rdquo; without warranties of
            any kind. To the fullest extent permitted by law, ChicMouse is not
            liable for any indirect, incidental, or consequential damages
            arising from your use of the game, including loss of virtual items
            or data.
          </Text>
        </PolicySection>

        {/* 12. Governing Law */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Scale size={20} />
            </PolicySectionIcon>
            <TextSubtitle>12. Governing Law</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            These Terms are governed by the laws of Spain. Any dispute arising
            under these Terms shall be subject to the exclusive jurisdiction of
            the courts of Spain, without prejudice to your rights as a consumer
            under applicable EU law.
          </Text>
        </PolicySection>

        {/* 13. International Users */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Globe size={20} />
            </PolicySectionIcon>
            <TextSubtitle>13. International Users</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            Stellar Fusion is operated from Spain. If you access the game from
            outside Spain, you do so at your own risk and are responsible for
            compliance with your local laws.
          </Text>
        </PolicySection>

        {/* 14. Changes to These Terms */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <RefreshCw size={20} />
            </PolicySectionIcon>
            <TextSubtitle>14. Changes to These Terms</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            We may update these Terms at any time. Material changes will be
            notified through an in-app notice. Your continued use of the game
            after the effective date of any change constitutes your acceptance
            of the revised Terms.
          </Text>
        </PolicySection>

        {/* 15. Contact */}
        <PolicySection>
          <PolicySectionHeader>
            <PolicySectionIcon>
              <Mail size={20} />
            </PolicySectionIcon>
            <TextSubtitle>15. Contact</TextSubtitle>
          </PolicySectionHeader>
          <Text>
            ChicMouse &mdash;{' '}
            <a href="mailto:admin@chicmouse.com">admin@chicmouse.com</a>
          </Text>
        </PolicySection>
      </TermsAndConditionsContent>
    </TermsAndConditionsWrapper>
  );
};
