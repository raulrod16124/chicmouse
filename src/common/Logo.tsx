import logo from "assets/logo.webp";
import Acronym from "assets/cm.webp";
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
