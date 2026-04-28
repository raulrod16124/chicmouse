import {CookieBanner} from 'common/CookieBanner/CookieBanner';
import {ErrorPage} from 'common/ErrorPage';
import {Footer} from 'common/Footer';
import {LoadingScreen} from 'common/LoadingScreen';
import {LanguageContext} from 'context/LanguageContext';
import {Nav} from 'modules/nav/Nav';
import {SinglePage} from 'pages/SinglePage';
import React, {Suspense, useContext} from 'react';
import {Outlet, Route, Routes, useLocation} from 'react-router-dom';
import {BodyWrapper, PageContent} from './Root.styles';
import {AnimatePresence, motion} from 'framer-motion';
import {pageTransition} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';

const GamePage = React.lazy(() => import('pages/GamePage/GamePage'));
const StellarMergePrivacyPolicyEN = React.lazy(() =>
  import('modules/privacy-policy/StellarMergePrivacyPolicyEN').then(m => ({
    default: m.StellarMergePrivacyPolicyEN,
  })),
);
const StellarMergePrivacyPolicyES = React.lazy(() =>
  import('modules/privacy-policy/StellarMergePrivacyPolicyES').then(m => ({
    default: m.StellarMergePrivacyPolicyES,
  })),
);
const PrivacyPolicyEN = React.lazy(() =>
  import('modules/privacy-policy/PrivacyPolicyEN').then(m => ({
    default: m.PrivacyPolicyEN,
  })),
);
const PrivacyPolicyES = React.lazy(() =>
  import('modules/privacy-policy/PrivacyPolicyES').then(m => ({
    default: m.PrivacyPolicyES,
  })),
);
const StellarMergeTermsAndConditionsEN = React.lazy(() =>
  import('modules/terms-and-conditions/StellarMergeTermsAndConditionsEN').then(
    m => ({default: m.StellarMergeTermsAndConditionsEN}),
  ),
);
const StellarMergeTermsAndConditionsES = React.lazy(() =>
  import('modules/terms-and-conditions/StellarMergeTermsAndConditionsES').then(
    m => ({default: m.StellarMergeTermsAndConditionsES}),
  ),
);
const TermsAndConditionsEN = React.lazy(() =>
  import('modules/terms-and-conditions/TermsAndConditionsEN').then(m => ({
    default: m.TermsAndConditionsEN,
  })),
);
const TermsAndConditionsES = React.lazy(() =>
  import('modules/terms-and-conditions/TermsAndConditionsES').then(m => ({
    default: m.TermsAndConditionsES,
  })),
);

/** Shared layout wrapper for all secondary (non-home) pages. */
const SecondaryLayout = () => {
  const {pathname} = useLocation();
  const reducedMotion = useReducedMotion();

  return (
    <BodyWrapper>
      <PageContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            variants={reducedMotion ? undefined : pageTransition}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{width: '100%'}}>
            <Suspense fallback={<LoadingScreen />}>
              <Outlet />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </PageContent>
      <Footer />
    </BodyWrapper>
  );
};

export const Root = () => {
  const {language} = useContext(LanguageContext);

  return (
    <>
      <CookieBanner />
      <Nav />
      <Routes>
        {/* Main single-page layout */}
        <Route path="/" element={<SinglePage />} />

        {/* Secondary pages — legal / app detail */}
        <Route element={<SecondaryLayout />}>
          <Route path="applications/:id" element={<GamePage />} />
          <Route
            path="applications/:id/privacy-policy"
            element={
              language === 'es-ES' ? (
                <StellarMergePrivacyPolicyES />
              ) : (
                <StellarMergePrivacyPolicyEN />
              )
            }
          />
          <Route
            path="applications/:id/terms-and-conditions"
            element={
              language === 'es-ES' ? (
                <StellarMergeTermsAndConditionsES />
              ) : (
                <StellarMergeTermsAndConditionsEN />
              )
            }
          />
          <Route
            path="privacy-policy"
            element={
              language === 'es-ES' ? <PrivacyPolicyES /> : <PrivacyPolicyEN />
            }
          />
          <Route
            path="terms-and-conditions"
            element={
              language === 'es-ES' ? (
                <TermsAndConditionsES />
              ) : (
                <TermsAndConditionsEN />
              )
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
