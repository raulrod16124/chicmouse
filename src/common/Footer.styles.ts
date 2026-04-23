import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "utils";
import { colors } from "tokens/colors";

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: ${colors.bgSecondary};
  border-top: 1px solid ${colors.surface};
  z-index: 10;
  @media ${device.laptop} {
    max-width: 100vw;
  }
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
  color: ${colors.textSecondary};
  text-decoration: none;
  transition: color 0.15s ease;
  &:hover {
    color: ${colors.textPrimary};
  }
  @media ${device.mobileL} {
    font-size: 11px;
  }
`;

export const FooterText = styled.p`
  font-size: 12px;
  color: ${colors.textSecondary};
  @media ${device.mobileL} {
    font-size: 11px;
  }
`;
