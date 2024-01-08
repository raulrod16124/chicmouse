import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FloatItem,
  FloatItemContent,
  FloatMenu,
  ResponsiveNavContainer,
} from "./ResponsiveMenu.styles";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import { MenuItem } from "types";
import { menu } from "utils";

export const ResponsiveMenu = () => {
  const intl = useIntl();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const { pathname } = useLocation();

  const renderMenuItem = ({ name, icon, path }: MenuItem) => {
    const currentPath = pathname.split("/")[1].length ? pathname : "/home";

    return (
      <FloatItem
        key={name}
        to={path}
        selected={currentPath === path}
        onClick={() => setOpenMenu(false)}
      >
        {intl.formatMessage({ id: name })}
      </FloatItem>
    );
  };

  return (
    <>
      <ResponsiveNavContainer onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? (
          <FontAwesomeIcon icon={faClose} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </ResponsiveNavContainer>
      {openMenu && (
        <FloatMenu>
          <FloatItemContent>
            {menu.map((menuItem: MenuItem) => {
              return renderMenuItem(menuItem);
            })}
          </FloatItemContent>
        </FloatMenu>
      )}
    </>
  );
};
