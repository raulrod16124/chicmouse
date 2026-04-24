import styled from 'styled-components';
import {motion} from 'framer-motion';
import {colors} from 'tokens/colors';
import {spacing} from 'tokens/spacing';
import {typography} from 'tokens/typography';
import {device} from 'utils';

export const StudioSection = styled.section`
  background-color: ${colors.bgPrimary};
  padding: ${spacing[24]} ${spacing[6]};

  @media ${device.tablet} {
    padding: ${spacing[16]} ${spacing[5]};
  }
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
  margin-bottom: ${spacing[4]};
`;

export const StudioHeadline = styled(motion.h2)`
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 800;
  color: ${colors.textPrimary};
  margin-bottom: ${spacing[10]};
  max-width: 640px;
  line-height: 1.15;
`;

export const StudioColumns = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[10]};

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
  }
`;

export const StudioColumn = styled.div`
  padding: ${spacing[6]};
  background-color: ${colors.bgSecondary};
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const StudioColumnText = styled.p`
  font-size: ${typography.body.fontSize};
  line-height: ${typography.body.lineHeight};
  color: ${colors.textSecondary};
`;
