import styled from 'styled-components';
import {motion} from 'framer-motion';
import {colors} from 'tokens/colors';
import {spacing} from 'tokens/spacing';
import {typography} from 'tokens/typography';
import {transitions} from 'tokens/transitions';
import {radius} from 'tokens/radius';
import {device} from 'utils';

export const FeaturedGameSection = styled.section`
  background-color: ${colors.bgSecondary};
  padding: ${spacing[20]} ${spacing[6]};

  @media ${device.tablet} {
    padding: ${spacing[16]} ${spacing[4]};
  }
`;

export const FeaturedGameInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionEyebrow = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: ${colors.accentYellow};
  text-transform: uppercase;
  margin-bottom: ${spacing[12]};
`;

/* ── Two-column layout ─────────────────────────────────── */

export const GameCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[16]};
  align-items: center;

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    gap: ${spacing[12]};
  }
`;

/* ── Left: product spotlight ───────────────────────────── */

export const ProductSpotlightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    order: 2;
  }
`;

export const ProductSpotlightImage = styled.img`
  width: 100%;
  max-width: 480px;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 24px 48px rgba(0, 0, 0, 0.5));
`;

/* ── Right: game info ──────────────────────────────────── */

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};

  @media ${device.laptop} {
    order: 1;
  }
`;

export const GameHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
`;

export const GameIcon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: ${radius.md};
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
`;

export const GameName = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  color: ${colors.textPrimary};
  text-transform: capitalize;
  line-height: 1.1;
`;

export const GameTagline = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  color: ${colors.textPrimary};
  line-height: 1.3;
`;

export const GameDescription = styled.p`
  font-size: ${typography.body.fontSize};
  line-height: ${typography.body.lineHeight};
  color: ${colors.textSecondary};
`;

/* ── Store badges ──────────────────────────────────────── */

export const StoreBadges = styled.div`
  display: flex;
  gap: ${spacing[3]};
  flex-wrap: wrap;
`;

export const StoreBadge = styled.a`
  display: inline-flex;
  flex-direction: column;
  gap: 1px;
  padding: 9px 18px;
  background-color: #000;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: ${radius.md};
  text-decoration: none;
  min-width: 138px;
  transition:
    border-color ${transitions.fast},
    transform ${transitions.fast};

  &:hover {
    border-color: rgba(255, 255, 255, 0.45);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentBlue};
    outline-offset: 3px;
  }
`;

export const StoreBadgeLabel = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${colors.textSecondary};
  letter-spacing: 0.02em;
  line-height: 1;
`;

export const StoreBadgeName = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${colors.textPrimary};
  line-height: 1.2;
`;

/* ── CTA ───────────────────────────────────────────────── */

export const GameCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[2]};
  height: 48px;
  padding: 0 ${spacing[6]};
  border-radius: 10px;
  background-color: ${colors.accentBlue};
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  width: fit-content;
  transition:
    filter ${transitions.fast},
    transform ${transitions.fast};

  &:hover {
    filter: brightness(1.12);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentBlue};
    outline-offset: 3px;
  }
`;
