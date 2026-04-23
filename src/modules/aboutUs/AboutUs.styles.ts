import styled from 'styled-components';
import {device} from 'utils';
import {colors} from 'tokens/colors';
import {typography, radius, transitions} from 'tokens';

export const AboutUsWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

export const AboutUsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  max-width: 1000px;
  margin-bottom: 50px;
`;

export const CharacterInfoWrapper = styled.div`
  display: flex;
  &:last-of-type {
    margin-top: 50px;
  }

  @media ${device.laptop} {
    align-items: center;
    flex-direction: column;
  }
`;

export const CharacterImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: ${radius.md};
  object-fit: cover;
  @media ${device.laptop} {
    width: 200px;
    margin-bottom: 32px;
  }
`;

export const CharacterAvatar = styled.div<{accentColor?: string}>`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.bgSecondary};
  border: 3px solid ${props => props.accentColor ?? colors.accentYellow};
  transition: border-color ${transitions.base};
  font-size: ${typography.fontSize['4xl']};
  font-weight: ${typography.fontWeight.bold};
  color: ${props => props.accentColor ?? colors.accentYellow};
  user-select: none;
  letter-spacing: -1px;

  @media ${device.laptop} {
    width: 120px;
    height: 120px;
    font-size: ${typography.fontSize['3xl']};
    margin-bottom: 24px;
  }
`;

export const CharacterTextContent = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  @media ${device.laptop} {
    margin-left: 0;
  }
`;

export const CharacterTitle = styled.p<{
  padding?: string;
  textalign?: string;
}>`
  padding: ${props => props.padding && props.padding};
  text-align: ${props => props.textalign && props.textalign};
  font-size: ${typography.h3.fontSize};
  font-weight: ${typography.fontWeight.semibold};
  font-style: italic;
  color: ${colors.textPrimary};

  @media ${device.laptop} {
    width: 90%;
    padding: 0;
    margin: 0 auto 20px auto;
  }
`;

export const CharacterText = styled.p`
  padding: 20px 100px 0 20px;
  font-size: ${typography.fontSize.lg};
  color: ${colors.textSecondary};

  @media ${device.laptop} {
    font-size: 15px;
    width: 90%;
    padding: 0;
    margin: 0 auto;
  }
`;
