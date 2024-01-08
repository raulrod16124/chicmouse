import { Link } from "react-router-dom";
import { device } from "utils";
import styled from "styled-components";
import theme from "./../../theme.json";

type TMenuItem = {
  selected: boolean;
};

export const NavWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 500;
`;

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 0.5fr;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 0;
  color: #fff;
  overflow: hidden;

  & div {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & :nth-child(2) {
    justify-content: left;
  }

  & ::after {
    position: absolute;
    bottom: 0;
    content: "";
    width: 100%;
    height: 1px;
    background-color: white;
    opacity: 0.1;
  }

  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    grid-template-columns: 0.5fr 2fr 0.5fr;
  }
`;

export const MenuWrapper = styled.div`
  & :nth-child(2) {
    padding-left: 25px;
    @media ${device.laptop} {
      padding-left: 15px;
    }
    @media ${device.tablet} {
      padding-left: 10px;
    }

    @media ${device.mobileL} {
      padding-left: 10px;
    }
  }
`;

export const MenuItemContent = styled(Link)<TMenuItem>`
  width: 120px;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 5px;
  background-color: ${(props) => props.selected && theme.colors.green};
  color: ${theme.colors.white};
  font-weight: ${(props) => props.selected && 600};
  font-size: 15px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  margin: 0 10px;
  padding: 0 10px;

  &:hover {
    background: ${(props) => !props.selected && theme.colors.greenDark};
  }

  @media ${device.laptop} {
    font-size: 12px;
    padding: 0 10px;
    width: 80px;
  }

  @media ${device.tablet} {
    font-size: 10px;
    padding: 0 10px;
    width: 60px;
  }

  @media ${device.mobileL} {
    font-size: 8px;
    padding: 0 5px;
    width: 60px;
  }
`;
