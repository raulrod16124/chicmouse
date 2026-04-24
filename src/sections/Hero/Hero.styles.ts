import styled from 'styled-components';
import {motion} from 'framer-motion';
import {colors} from 'tokens/colors';
import {spacing} from 'tokens/spacing';
import {typography} from 'tokens/typography';
import {transitions} from 'tokens/transitions';
import {device} from 'utils';

export const HeroSection = styled.section`
  min-height: 100vh;
  background-color: ${colors.bgPrimary};
  display: flex;
  align-items: center;
  padding-top: 64px; /* Nav height */
`;

export const HeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${spacing[20]} ${spacing[6]};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing[16]};
  align-items: center;

  @media ${device.laptop} {
    grid-template-columns: 1fr;
    gap: ${spacing[10]};
    padding: ${spacing[16]} ${spacing[5]};
    text-align: center;
  }
`;

export const HeroText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${spacing[5]};
`;

export const HeroEyebrow = styled.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: ${colors.accentYellow};
  text-transform: uppercase;
`;

export const HeroHeadline = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: ${colors.textPrimary};
`;

export const HeroBody = styled.p`
  font-size: ${typography.body.fontSize};
  line-height: ${typography.body.lineHeight};
  color: ${colors.textSecondary};
  max-width: 480px;

  @media ${device.laptop} {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const HeroCtas = styled.div`
  display: flex;
  gap: ${spacing[4]};
  flex-wrap: wrap;

  @media ${device.laptop} {
    justify-content: center;
  }
`;

export const HeroCtaPrimary = styled.button`
  height: 48px;
  padding: 0 ${spacing[6]};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  background-color: ${colors.accentYellow};
  color: ${colors.bgPrimary};
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

export const HeroCtaSecondary = styled.button`
  height: 48px;
  padding: 0 ${spacing[6]};
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  background-color: transparent;
  color: ${colors.textPrimary};
  transition:
    border-color ${transitions.fast},
    background-color ${transitions.fast};

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.04);
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentYellow};
    outline-offset: 3px;
  }
`;

export const HeroImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    max-height: 300px;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 520px;
  height: auto;
  object-fit: contain;
  border-radius: 16px;

  @media ${device.laptop} {
    max-width: 360px;
  }
`;
