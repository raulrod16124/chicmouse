import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "utils";

export const ErrorPageWrapper = styled.div`
    width: 100%;
    height: 80%;
    padding-top: 150px;
    @media ${device.laptop} {
        padding-top: 50px;
    }
`;

export const ErrorPageContent = styled.div`
    width: 1000px;
    min-height: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media ${device.laptop} {
        width: 90%;
    }
`;

export const RedirectButton = styled(Link)`
    margin: 0 auto;
    font-size: 20px;
    @media ${device.laptop} {
        font-size: 15px;
    }
`;

export const ErrorPageImg = styled.img`
    margin-top: 15px;
    width: 200px;
    height: 300px;
    transition: all .3s ease-out;

`;

export const ErrorPageText = styled.p`
    font-size: 25px;
    font-style: italic;
    text-align: center;
    @media ${device.laptop} {
        font-size: 15px;
    }
`;