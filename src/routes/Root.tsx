import { ErrorPage } from "common/ErrorPage";
import { Footer } from "common/Footer";
import { LanguageContext } from "context/LanguageContext";
import { AboutUs } from "modules/aboutUs/AboutUs";
import { Applications } from "modules/apps/Applications";
import AppPage from "modules/apps/components/AppPage";
import { Contact } from "modules/contact/Contact";
import { Home } from "modules/home/Home";
import { Nav } from "modules/nav/Nav";
import { MatchupPrivacyPolicyEN } from "modules/privacy-policy/MatchupPrivacyPolicyEN";
import { MatchupPrivacyPolicyES } from "modules/privacy-policy/MatchupPrivacyPolicyES";
import { PrivacyPolicyEN } from "modules/privacy-policy/PrivacyPolicyEN";
import { PrivacyPolicyES } from "modules/privacy-policy/PrivacyPolicyES";
import { MatchupTermsAndConditionsEN } from "modules/terms-and-conditions/MatchupTermsAndConditionsEN";
import { MatchupTermsAndConditionsES } from "modules/terms-and-conditions/MatchupTermsAndConditionsES";
import { TermsAndConditionsEN } from "modules/terms-and-conditions/TermsAndConditionsEN";
import { TermsAndConditionsES } from "modules/terms-and-conditions/TermsAndConditionsES";
import { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { BodyWrapper } from "./Root.styles";

const pages = [
  "",
  "home",
  "applications",
  "about-us",
  "contact",
  "privacy-policy",
  "terms-and-conditions",
];

export const Root = () => {
  const { pathname } = useLocation();
  const { language } = useContext(LanguageContext);

  const wrongPathname = !pages.includes(pathname.split("/")[1]);

  if (wrongPathname) {
    return <ErrorPage />;
  }

  return (
    <div>
      <Nav />
      <BodyWrapper>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/applications"} element={<Applications />} />
          <Route path={"applications/:id"} element={<AppPage />} />
          <Route
            path={"applications/:id/privacy-policy"}
            element={
              language === "es-ES" ? (
                <MatchupPrivacyPolicyES />
              ) : (
                <MatchupPrivacyPolicyEN />
              )
            }
          />
          <Route
            path={"applications/:id/terms-and-conditions"}
            element={
              language === "es-ES" ? (
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
              language === "es-ES" ? <PrivacyPolicyES /> : <PrivacyPolicyEN />
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              language === "es-ES" ? (
                <TermsAndConditionsES />
              ) : (
                <TermsAndConditionsEN />
              )
            }
          />
        </Routes>
        <Footer />
      </BodyWrapper>
    </div>
  );
};
