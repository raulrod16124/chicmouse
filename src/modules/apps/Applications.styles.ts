import styled from "styled-components";
import { device } from "utils";

export const AppsWrapper= styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    @media ${device.tablet} { 
        margin-top: 50px;
    }
`;

export const AppsList= styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    width: 1600px;
    justify-content: center;
`;

export const AppContent= styled.div<{hover:string}>`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 400px;
    max-width: 500px;
    height: 100px;
    border-radius: 2.5px;
    border: .5px solid #000;
    margin: 20px;
    transition: all .3s ease-out;

    &:hover{
        transform: ${props => props.hover === "active" ? "scale(1.1)" : "none"};
    }

    @media ${device.tablet} { 
        width: 90%;
        max-width: 90%;
    }
`;

export const AppIcon= styled.img`
    width: 100px;
    height: 100%;
    margin: auto 0;
`;

export const AppInfoContent= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    width: 200px;
    @media ${device.mobileL} { 
        width: 120px;
    }
`;

export const AppTitle= styled.span`
    font-size: 20px;
    font-weight: 600;
    text-align: end;
    @media ${device.mobileL} { 
        font-size: 15px;
    }
`;

export const AppWrappercontent= styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
`;

export const AppTextContent= styled.div`
    display: flex;
    align-items: center;
    margin: 0 10px;
`;

export const AppText= styled.p`
    font-size: 12px;
    margin: 0 5px;
    @media ${device.mobileL} { 
        font-size: 8px;
    }
`;