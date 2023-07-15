import styled from "styled-components";
import { device } from "utils";

export const HomeWrapper= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${device.tablet} { 
        margin-top: 50px;
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
        height: 500px;
    }
`;

export const HomeImage = styled.img`
    width: 292px;
    height: 442px;
    @media ${device.tablet} { 
        width: 192px;
        height: 282px;
    }
`;

export const HomeTitle = styled.h1`
    font-weight: 900;
`;

export const HomeText = styled.p`
    font-size: 25px;
    font-style: italic;
    text-align: center;
    margin: 0 50px;
    @media ${device.mobileL} { 
        font-size: 15px;
    }
`;