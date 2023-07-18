import { ErrorPage } from "common/ErrorPage";
import { LanguageContext } from "context/LanguageContext";
import { AboutUs } from "modules/aboutUs/AboutUs";
import { Applications } from "modules/apps/Applications";
import AppPage from "modules/apps/components/AppPage";
import { Contact } from "modules/contact/Contact";
import { Home } from "modules/home/Home";
import { Nav } from "modules/nav/Nav";
import { PrivacyPolicyEN } from "modules/privacy-policy/PrivacyPolicyEN";
import { PrivacyPolicyES } from "modules/privacy-policy/PrivacyPolicyES";
import { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const pages = ["", "home", "applications", "about-us", "contact", "privacy-policy"];

export const Root = () => {

  const { pathname } = useLocation();
  const { language } = useContext(LanguageContext);

  const wrongPathname = !pages.includes(pathname.split("/")[1]);

  if(wrongPathname){
    return <ErrorPage />
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/home"} element={<Home />}/>
        <Route path={"/applications"} element={<Applications />}/>
          <Route path={"applications/:id"} element={<AppPage />} />
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/privacy-policy" element={language === "es-ES" ? <PrivacyPolicyES /> : <PrivacyPolicyEN />}/>
      </Routes>
    </>
  )
}
