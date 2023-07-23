import styled from "styled-components";
import { device } from "utils";

export const EmailText = styled.a`
    font-size: 20px;
    font-style: italic;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    color: #009C89;
    
    @media ${device.laptop} { 
        margin-top: 50px;
    }
`;