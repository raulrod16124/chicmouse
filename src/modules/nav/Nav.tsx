import { useEffect, useState } from "react";
import { Logo } from "./../../common/Logo"
import { NavContainer } from "./Nav.styles"
import { FarMenuItems } from "./components/FarMenuItems"
import { Menu } from "./components/Menu"
import { ResponsiveMenu } from "./components/ResponsiveMenu";

export const Nav = () => {
  const [smallScreenDetected, setSmallScreenDetected] = useState<boolean>(false);

  const handleWindowResize = () => {
    if(window.innerWidth < 1024){
      setSmallScreenDetected(true);
    } else {
      setSmallScreenDetected(false);
    }
  };

  const renderNavigation = (smallWindow:boolean) => {
    if(smallWindow){
      return ( <> <ResponsiveMenu /> <Logo /> </> )
    }
    return ( <> <Logo /> <Menu /> </>)
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <NavContainer>
        { renderNavigation(smallScreenDetected) }
        <FarMenuItems />
    </NavContainer>
  )
}
