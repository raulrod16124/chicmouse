import { Link } from "react-router-dom";
import { device } from "utils";
import styled from "styled-components";
import theme from "./../../../theme.json";

export const AppPageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 1200px;
  margin-bottom: 100px;

  @media ${device.laptopM} {
    width: 900px;
  }
  @media ${device.laptop} {
    width: 600px;
  }
  @media ${device.tablet} {
    width: 100%;
    margin-top: 0;
    flex-direction: column;
  }
  @media ${device.mobileL} {
    margin-top: 0;
    margin-bottom: 100px;
  }
`;

export const BackArrowButton = styled.div`
  display: none;
  position: absolute;
  align-self: center;
  cursor: pointer;
  @media ${device.laptop} {
    display: block;
    top: -60px;
    left: -80px;
  }
  @media ${device.tablet} {
    top: 2vh;
    left: 20px;
  }
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
    /* align-items: center; */
    width: 70%;
    margin: 50px auto 0 auto;
  }
  @media ${device.mobileL} {
    width: 90%;
    min-height: 200px;
    margin: 0 auto 0 auto;
    justify-content: center;
  }
`;

export const SideTextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  @media ${device.mobileL} {
    height: 100px;
    justify-content: center;
  }
`;

export const AppImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 150px;
    height: 150px;
    margin: 0;
  }
  @media ${device.mobileL} {
    width: 80px;
    height: 80px;
  }
`;

export const TextLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TextLink = styled(Link)`
  font-size: 12px;
  color: ${theme.colors.white};
  text-decoration: none;
  padding: 10px 0;
  @media ${device.mobileL} {
    font-size: 8px;
  }
`;

export const BodyInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 100%;

  @media ${device.laptop} {
    justify-content: flex-start;
  }
  @media ${device.tablet} {
    width: 90%;
    margin: 0 auto;
  }
`;

export const AppImages = styled.img`
  width: 130px;
  height: 280px;
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
  margin-top: 25px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: ${theme.colors.white};
  @media ${device.laptop} {
    font-size: 25px;
    margin-top: 0;
  }
  @media ${device.mobileL} {
    font-size: 20px;
  }
`;

export const AppTextContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`;

export const AppText = styled.p<{ fontSize?: string; margin?: string }>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
  font-style: italic;
  text-align: center;
  margin: ${(props) => props.margin && props.margin};
  color: ${theme.colors.white};

  @media ${device.laptop} {
    font-size: 15px;
  }
  @media ${device.mobileL} {
    margin: 0;
  }
`;

export const AppDescription = styled.div<{ margin?: string }>`
  padding: 0 30px;
  margin-top: 25px;
  margin: ${(props) => props.margin && props.margin};
  color: ${theme.colors.white};
  height: max-content;

  @media ${device.laptop} {
    padding: 0 20px;
    margin-bottom: 100px;
  }

  @media ${device.mobileL} {
    padding: 50px 5px 50px 5px;
    &:last-of-type {
      margin-top: 0;
    }
  }
`;
