import styled from 'styled-components';
import {device} from 'utils';
import {colors} from 'tokens/colors';
import {typography, transitions} from 'tokens';

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${device.laptop} {
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
  @media ${device.laptop} {
    align-items: start;
    grid-template-columns: 100%;
    grid-template-rows: 40% 60%;
    margin-bottom: 100px;
  }
`;

export const HomeImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: ${colors.surface};
`;

export const HomeImage = styled.img`
  width: 100%;
  height: 100%;
  transition: all ${transitions.base};
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

export const HomeTitle = styled.h1`
  font-size: ${typography.h1.fontSize};
  font-weight: ${typography.h1.fontWeight};
  line-height: ${typography.h1.lineHeight};
  color: ${colors.textPrimary};
  margin-bottom: 24px;

  @media ${device.laptop} {
    font-size: ${typography.h2.fontSize};
    margin-bottom: 16px;
  }
  @media ${device.tablet} {
    font-size: ${typography.fontSize['2xl']};
  }
  @media ${device.mobileL} {
    font-size: ${typography.fontSize.xl};
  }
`;

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
