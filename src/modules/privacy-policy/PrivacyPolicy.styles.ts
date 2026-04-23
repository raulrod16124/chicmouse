import styled from 'styled-components';
import {device} from 'utils';
import {colors} from 'tokens/colors';

export const PrivacyPolicyWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  @media ${device.laptop} {
    width: 90%;
  }
`;

export const PrivacyPolicyContent = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media ${device.tablet} {
    margin-top: 0;
  }
`;

export const TextTitle = styled.h2`
  margin-bottom: 50px;
  color: ${colors.textPrimary};
  font-style: italic;
`;

export const TextSubtitle = styled.h3`
  margin-top: 25px;
  margin-bottom: 5px;
  font-style: italic;
  color: ${colors.textPrimary};
  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const TextSecondarySubtitle = styled.h4`
  margin-top: 25px;
  margin-bottom: 5px;
  color: ${colors.textPrimary};
  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const TextTertiarySubtitle = styled.h5`
  margin-top: 20px;
  margin-bottom: 5px;
  color: ${colors.textPrimary};
  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const Text = styled.p<{margin?: string}>`
  color: ${colors.textPrimary};
  margin: ${props => props.margin && props.margin};
  font-size: 15px;
  & a {
    color: ${colors.textPrimary};
  }
`;

export const TextList = styled.ul<{margin?: string}>`
  margin: ${props => props.margin && props.margin};

  & li {
    color: ${colors.textPrimary};
  }

  &:last-of-type {
    margin-bottom: 100px;
  }
`;
