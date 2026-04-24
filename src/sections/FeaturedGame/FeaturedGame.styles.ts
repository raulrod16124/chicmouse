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
  padding: ${spacing[24]} ${spacing[6]};

  @media ${device.tablet} {
    padding: ${spacing[16]} ${spacing[5]};
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
  margin-bottom: ${spacing[4]};
`;

export const GameCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[12]};
  align-items: center;
  background-color: ${colors.surface};
  border-radius: ${radius.lg};
  padding: ${spacing[10]};
  border: 1px solid rgba(255, 255, 255, 0.06);

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    gap: ${spacing[8]};
    padding: ${spacing[8]};
  }
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
`;

export const GameHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
`;

export const GameIcon = styled.img`
  width: 72px;
  height: 72px;
  border-radius: ${radius.md};
  object-fit: cover;
  flex-shrink: 0;
`;

export const GameTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[1]};
`;

export const GameName = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: ${colors.textPrimary};
  text-transform: capitalize;
`;

export const GamePlatformBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.textSecondary};
  background-color: rgba(255, 255, 255, 0.06);
  padding: 2px 8px;
  border-radius: ${radius.sm};
  display: inline-block;
`;

export const GameDescription = styled.p`
  font-size: ${typography.body.fontSize};
  line-height: ${typography.body.lineHeight};
  color: ${colors.textSecondary};
`;

export const GameCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${spacing[2]};
  height: 44px;
  padding: 0 ${spacing[5]};
  border-radius: 8px;
  background-color: ${colors.accentYellow};
  color: ${colors.bgPrimary};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  width: fit-content;
  transition:
    opacity ${transitions.fast},
    transform ${transitions.fast};

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentYellow};
    outline-offset: 3px;
  }
`;

export const GameScreenshots = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing[3]};

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Screenshot = styled.img`
  width: 100%;
  aspect-ratio: 9/16;
  object-fit: cover;
  border-radius: ${radius.md};
  border: 1px solid rgba(255, 255, 255, 0.08);
`;
