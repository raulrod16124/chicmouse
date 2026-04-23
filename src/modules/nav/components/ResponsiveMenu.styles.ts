import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "tokens/colors";
import { device } from "utils";

type TFloatItem = {
  selected: boolean;
};

export const ResponsiveNavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const FloatMenu = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  background-color: ${colors.bgSecondary};
  border-top: 1px solid ${colors.surface};
  width: 100%;
  min-height: 170px;
  z-index: 100;
`;

export const FloatItemContent = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  height: fit-content;
`;

export const FloatItem = styled(Link)<TFloatItem>`
  text-align: center;
  padding: 13px 0;
  font-size: 15px;
  color: ${colors.textPrimary};
  width: 100%;
  text-decoration: none;
  border-left: ${(props) => props.selected && `3px solid ${colors.accentYellow}`};
  font-weight: ${(props) => props.selected && 600};
  border-bottom: 0.5px solid ${colors.surface};
  cursor: pointer;
  transition: color 0.15s ease, background-color 0.15s ease;

  &:hover {
    color: ${(props) => !props.selected && colors.accentYellow};
    background-color: ${(props) => !props.selected && `rgba(255, 200, 87, 0.06)`};
  }

  @media ${device.tablet} {
    font-size: 14px;
  }
`;
