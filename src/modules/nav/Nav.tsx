import { Logo } from "./../../common/Logo"
import { NavContainer } from "./Nav.styles"
import { FarMenuItems } from "./components/FarMenuItems"
import { Menu } from "./components/Menu"

export const Nav = () => {
  return (
    <NavContainer>
        <Logo />
        <Menu />
        <FarMenuItems />
    </NavContainer>
  )
}
