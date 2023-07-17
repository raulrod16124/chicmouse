import styled from "styled-components";

type TFlag = {
    selected: boolean;
    onClick: (language: string) => void;
}

export const FlagsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const Flag = styled.img<TFlag>`
    width: 25px;
    height: 25px;
    margin: 0 20px;
    cursor: pointer;
    border-radius: 50%;
    border: ${props => props.selected && "2px solid white"};
    transition: all .3s ease-out;

    &:hover{
        transform: ${props => !props.selected && "scale(1.5)"};
    }

`;