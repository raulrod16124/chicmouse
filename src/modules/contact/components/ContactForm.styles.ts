import styled from "styled-components";
import { device } from "utils";

export const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 420px;
    margin-top: 120px;
    @media ${device.laptop} { 
        margin-top: 20px;
        width: 90%;
        margin-bottom: 200px;
    }
`;

export const TextInput = styled.input`
    padding: 10px;
    padding-left: 20px;
    border-radius: 5px;
    border: 0.5px solid;
    margin: 10px auto;
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