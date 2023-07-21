import styled from "styled-components";
import { device } from "utils";

export const EmailText = styled.p`
    font-size: 20px;
    font-style: italic;
    font-weight: 500;
    text-align: center;
    @media ${device.laptop} { 
        margin-top: 50px;
    }
`;