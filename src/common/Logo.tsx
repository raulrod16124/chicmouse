import logo from "assets/logo.png";
import Acronym from "assets/cm.png";
import { LogoImg, LogoLink, LogoWrapper } from "./Logo.styles";

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoLink to={"/"}>
        <LogoImg src={Acronym} alt="logo-image" />
      </LogoLink>
    </LogoWrapper>
  );
};
