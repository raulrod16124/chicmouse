import styled from "styled-components";
import { device } from "utils";
import theme from "./../../theme.json";

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    min-height: fit-content;
    align-items: flex-start;
  }
`;

export const HomeContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 60% 40%;
  /* grid-template-rows: 100%; */
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
  background: linear-gradient(
    ${theme.colors.greenLight},
    ${theme.colors.greenDark}
  );
  @media ${device.mobileL} {
    width: 150px;
    height: 150px;
  }
`;

export const HomeImage = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

export const HomeTitle = styled.h1`
  font-weight: 900;
  @media ${device.tablet} {
    font-size: 25px;
  }
`;

export const HomeText = styled.p`
  font-size: 25px;
  font-style: italic;
  margin: 0 50px;
  color: ${theme.colors.white};

  @media ${device.laptop} {
    margin: 50px 0;
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.mobileL} {
    width: 90%;
    font-size: 15px;
  }
`;
