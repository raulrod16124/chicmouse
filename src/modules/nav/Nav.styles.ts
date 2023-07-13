import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
    display: grid;
    grid-template-columns: .5fr 3fr .5fr;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 0;
    background-color: #000;
    color: #fff;

    & div{
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & :nth-child(2){
        justify-content: left;
        padding: 0 50px;
    }
    `;

export const MenuWrapper = styled.div`
    border-left: 0.5px solid #333;
    border-right: 0.5px solid #333;
`;

export const MenuItemContent = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    text-decoration: none;
    color: #fff;
    
    &:hover{
        cursor: default;
        color: #000;
        background-color: #8DE3D9;
    }
`;