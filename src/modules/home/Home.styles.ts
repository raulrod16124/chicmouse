import styled from "styled-components";

export const HomeWrapper= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HomeContainer = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const HomeImage = styled.img`
    width: 292px;
    height: 442px;
`;

export const HomeTitle = styled.h1`
    font-weight: 900;
`;

export const HomeText = styled.p`
    font-size: 25px;
    font-style: italic;
`;