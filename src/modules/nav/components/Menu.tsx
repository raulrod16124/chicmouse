import { MenuItem } from "types";
import { menu } from "utils/menu";
import { MenuItemContent, MenuWrapper } from "../Nav.styles";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";

export const Menu = () => {
  const intl = useIntl();

  const { pathname } = useLocation();

  const renderMenuItem = ({ name, icon, path}: MenuItem) => {
    const currentPath = pathname.split("/")[1].length ? pathname : "/home";

    return (
      <MenuItemContent 
        key={name}
        to={path}
        selected={currentPath === path}
      >
        {intl.formatMessage({id: name})}
      </MenuItemContent>
    )
  }

  return (
    <MenuWrapper>
      { menu.map( (menuItem:MenuItem) => {
        return renderMenuItem(menuItem);
      }) }
    </MenuWrapper>
  )
}
