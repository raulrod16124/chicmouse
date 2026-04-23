import styled from 'styled-components';
import {device} from 'utils';
import {colors} from 'tokens/colors';
import {typography, transitions, radius, spacing} from 'tokens';

export const ContactWrapper = styled.div`
  position: relative;
  width: 90%;
  min-height: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media ${device.laptop} {
    margin: 0 auto 50px auto;
    flex-direction: column;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: ${radius.md};
  object-fit: contain;
  margin-bottom: ${spacing[4]};

  @media ${device.laptop} {
    width: 160px;
  }
`;

export const TextContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  @media ${device.laptop} {
    width: 100%;
    margin-top: 25px;
    margin-left: 0;
    margin-bottom: 100px;
  }
`;

export const Text = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-size: ${typography.fontSize.lg};
  color: ${colors.textPrimary};

  @media ${device.laptop} {
    width: 100%;
    margin-top: 25px;
    margin-left: 0;
  }
`;

export const CheeseText = styled.a`
  width: 100%;
  margin-bottom: 20px;
  font-size: ${typography.body.fontSize};
  color: ${colors.accentBlue};
  text-decoration: none;
  transition: color ${transitions.fast};

  &:hover {
    color: ${colors.textPrimary};
    text-decoration: underline;
  }

  @media ${device.laptop} {
    text-align: center;
    width: 100%;
    margin-top: 25px;
    margin-left: 0;
  }
`;
