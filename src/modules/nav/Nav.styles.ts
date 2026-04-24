import styled, {css, keyframes} from 'styled-components';
import {colors} from 'tokens/colors';
import {transitions, typography} from 'tokens';
import {device} from 'utils';

interface INavScrolledProps {
  $scrolled: boolean;
}

interface INavLinkProps {
  $active: boolean;
}

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
`;

export const NavBar = styled.header<INavScrolledProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 64px;
  background-color: ${colors.bgPrimary};
  border-bottom: 1px solid transparent;
  transition:
    border-color ${transitions.base},
    backdrop-filter ${transitions.base};

  ${({$scrolled}) =>
    $scrolled &&
    css`
      border-bottom-color: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(12px);
      background-color: rgba(11, 19, 43, 0.85);
    `}
`;

export const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogoLink = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;

  img {
    width: 44px;
    height: 22px;
    object-fit: contain;
    transition: transform ${transitions.fast};

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${device.laptop} {
    display: none;
  }
`;

export const NavLink = styled.a<INavLinkProps>`
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 14px;
  font-size: ${typography.body.fontSize};
  font-weight: 500;
  text-decoration: none;
  border-radius: 6px;
  cursor: pointer;
  transition: color ${transitions.fast};
  border-bottom: 2px solid transparent;

  color: ${({$active}) =>
    $active ? colors.textPrimary : colors.textSecondary};
  border-bottom-color: ${({$active}) =>
    $active ? colors.accentYellow : 'transparent'};

  &:hover {
    color: ${colors.textPrimary};
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LangToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 500;
  color: ${colors.textSecondary};
  user-select: none;

  @media ${device.laptop} {
    display: none;
  }
`;

interface ILangButtonProps {
  $active: boolean;
}

export const LangButton = styled.button<ILangButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 2px;
  font-size: 13px;
  font-weight: 500;
  transition: color ${transitions.fast};
  color: ${({$active}) =>
    $active ? colors.accentYellow : colors.textSecondary};

  &:hover {
    color: ${({$active}) =>
      $active ? colors.accentYellow : colors.textPrimary};
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentYellow};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export const LangSeparator = styled.span`
  color: rgba(255, 255, 255, 0.2);
  font-size: 12px;
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.textPrimary};
  padding: 6px;
  border-radius: 6px;
  transition: background-color ${transitions.fast};

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentYellow};
    outline-offset: 2px;
  }

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/* ── Mobile Drawer ─────────────────────────────────────── */

export const DrawerOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 200;
  backdrop-filter: blur(4px);
`;

export const DrawerPanel = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 85vw);
  background-color: ${colors.bgSecondary};
  z-index: 201;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: ${slideIn} 220ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const DrawerCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.textSecondary};
  padding: 6px;
  border-radius: 6px;
  transition: color ${transitions.fast};

  &:hover {
    color: ${colors.textPrimary};
  }

  &:focus-visible {
    outline: 2px solid ${colors.accentYellow};
    outline-offset: 2px;
  }
`;

export const DrawerNavLink = styled.a<INavLinkProps>`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 12px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color ${transitions.fast},
    color ${transitions.fast};

  color: ${({$active}) =>
    $active ? colors.textPrimary : colors.textSecondary};
  background-color: ${({$active}) =>
    $active ? 'rgba(255, 200, 87, 0.08)' : 'transparent'};
  border-left: 3px solid
    ${({$active}) => ($active ? colors.accentYellow : 'transparent')};

  &:hover {
    background-color: rgba(255, 255, 255, 0.04);
    color: ${colors.textPrimary};
  }
`;

export const DrawerLangToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding: 0 12px;
`;
