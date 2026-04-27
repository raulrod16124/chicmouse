import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {colors} from 'tokens/colors';
import {spacing} from 'tokens/spacing';
import {typography} from 'tokens/typography';
import {transitions} from 'tokens/transitions';
import {radius} from 'tokens/radius';
import {device} from 'utils';

/* ── Page wrapper ─────────────────────────────────────── */

export const GamePageWrapper = styled.div`
  background-color: ${colors.bgPrimary};
`;

/* ── Hero ─────────────────────────────────────────────── */

export const GameHeroSection = styled.section`
  background-color: ${colors.bgPrimary};
  padding-top: ${spacing[2]};
  display: flex;
  flex-direction: column;
`;

export const BackButtonWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing[4]} ${spacing[6]} 0;
  width: 100%;

  @media ${device.tablet} {
    padding: ${spacing[4]} ${spacing[4]} 0;
  }
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[2]};
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.textSecondary};
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  padding: ${spacing[2]} 0;
  transition: color ${transitions.fast};

  &:hover {
    color: ${colors.textPrimary};
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentYellow};
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

export const GameHeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing[12]} ${spacing[6]};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[16]};
  align-items: flex-start;

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    gap: ${spacing[8]};
    padding: ${spacing[8]} ${spacing[4]};
  }
`;

export const GameHeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${spacing[6]};
`;

export const GameGenreBadge = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.accentBlue};
  background-color: rgba(58, 134, 255, 0.1);
  border: 1px solid rgba(58, 134, 255, 0.25);
  border-radius: ${radius.full};
  padding: 5px ${spacing[3]};
  width: fit-content;
`;

export const GameHeroHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
`;

export const GameHeroIcon = styled.img`
  width: 88px;
  height: 88px;
  border-radius: ${radius.lg};
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  object-fit: cover;

  @media ${device.mobileL} {
    width: 64px;
    height: 64px;
  }
`;

export const GameHeroName = styled.h1`
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: 800;
  color: ${colors.textPrimary};
  text-transform: capitalize;
  line-height: 1.1;
`;

export const GameHeroTagline = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: ${colors.textSecondary};
  font-weight: 500;
  line-height: 1.5;
`;

export const AvailableOnLabel = styled.p`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.textSecondary};
  opacity: 0.6;
  margin-bottom: ${spacing[3]};
`;

export const HeroStoreBadges = styled.div`
  display: flex;
  gap: ${spacing[3]};
  flex-wrap: wrap;
`;

export const HeroStoreBadge = styled.a<{$disabled?: boolean}>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding: ${spacing[3]} ${spacing[4]};
  background-color: ${colors.bgSecondary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${radius.md};
  text-decoration: none;
  min-width: 130px;
  transition:
    border-color ${transitions.fast},
    transform ${transitions.fast};
  opacity: ${({$disabled}) => ($disabled ? 0.4 : 1)};
  pointer-events: ${({$disabled}) => ($disabled ? 'none' : 'auto')};

  &:hover {
    border-color: rgba(255, 255, 255, 0.28);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentBlue};
    outline-offset: 3px;
  }
`;

export const BadgeLabel = styled.span`
  font-size: 9px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${colors.textSecondary};
`;

export const BadgeName = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${colors.textPrimary};
`;

export const GameHeroImageWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    order: -1;
    max-height: 340px;
  }
`;

export const GameHeroImage = styled.img`
  width: 80%;
  object-fit: contain;
  mask-image: radial-gradient(
    ellipse 80% 80% at 50% 50%,
    black 55%,
    transparent 100%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 80% 80% at 50% 50%,
    black 55%,
    transparent 100%
  );
`;

/* ── Shared section layout ────────────────────────────── */

export const GameSection = styled.section<{$alt?: boolean}>`
  background-color: ${({$alt}) =>
    $alt ? colors.bgSecondary : colors.bgPrimary};
  padding: ${spacing[20]} ${spacing[6]};

  @media ${device.tablet} {
    padding: ${spacing[16]} ${spacing[4]};
  }
`;

export const GameSectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const GameSectionEyebrow = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${colors.accentYellow};
  margin-bottom: ${spacing[8]};
`;

/* ── Screenshots ──────────────────────────────────────── */

export const ScreenshotScroller = styled.div`
  display: flex;
  gap: ${spacing[4]};
  overflow-x: auto;
  padding-bottom: ${spacing[4]};
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: ${colors.surface} transparent;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.surface};
    border-radius: 2px;
  }
`;

export const ScreenshotItem = styled.img`
  height: 440px;
  width: auto;
  aspect-ratio: 9 / 16;
  border-radius: ${radius.md};
  border: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
  scroll-snap-align: start;
  object-fit: cover;

  @media ${device.tablet} {
    height: 320px;
  }

  @media ${device.mobileL} {
    height: 240px;
  }
`;

/* ── Features ─────────────────────────────────────────── */

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing[6]};

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled(motion.div)`
  background-color: ${colors.surface};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: ${radius.lg};
  padding: ${spacing[8]};
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
  transition: border-color ${transitions.base};

  &:hover {
    border-color: rgba(255, 255, 255, 0.14);
  }
`;

export const FeatureIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${radius.md};
  background-color: rgba(58, 134, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.accentBlue};
  flex-shrink: 0;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${colors.textPrimary};
  line-height: 1.2;
`;

export const FeatureBody = styled.p`
  font-size: ${typography.body.fontSize};
  line-height: ${typography.body.lineHeight};
  color: ${colors.textSecondary};
`;

/* ── About / Legal ────────────────────────────────────── */

export const AboutColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[12]};
  margin-bottom: ${spacing[12]};

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
  }
`;

export const AboutParagraph = styled.p`
  font-size: ${typography.body.fontSize};
  line-height: 1.8;
  color: ${colors.textSecondary};
`;

export const LegalRow = styled.div`
  display: flex;
  gap: ${spacing[12]};
  padding-top: ${spacing[8]};
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  flex-wrap: wrap;
  width: 100%;
`;

export const LegalLink = styled(Link)`
  font-size: 13px;
  font-weight: 500;
  color: ${colors.accentBlue};
  text-decoration: none;
  transition: color ${transitions.fast};

  &:hover {
    color: ${colors.textPrimary};
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentBlue};
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

/* ── Loader ───────────────────────────────────────────── */

export const GamePageLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;
