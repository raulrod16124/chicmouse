import styled from "styled-components";

export const NavContainer = styled.div`
    display: grid;
    grid-template-columns: .5fr 3fr .5fr;
    align-items: center;
    text-align: center;
    max-width: 1600px;
    height: 100px;
    margin: 0 auto;
    padding: 0;
    background-color: #000;
    color: #fff;

    & div{
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    & :nth-child(2){
        border-left: 0.5px solid #333;
        border-right: 0.5px solid #333;
        justify-content: left;
        padding: 0 50px;
    }
`;