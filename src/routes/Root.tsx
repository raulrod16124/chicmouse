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

const AppPage = React.lazy(() => import('modules/apps/components/AppPage'));
const MatchupPrivacyPolicyEN = React.lazy(() =>
  import('modules/privacy-policy/MatchupPrivacyPolicyEN').then(m => ({
    default: m.MatchupPrivacyPolicyEN,
  })),
);
const MatchupPrivacyPolicyES = React.lazy(() =>
  import('modules/privacy-policy/MatchupPrivacyPolicyES').then(m => ({
    default: m.MatchupPrivacyPolicyES,
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
const MatchupTermsAndConditionsEN = React.lazy(() =>
  import('modules/terms-and-conditions/MatchupTermsAndConditionsEN').then(
    m => ({default: m.MatchupTermsAndConditionsEN}),
  ),
);
const MatchupTermsAndConditionsES = React.lazy(() =>
  import('modules/terms-and-conditions/MatchupTermsAndConditionsES').then(
    m => ({default: m.MatchupTermsAndConditionsES}),
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
      <Nav />
      <Routes>
        {/* Main single-page layout */}
        <Route path="/" element={<SinglePage />} />

        {/* Secondary pages — legal / app detail */}
        <Route element={<SecondaryLayout />}>
          <Route path="applications/:id" element={<AppPage />} />
          <Route
            path="applications/:id/privacy-policy"
            element={
              language === 'es-ES' ? (
                <MatchupPrivacyPolicyES />
              ) : (
                <MatchupPrivacyPolicyEN />
              )
            }
          />
          <Route
            path="applications/:id/terms-and-conditions"
            element={
              language === 'es-ES' ? (
                <MatchupTermsAndConditionsES />
              ) : (
                <MatchupTermsAndConditionsEN />
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
