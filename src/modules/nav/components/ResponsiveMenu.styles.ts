import { Link } from "react-router-dom";
import styled from "styled-components";

type TFloatItem = {
    selected: boolean,
}

export const ResponsiveNavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const FloatMenu = styled.div`
    position: absolute;
    top: 80PX;
    left: 0;
    background-color: #343434;
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
    padding: 10px 0;
    font-size: 15px;
    color: #fff;
    width: 100%;
    text-decoration: none;
    background-color: ${props => props.selected && "#ACE5DE"};
    color: ${props => props.selected ? "#000" : "#fff"};
    cursor: pointer;
    
    &:hover{
        background: ${props => !props.selected && "rgba(141,227,217, .5)"};
    }
`;
