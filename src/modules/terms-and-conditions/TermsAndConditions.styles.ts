import styled from "styled-components";
import { device } from "utils";

export const TermsAndConditionsWrapper = styled.div`
  width: 1000px;
  height: max-content;
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
  margin: 100px auto;

  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const TextTitle = styled.h2`
  margin-bottom: 30px;
`;

export const TextSubtitle = styled.h3`
  margin-top: 25px;
  margin-bottom: 5px;
  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const TextSecondarySubtitle = styled.h5`
  margin-top: 25px;
  margin-bottom: 5px;
  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

export const Text = styled.p<{ margin?: string }>`
  margin: ${(props) => props.margin && props.margin};
  font-size: 15px;
`;

export const TextList = styled.ul<{ margin?: string }>`
  margin: ${(props) => props.margin && props.margin};
  &:last-of-type {
    margin-bottom: 100px;
  }
`;
