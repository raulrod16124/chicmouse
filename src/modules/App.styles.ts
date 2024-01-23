import styled from "styled-components";
import { device } from "utils";
import theme from "./../theme.json";

export const Main = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const DefaultBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: linear-gradient(
    ${theme.colors.blueGreen},
    ${theme.colors.blueDark}
  );
`;

export const WebBackground = styled.img`
  position: absolute;
  position: fixed;
  width: 100vw;
  max-width: 100vw;
  height: 100%;
  background-size: 100% 100%;
  @media ${device.mobileL} {
    height: 100vh;
  }
`;
