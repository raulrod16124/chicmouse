import {memo, useState, useCallback, useContext, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {useIntl} from 'react-intl';
import {Menu, X} from 'lucide-react';
import {LanguageContext} from 'context/LanguageContext';
import {useScrolled} from 'hooks/useScrolled';
import {useActiveSection} from 'hooks/useActiveSection';
import logoImg from 'assets/logo.webp';
import type {SectionId} from 'types';
import {
  NavBar,
  NavInner,
  NavLogoLink,
  NavLinks,
  NavLink,
  NavRight,
  LangToggle,
  LangButton,
  LangSeparator,
  HamburgerButton,
  DrawerOverlay,
  DrawerPanel,
  DrawerHeader,
  DrawerCloseButton,
  DrawerNavLink,
  DrawerLangToggle,
} from './Nav.styles';

interface INavItem {
  id: SectionId;
  labelKey: string;
}

const DISPLAY_NAV_ITEMS: INavItem[] = [
  {id: 'hero', labelKey: 'home'},
  {id: 'games', labelKey: 'games'},
  {id: 'studio', labelKey: 'aboutUs'},
  {id: 'contact', labelKey: 'contact'},
];

const scrollToSection = (id: SectionId) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({behavior: 'smooth'});
};

export const Nav = memo(() => {
  const intl = useIntl();
  const {language, changeMessages} = useContext(LanguageContext);
  const scrolled = useScrolled();
  const activeSection = useActiveSection();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const isHome = pathname === '/';

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  // Close drawer with Escape key
  useEffect(() => {
    if (!drawerOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDrawer();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [drawerOpen, closeDrawer]);

  const handleNavClick = useCallback(
    (id: SectionId) => {
      if (isHome) {
        scrollToSection(id);
      } else {
        navigate(id === 'hero' ? '/' : `/#${id}`);
      }
      closeDrawer();
    },
    [isHome, navigate, closeDrawer],
  );

  const handleLogoClick = useCallback(
    (e: React.MouseEvent) => {
      if (isHome) {
        e.preventDefault();
        scrollToSection('hero');
      }
    },
    [isHome],
  );

  return (
    <>
      <NavBar $scrolled={scrolled}>
        <NavInner>
          <NavLogoLink
            href="/"
            onClick={handleLogoClick}
            aria-label="ChicMouse Studio — go to top">
            <img src={logoImg} alt="ChicMouse Studio" width={44} height={44} />
          </NavLogoLink>

          <NavLinks>
            {DISPLAY_NAV_ITEMS.map(({id, labelKey}) => (
              <NavLink
                key={id}
                $active={
                  activeSection === id ||
                  (id === 'studio' && activeSection === 'team')
                }
                onClick={() => handleNavClick(id)}>
                {intl.formatMessage({id: labelKey})}
              </NavLink>
            ))}
          </NavLinks>

          <NavRight>
            <LangToggle>
              <LangButton
                $active={!language?.startsWith('es')}
                onClick={() => changeMessages('en-US')}
                aria-label="Switch to English">
                EN
              </LangButton>
              <LangSeparator>/</LangSeparator>
              <LangButton
                $active={language?.startsWith('es')}
                onClick={() => changeMessages('es-ES')}
                aria-label="Cambiar a Español">
                ES
              </LangButton>
            </LangToggle>

            <HamburgerButton onClick={openDrawer} aria-label="Open menu">
              <Menu size={22} />
            </HamburgerButton>
          </NavRight>
        </NavInner>
      </NavBar>

      {drawerOpen && (
        <>
          <DrawerOverlay onClick={closeDrawer} aria-hidden="true" />
          <DrawerPanel
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu">
            <DrawerHeader>
              <img
                src={logoImg}
                alt="ChicMouse Studio"
                width={44}
                height={44}
              />
              <DrawerCloseButton onClick={closeDrawer} aria-label="Close menu">
                <X size={22} />
              </DrawerCloseButton>
            </DrawerHeader>

            {DISPLAY_NAV_ITEMS.map(({id, labelKey}) => (
              <DrawerNavLink
                key={id}
                $active={
                  activeSection === id ||
                  (id === 'studio' && activeSection === 'team')
                }
                onClick={() => handleNavClick(id)}>
                {intl.formatMessage({id: labelKey})}
              </DrawerNavLink>
            ))}

            <DrawerLangToggle>
              <LangButton
                $active={language?.startsWith('es')}
                onClick={() => {
                  changeMessages('es-ES');
                  closeDrawer();
                }}
                aria-label="Cambiar a Español">
                ES
              </LangButton>
              <LangSeparator>/</LangSeparator>
              <LangButton
                $active={!language?.startsWith('es')}
                onClick={() => {
                  changeMessages('en-US');
                  closeDrawer();
                }}
                aria-label="Switch to English">
                EN
              </LangButton>
            </DrawerLangToggle>
          </DrawerPanel>
        </>
      )}
    </>
  );
});

Nav.displayName = 'Nav';
