import styled from "styled-components";
import { device } from "utils";
import theme from "./../../theme.json";

export const ContactWrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px;
  min-height: 40vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px auto 100px auto;
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactImage = styled.img`
  align-self: center;
  width: 400;
  height: 200px;

  @media ${device.laptop} {
    width: 250px;
    height: 200px;
  }
`;

export const TextContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 50px;

  @media ${device.laptop} {
    width: 100%;
    margin-top: 25px;
    margin-left: 0;
    margin-bottom: 100px;
  }
`;

export const Text = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-size: 18px;
  color: ${theme.colors.white};

  @media ${device.laptop} {
    width: 100%;
    margin-top: 25px;
    margin-left: 0;
  }
`;

export const CheeseText = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-size: 15px;
  color: ${theme.colors.white};

  @media ${device.laptop} {
    width: 100%;
    margin-top: 25px;
    margin-left: 0;
  }
`;
