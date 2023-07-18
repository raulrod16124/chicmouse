import styled from "styled-components";
import { device } from "utils";

export const PrivacyPolicyWrapper= styled.div`
    width: 1000px;
    height: max-content;
    margin: 0 auto;

    @media ${device.laptop} { 
        width: 90%;
    }
`;

export const PrivacyPolicyContent= styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 100px auto;

    @media ${device.tablet} { 
        margin-top: 50px;
    }
`;

export const TextTitle= styled.h2`
    margin-bottom: 50px;
`;

export const TextSubtitle= styled.h3`
    margin-top: 50px;
    margin-bottom: 25px;
    @media ${device.tablet} { 
        margin-top: 50px;
    }
`;

export const Text = styled.p<{margin?:string}>`
    margin: ${props => props.margin && props.margin};
    font-size: 15px;
`;

export const TextList = styled.ul<{margin?:string}>`
    margin: ${props => props.margin && props.margin};
`;
