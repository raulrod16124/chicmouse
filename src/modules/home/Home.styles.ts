import styled from 'styled-components';
import {device} from 'utils';
import {colors} from 'tokens/colors';
import {typography, transitions, spacing, radius} from 'tokens';

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(80vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    min-height: unset;
    margin-top: 0;
    align-items: flex-start;
  }
`;

export const HomeContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  height: fit-content;
  display: grid;
  align-items: center;
  grid-template-columns: 60% 40%;
  padding: ${spacing[8]} 0;
  @media ${device.laptop} {
    align-items: start;
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    margin-bottom: ${spacing[12]};
    padding: ${spacing[6]} 0;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing[6]};
  @media ${device.laptop} {
    align-items: center;
    text-align: center;
    gap: ${spacing[4]};
  }
`;

export const HomeTitleAccent = styled.span`
  display: block;
  width: 48px;
  height: 4px;
  background-color: ${colors.accentYellow};
  border-radius: ${radius.full};
  margin-bottom: ${spacing[2]};
`;

export const HomeTitle = styled.h1`
  font-size: ${typography.h1.fontSize};
  font-weight: ${typography.h1.fontWeight};
  line-height: ${typography.h1.lineHeight};
  color: ${colors.textPrimary};
  margin: 0;

  @media ${device.laptop} {
    font-size: ${typography.h2.fontSize};
  }
  @media ${device.tablet} {
    font-size: ${typography.fontSize['2xl']};
  }
  @media ${device.mobileL} {
    font-size: ${typography.fontSize.xl};
  }
`;

export const HomeSubtext = styled.p`
  font-size: ${typography.fontSize.md};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.textSecondary};
  margin: 0;
  max-width: 480px;

  @media ${device.laptop} {
    font-size: ${typography.body.fontSize};
    max-width: 100%;
  }
`;

export const HomeImageWrapper = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: ${colors.surface};
  flex-shrink: 0;
  @media ${device.tablet} {
    width: 200px;
    height: 200px;
  }
`;

export const HomeImage = styled.img`
  width: 100%;
  height: 100%;
  transition: all ${transitions.base};
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

/* Legacy — kept for compatibility, replaced by HomeSubtext in hero */
export const HomeText = styled.p`
  font-size: ${typography.fontSize['2xl']};
  font-style: italic;
  margin: 0 50px;
  color: ${colors.textPrimary};

  @media ${device.laptop} {
    margin: 60px auto;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.mobileL} {
    width: 90%;
    font-size: 15px;
  }
`;
