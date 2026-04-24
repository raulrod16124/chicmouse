import styled from 'styled-components';
import {motion} from 'framer-motion';
import {colors} from 'tokens/colors';
import {spacing} from 'tokens/spacing';
import {typography} from 'tokens/typography';
import {transitions} from 'tokens/transitions';
import {radius} from 'tokens/radius';
import {device} from 'utils';

export const TeamSection = styled.section`
  background-color: ${colors.bgSecondary};
  padding: ${spacing[24]} ${spacing[6]};

  @media ${device.tablet} {
    padding: ${spacing[16]} ${spacing[5]};
  }
`;

export const TeamInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionEyebrow = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: ${colors.accentYellow};
  text-transform: uppercase;
  margin-bottom: ${spacing[10]};
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing[8]};

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: ${spacing[6]};
  }
`;

interface IAccentProps {
  $accent: string;
}

export const TeamCard = styled(motion.div)<IAccentProps>`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]};
  padding: ${spacing[6]};
  background-color: ${colors.surface};
  border-radius: ${radius.lg};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-top: 3px solid ${({$accent}) => $accent};
`;

export const TeamCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]};
`;

export const TeamAvatar = styled.div<IAccentProps>`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: ${({$accent}) => $accent}22;
  border: 2px solid ${({$accent}) => $accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: ${({$accent}) => $accent};
  flex-shrink: 0;
`;

export const TeamMemberName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.textPrimary};
`;

export const TeamMemberRole = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${colors.textSecondary};
`;

export const TeamMemberBio = styled.p`
  font-size: ${typography.body.fontSize};
  line-height: ${typography.body.lineHeight};
  color: ${colors.textSecondary};
`;

export const TeamCharacterImg = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  object-position: center bottom;
  margin-top: auto;
  transition: transform ${transitions.base};

  ${TeamCard}:hover & {
    transform: translateY(-4px);
  }
`;
