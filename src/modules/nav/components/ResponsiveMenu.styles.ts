import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "./../../../theme.json";
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
  background: linear-gradient(${theme.colors.blueGreen}, ${theme.colors.blue});
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
  padding: 9px 0;
  font-size: 15px;
  color: ${theme.colors.white};
  width: 100%;
  text-decoration: none;
  background-color: ${(props) => props.selected && theme.colors.greenLight};
  font-weight: ${(props) => props.selected && 600};
  border-bottom: 0.5px solid ${theme.colors.blueDark};
  cursor: pointer;

  &:hover {
    background: ${(props) => !props.selected && theme.colors.green};
  }

  @media ${device.tablet} {
    &:hover {
      background-color: ${(props) =>
        props.selected ? theme.colors.greenLight : "transparent"};
    }
  }
`;
