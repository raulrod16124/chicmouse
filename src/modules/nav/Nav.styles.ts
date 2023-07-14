import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "utils";

type TMenuItem = {
    selected: boolean,
}

type TFlag = {
    selected: boolean;
    onClick: (language: string) => void;
}

export const NavContainer = styled.div`
    display: grid;
    grid-template-columns: .5fr 3fr .5fr;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 0;
    background-color: #000;
    color: #fff;

    overflow: hidden;

    & div{
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & :nth-child(2){
        justify-content: left;
    }

    @media ${device.laptop} { 
        font-size: 20px;
        grid-template-columns: .2fr 2fr .2fr;
    }
`;

export const MenuWrapper = styled.div`
    border-left: 0.5px solid #333;
    border-right: 0.5px solid #333;

    & :nth-child(2){
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
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: ${props => props.selected && "#ACE5DE"};
    color: ${props => props.selected ? "#000" : "#fff"};
    font-size: 15px;
    cursor: pointer;
    
    &:hover{
        background: ${props => !props.selected && "rgba(141,227,217, .5)"};
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

export const FlagsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const Flag = styled.img<TFlag>`
    width: 25px;
    height: 25px;
    margin: 0 20px;
    cursor: pointer;
    border-radius: 50%;
    border: ${props => props.selected && "2px solid white"};
`;
