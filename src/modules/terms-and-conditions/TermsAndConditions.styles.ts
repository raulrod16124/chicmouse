import styled from 'styled-components';
import {device} from 'utils';
import {colors} from 'tokens/colors';

export const TermsAndConditionsWrapper = styled.div`
  position: relative;
  width: 1000px;
  margin: 0 auto;

  @media ${device.laptop} {
    width: 90%;
  }
`;

export const TermsAndConditionsContent = styled.div`
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
  margin-bottom: 30px;
  color: ${colors.textPrimary};
  font-style: italic;
`;

export const TextSubtitle = styled.h3`
  margin-top: 25px;
  margin-bottom: 5px;
  color: ${colors.textPrimary};
  font-style: italic;
  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const TextSecondarySubtitle = styled.h5`
  margin-top: 25px;
  margin-bottom: 5px;
  color: ${colors.textPrimary};
  font-style: italic;
  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const Text = styled.p<{margin?: string}>`
  margin: ${props => props.margin && props.margin};
  font-size: 15px;
  color: ${colors.textPrimary};

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
