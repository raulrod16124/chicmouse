import styled from "styled-components";
import { device } from "utils";

export const Main = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  @media ${device.laptop} {
    max-width: 100vw;
  }
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
    overflow-y: hidden;
  }
`;
