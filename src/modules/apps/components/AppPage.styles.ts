import styled from "styled-components";
import { device } from "utils";

export const AppPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 100px;
    width: 1200px;
    height: max-content;

    @media ${device.laptopM} { 
        width: 900px;
    }
    @media ${device.laptop} { 
        width: 600px;
    }
    @media ${device.tablet} { 
        width: 100%;
        margin-top: 25px;
        flex-direction: column;
    }
    /* border: 1px solid; */
`;

export const SideInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    min-height: 400px;
    height: fit-content;
    @media ${device.laptop} { 
        min-height: 300px;
    }
    @media ${device.tablet} { 
        flex-direction: row;
        align-items: center;
        width: 80%;
    }
    @media ${device.mobileL} { 
        width: 90%;
        margin: 0 auto;
        justify-content: center;
    }
`;

export const SideTextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: fit-content;
    @media ${device.mobileL} { 
        height: 80px;
        justify-content: center;
    }
`;

export const AppImage= styled.img`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    @media ${device.laptop} { 
        width: 120px;
        height: 120px;
    }
    @media ${device.mobileL} { 
        width: 80px;
        height: 80px;
        margin: 0;
    }
`;

export const BodyInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 800px;
    height: 600px;
    @media ${device.laptop} { 
        justify-content: flex-start;
    }
    @media ${device.tablet} { 
        width: 90%;
        margin: 0 auto;
    }
`;

export const AppImages= styled.img`
    width: 150px;
    height: 320px;
    margin: 0 auto;
    border-radius: 5px;
    @media ${device.laptop} { 
        width: 80px;
        height: 160px;
    }
    @media ${device.mobileL} { 
        width: 50px;
        height: 100px;
    }
`;

export const ImagesContent = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    @media ${device.tablet} { 
        width: 100%;
        margin: 0 auto;
    }
`;

export const AppTitle = styled.span`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    @media ${device.laptop} { 
        font-size: 25px;
    }
    @media ${device.mobileL} { 
        font-size: 20px;
    }
`;

export const AppTextContent = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AppText = styled.p<{fontSize?:string, margin?:string}>`
    font-size: ${props => props.fontSize ? props.fontSize : "20px"};
    font-style: italic;
    text-align: center;
    margin: ${props => props.margin && props.margin};
    @media ${device.laptop} { 
        font-size: 15px;
    }
    @media ${device.mobileL} { 
        margin: 0;
    }
`;

export const AppDescription = styled.p<{margin?:string}>`
    font-size: 25px;
    margin: ${props => props.margin && props.margin};
    padding: 0 60px;
    font-style: italic;

    @media ${device.laptop} { 
        font-size: 15px;
        padding: 0 20px;
    }
`;