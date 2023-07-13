import { MenuItem } from "types";
import { menu } from "utils/menu";
import { MenuItemContent, MenuWrapper } from "../Nav.styles";
import { useIntl } from "react-intl";
import { useLocation } from "react-router-dom";

export const Menu = () => {
  const intl = useIntl();

  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];

  const onChangeSection = () => {

  }

  const renderMenuItem = ({ name, icon, path}: MenuItem) => {
    return (
      <MenuItemContent 
        key={name}
        to={path}
        onClick={onChangeSection}
        style={ currentPath === name.toLocaleLowerCase() ? {
          backgroundColor: "##36CDBB"
        } : null}
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
