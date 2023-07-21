import styled from "styled-components";
import { device } from "utils";

export const ContactWrapper= styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
`;

export const ContactTitle= styled.p`
    position: absolute;
    top: 120px;
    width: 100%;
    font-size: 25px;
    font-weight: 600;
    font-style: italic;
    text-align: center;
    
    @media ${device.laptop} { 
        font-size: 20px;
        width: 90%;
    }
    
    @media ${device.mobileL} { 
        font-size: 15px;
        width: 90%;
    }
`;

export const ContactContent= styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    /* With the ContactForm component the width are 1000px */
    /* width: 1000px;  */
    width: 800px;
    @media ${device.laptop} { 
       flex-direction: column;
    }
`;

export const ContactImage = styled.img`
    align-self: center;
    width: 350px;
    height: 500px;
    border-radius: 20px;
    margin-top: 50px;
    @media ${device.laptop} { 
        margin-top: 80px;
        width: 180px;
        height: 250px;
    }
    @media ${device.mobileL} { 
        margin-top: 80px;
    }
`;

export const SendingContent = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 420px;
`;

export const SentContent = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 420px;
`;

export const ErrorContent = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 420px;
`;

export const Text = styled.p`
    margin-top: 50px;
    font-size: 15px;
`;