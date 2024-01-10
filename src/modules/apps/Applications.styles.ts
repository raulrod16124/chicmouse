import styled from "styled-components";
import { device } from "utils";
import theme from "./../../theme.json";

export const AppsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  @media ${device.tablet} {
    margin-top: 50px;
    overflow-x: hidden;
  }
`;

export const AppsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 1600px;
  min-height: 60vh;
  justify-content: center;
  margin-bottom: 50px;
  @media ${device.tablet} {
    min-height: 100vh;
    overflow-x: hidden;
  }
`;

export const AppContent = styled.div<{
  hover: string;
  cursor: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  padding: 15px;
  width: auto;
  min-width: 200px;
  max-width: 500px;
  background: linear-gradient(${theme.colors.blue}, ${theme.colors.blueDarken});
  border-radius: 10px;
  margin: 20px;
  transition: all 0.3s ease-out;
  -webkit-box-shadow: 1px 9px 15px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 9px 15px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 9px 15px -6px rgba(0, 0, 0, 0.75);
  cursor: ${(props) => props.cursor && props.cursor};

  &:hover {
    transform: ${(props) => (props.hover === "active" ? "scale(1.1)" : "none")};
  }

  @media ${device.tablet} {
    width: auto;
    max-width: 90%;
    margin-top: 0;
  }
`;

export const AppImage = styled.img`
  width: 200px;
  height: 100%;
  border-radius: 10px;
  margin: auto 0;
`;

export const AppInfoContent = styled.div<{ opacity: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  opacity: ${(props) => props.opacity && props.opacity};
  @media ${device.mobileL} {
    width: 120px;
  }
`;

export const AppTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  padding: 5px 10px;
  color: ${theme.colors.white};
  @media ${device.mobileL} {
    font-size: 15px;
  }
`;

export const AppWrappercontent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 10px 0;
`;

export const AppTextContent = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0 5px -5px;
  padding: 0 10px;
`;

export const AppText = styled.p`
  font-size: 12px;
  margin: 0 5px;
  color: ${theme.colors.white};
  @media ${device.laptop} {
    font-size: 10px;
  }
`;
