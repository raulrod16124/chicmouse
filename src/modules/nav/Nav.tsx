import { useEffect, useState } from "react";
import { Logo } from "./../../common/Logo";
import { NavContainer, NavWrapper } from "./Nav.styles";
import { FarMenuItems } from "./components/FarMenuItems";
import { Menu } from "./components/Menu";
import { ResponsiveMenu } from "./components/ResponsiveMenu";
import { useWindowSize } from "hooks/useWindowSize";

export const Nav = () => {
  const { smallScreenDetected } = useWindowSize();

  const renderNavigation = (smallWindow: boolean) => {
    if (smallWindow) {
      return (
        <>
          {" "}
          <ResponsiveMenu /> <Logo />{" "}
        </>
      );
    }
    return (
      <>
        {" "}
        <Logo /> <Menu />{" "}
      </>
    );
  };

  return (
    <NavWrapper>
      <NavContainer>
        {renderNavigation(smallScreenDetected)}
        <FarMenuItems />
      </NavContainer>
    </NavWrapper>
  );
};
