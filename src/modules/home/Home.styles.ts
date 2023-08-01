import styled from "styled-components";
import { device } from "utils";

export const HomeWrapper= styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${device.tablet} { 
        margin-top: 25px;
        align-items: flex-start;
    }
`;

export const HomeContainer = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media ${device.tablet} { 
        height: 350px;
    }
`;

export const HomeImage = styled.img`
    width: 292px;
    height: 442px;
    transition: all .3s ease-out;    
    &:hover{
        transform: scale(1.1);
    }
    @media ${device.laptop} { 
        &:hover{
            transform: scale(1);
        }
    }
    @media ${device.tablet} { 
        width: 162px;
        height: 252px;
    }
`;

export const HomeTitle = styled.h1`
    font-weight: 900;
        @media ${device.tablet} { 
        font-size: 25px;
    }
`;

export const HomeText = styled.p`
    font-size: 25px;
    font-style: italic;
    text-align: center;
    margin: 0 50px;
    @media ${device.tablet} { 
        font-size: 20px;
    }
    @media ${device.mobileL} { 
        font-size: 15px;
    }
`;