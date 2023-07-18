import styled from "styled-components";
import { device } from "utils";

export const ContactWrapper= styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 100px;
    @media ${device.laptop} { 
        margin-top: 50px;
    }
`;

export const ContactContent= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 400px;
`;

export const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 420px;
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

export const TextInput = styled.input`
    padding: 10px;
    padding-left: 20px;
    border-radius: 5px;
    border: 0.5px solid;
    margin: 20px auto;
    width: 90%;
`;

export const Textarea = styled.textarea`
    padding: 10px;
    padding-left: 20px;
    border-radius: 5px;
    border: 0.5px solid;
    margin: 20px auto;
    width: 90%;
    min-height: 200px;
`;

export const TextError = styled.p`
    color: red;
    font-size: 10px;
    text-align: start;
    width: 90%;
`;

export const Text = styled.p`
    margin-top: 50px;
    font-size: 15px;
`;