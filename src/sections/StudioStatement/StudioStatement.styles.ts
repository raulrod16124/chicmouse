import styled from 'styled-components';
import {motion} from 'framer-motion';
import {colors} from 'tokens/colors';
import {spacing} from 'tokens/spacing';
import {typography} from 'tokens/typography';
import {radius} from 'tokens/radius';
import {transitions} from 'tokens/transitions';
import {device} from 'utils';

export const StudioSection = styled.section`
  background-color: ${colors.bgPrimary};
  padding: ${spacing[30]} ${spacing[6]};
`;

export const StudioInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionEyebrow = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: ${colors.accentYellow};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: ${spacing[4]};
`;

export const SectionAccent = styled.span`
  color: ${colors.accentYellow};
`;

export const StudioHeadline = styled(motion.h2)`
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800;
  color: ${colors.textPrimary};
  text-align: center;
  margin-bottom: ${spacing[12]};
  line-height: 1.15;
`;

/* ── Two-column body text ──────────────────────────────── */

export const StudioColumns = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[12]};
  margin-bottom: ${spacing[20]};

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
    margin-bottom: ${spacing[12]};
  }
`;

export const StudioColumn = styled.div``;

export const StudioColumnText = styled.p`
  font-size: ${typography.body.fontSize};
  line-height: 1.8;
  color: ${colors.textSecondary};
`;

/* ── Pillar cards ──────────────────────────────────────── */

export const PillarGrid = styled(motion.div)`
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

export const PillarCard = styled(motion.div)`
  background-color: ${colors.bgSecondary};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: ${radius.md};
  padding: ${spacing[8]};
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
  transition: border-color ${transitions.base};

  &:hover {
    border-color: rgba(255, 255, 255, 0.12);
  }
`;

export const PillarIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${radius.md};
  background-color: rgba(58, 134, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.accentBlue};
  flex-shrink: 0;
  margin-bottom: ${spacing[2]};
`;

export const PillarTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${colors.textPrimary};
  line-height: 1.2;
`;

export const PillarBody = styled.p`
  font-size: ${typography.body.fontSize};
  line-height: ${typography.body.lineHeight};
  color: ${colors.textSecondary};
`;
