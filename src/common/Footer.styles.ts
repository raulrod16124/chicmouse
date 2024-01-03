import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "utils";

export const FooterWrapper = styled.div`
  position: absolute;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #1f1f1f;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 1000px;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 90%;
  }
`;

export const TextLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const TextLink = styled(Link)`
  font-size: 12px;
  color: #fff;
  text-decoration: none;
  @media ${device.mobileL} {
    font-size: 8px;
  }
`;

export const FooterText = styled.p`
  font-size: 12px;
  color: #fff;
  @media ${device.mobileL} {
    font-size: 8px;
  }
`;
