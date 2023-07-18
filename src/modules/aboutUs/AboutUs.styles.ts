import styled from "styled-components";
import { device } from "utils";

export const AboutUsWrapper= styled.div`
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

export const AboutUsContent= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 1200px;
`;

export const CharacterInfoWrapper= styled.div`
    display: flex;
    align-items: center;
    &:last-of-type{
        margin-top: 50px;
    }

    @media ${device.laptop} { 
        flex-direction: column;
    }
`;

export const CharacterImage= styled.img`
    width: 300px;
    height: 450px;
    @media ${device.laptop} { 
        width: 150px;
        height: 250px;
        margin-bottom: 50px;
    }
`;

export const CharacterTextContent= styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CharacterTitle= styled.p<{
    padding?:string, 
    textalign?:string
}>`
    padding: ${props => props.padding && props.padding};
    text-align: ${props => props.textalign && props.textalign};
    font-size: 30px;
    font-weight: 600;
    font-style: italic;

    @media ${device.laptop} { 
        font-size: 25px;
        width: 90%;
        padding: 0;
        margin: 0 auto;
    }
`;

export const CharacterText = styled.p<{padding?:string}>`
    padding: ${props => props.padding && props.padding};
    font-size: 20px;
    @media ${device.laptop} { 
        font-size: 15px;
        width: 90%;
        padding: 0;
        margin: 0 auto;
    }
`;