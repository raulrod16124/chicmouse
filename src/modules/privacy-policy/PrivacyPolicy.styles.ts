import styled from "styled-components";
import { device } from "utils";
import theme from "./../../theme.json";

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
  margin: 100px auto;

  @media ${device.tablet} {
    margin-top: 0;
  }
`;

export const TextTitle = styled.h2`
  margin-bottom: 50px;
  color: ${theme.colors.white};
  font-style: italic;
`;

export const TextSubtitle = styled.h3`
  margin-top: 25px;
  margin-bottom: 5px;
  font-style: italic;
  color: ${theme.colors.white};
  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const TextSecondarySubtitle = styled.h4`
  margin-top: 25px;
  margin-bottom: 5px;
  color: ${theme.colors.white};
  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const TextTertiarySubtitle = styled.h5`
  margin-top: 20px;
  margin-bottom: 5px;
  color: ${theme.colors.white};
  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const Text = styled.p<{ margin?: string }>`
  color: ${theme.colors.white};
  margin: ${(props) => props.margin && props.margin};
  font-size: 15px;
  & a {
    color: ${theme.colors.white};
  }
`;

export const TextList = styled.ul<{ margin?: string }>`
  margin: ${(props) => props.margin && props.margin};

  & li {
    color: ${theme.colors.white};
  }

  &:last-of-type {
    margin-bottom: 100px;
  }
`;
