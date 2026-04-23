import {Link} from 'react-router-dom';
import {device} from 'utils';
import styled from 'styled-components';
import {colors} from 'tokens/colors';
import {typography, transitions} from 'tokens';

type TMenuItem = {
  selected: boolean;
};

export const NavWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1270px;
  margin: 0 auto;
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
    content: '';
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
  background-color: transparent;
  border-bottom: ${props =>
    props.selected && `2px solid ${colors.accentYellow}`};
  color: ${colors.textPrimary};
  font-weight: ${props => props.selected && 600};
  font-size: ${typography.body.fontSize};
  cursor: pointer;
  transition: color ${transitions.base};
  margin: 0 10px;
  padding: 0 10px;

  &:hover {
    color: ${props => !props.selected && colors.accentYellow};
  }

  @media ${device.laptop} {
    font-size: 13px;
    padding: 0 10px;
    width: 80px;
  }

  @media ${device.tablet} {
    font-size: 13px;
    padding: 0 8px;
    width: 70px;
  }

  @media ${device.mobileL} {
    font-size: 13px;
    padding: 0 6px;
    width: 65px;
  }
`;
