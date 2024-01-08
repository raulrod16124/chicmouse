import styled from "styled-components";
import { device } from "utils";
import theme from "./../../theme.json";

export const AboutUsWrapper = styled.div`
  position: absolute;
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

export const AboutUsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  max-width: 1000px;
  margin-bottom: 50px;
`;

export const CharacterInfoWrapper = styled.div`
  display: flex;
  &:last-of-type {
    margin-top: 50px;
  }

  @media ${device.laptop} {
    align-items: center;
    flex-direction: column;
  }
`;

export const CharacterImage = styled.img`
  width: 250px;
  height: auto;
  @media ${device.laptop} {
    width: 250px;
    height: auto;
    margin-bottom: 50px;
  }
`;

export const CharacterTextContent = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

export const CharacterTitle = styled.p<{
  padding?: string;
  textalign?: string;
}>`
  padding: ${(props) => props.padding && props.padding};
  text-align: ${(props) => props.textalign && props.textalign};
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  color: ${theme.colors.white};

  @media ${device.laptop} {
    width: 90%;
    padding: 0;
    margin: 0 auto 20px auto;
  }
`;

export const CharacterText = styled.p`
  padding: 20px 100px 0 20px;
  font-size: 18px;
  color: ${theme.colors.white};

  @media ${device.laptop} {
    font-size: 15px;
    width: 90%;
    padding: 0;
    margin: 0 auto;
  }
`;
