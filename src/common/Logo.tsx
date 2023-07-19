import logo from "assets/logo.png";
import { LogoImg, LogoLink, LogoWrapper } from "./Logo.styles";

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoLink to={"/"}>
        <LogoImg src={logo} alt="logo-image" />
      </LogoLink>
    </LogoWrapper>
  )
}
