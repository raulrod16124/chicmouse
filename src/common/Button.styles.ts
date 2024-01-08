import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "utils";

type TCustomButton = {
  disabled?: boolean;
  fontSize?: number;
  color?: string;
  background?: string;
  align?: string;
  width?: number;
  height?: number;
  margin?: string;
  type?: string;
};

export const CustomButton = styled.button<TCustomButton>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "15px")};
  color: ${(props) => (props.color ? props.color : "#000")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  align-self: ${(props) => (props.align ? props.align : "auto")};
  width: ${(props) => (props.width ? props.width + "px" : "auto")};
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  opacity: ${(props) => (props.disabled ? "0.8" : "1")};

  border-radius: 5px;
  border: 0.5px solid transparent;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.mobileL} {
    font-size: 10px;
  }
`;

export const ExternalLink = styled.a<TCustomButton>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "15px")};
  color: ${(props) => (props.color ? props.color : "#000")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  align-self: ${(props) => (props.align ? props.align : "auto")};
  width: ${(props) => (props.width ? props.width + "px" : "auto")};
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  opacity: ${(props) => (props.disabled ? "0.8" : "1")};

  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  border: 0.5px solid;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-out;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.mobileL} {
    font-size: 10px;
    border-radius: 5px;
  }
`;
