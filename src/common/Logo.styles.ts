import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "utils";

export const LogoWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const LogoLink = styled(Link)`
    margin: 0 auto;
`;

export const LogoImg = styled.img`
    margin-top: 15px;
    width: 65px;
    height: 55px;
    transition: all .3s ease-out;
    &:hover{
        transform: scale(1.2);
    }
`;

