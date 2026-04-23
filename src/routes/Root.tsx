import {ErrorPage} from 'common/ErrorPage';
import {Footer} from 'common/Footer';
import {LoadingScreen} from 'common/LoadingScreen';
import {LanguageContext} from 'context/LanguageContext';
import {Home} from 'modules/home/Home';
import {Nav} from 'modules/nav/Nav';
import React, {Suspense, useContext} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {BodyWrapper, PageContent} from './Root.styles';
import {AnimatePresence, motion} from 'framer-motion';
import {pageTransition} from 'animations/variants';
import {useReducedMotion} from 'hooks/useReducedMotion';

const AboutUs = React.lazy(() =>
  import('modules/aboutUs/AboutUs').then(m => ({default: m.AboutUs})),
);
const Applications = React.lazy(() =>
  import('modules/apps/Applications').then(m => ({default: m.Applications})),
);
const AppPage = React.lazy(() => import('modules/apps/components/AppPage'));
const Contact = React.lazy(() =>
  import('modules/contact/Contact').then(m => ({default: m.Contact})),
);
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

const pages = [
  '',
  'home',
  'applications',
  'about-us',
  'contact',
  'privacy-policy',
  'terms-and-conditions',
];

export const Root = () => {
  const {pathname} = useLocation();
  const {language} = useContext(LanguageContext);
  const reducedMotion = useReducedMotion();

  const wrongPathname = !pages.includes(pathname.split('/')[1]);

  if (wrongPathname) {
    return <ErrorPage />;
  }

  return (
    <div>
      <Nav />
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
                <Routes location={{pathname}} key={pathname}>
                  <Route path={'/'} element={<Home />} />
                  <Route path={'/home'} element={<Home />} />
                  <Route path={'/applications'} element={<Applications />} />
                  <Route path={'applications/:id'} element={<AppPage />} />
                  <Route
                    path={'applications/:id/privacy-policy'}
                    element={
                      language === 'es-ES' ? (
                        <MatchupPrivacyPolicyES />
                      ) : (
                        <MatchupPrivacyPolicyEN />
                      )
                    }
                  />
                  <Route
                    path={'applications/:id/terms-and-conditions'}
                    element={
                      language === 'es-ES' ? (
                        <MatchupTermsAndConditionsES />
                      ) : (
                        <MatchupTermsAndConditionsEN />
                      )
                    }
                  />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route
                    path="/privacy-policy"
                    element={
                      language === 'es-ES' ? (
                        <PrivacyPolicyES />
                      ) : (
                        <PrivacyPolicyEN />
                      )
                    }
                  />
                  <Route
                    path="/terms-and-conditions"
                    element={
                      language === 'es-ES' ? (
                        <TermsAndConditionsES />
                      ) : (
                        <TermsAndConditionsEN />
                      )
                    }
                  />
                </Routes>
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </PageContent>
        <Footer />
      </BodyWrapper>
    </div>
  );
};
