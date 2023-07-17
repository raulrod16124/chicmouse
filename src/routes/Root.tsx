import { ErrorPage } from "common/ErrorPage";
import { AboutUs } from "modules/aboutUs/AboutUs";
import { Applications } from "modules/apps/Applications";
import AppPage from "modules/apps/components/AppPage";
import { Home } from "modules/home/Home";
import { Nav } from "modules/nav/Nav";
import { Route, Routes, useLocation } from "react-router-dom";

const pages = ["home", "applications", "about-us", "contact", ""];

export const Root = () => {

  const { pathname } = useLocation();

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
        <Route path="/contact" element={<div>Contact</div>}/>
      </Routes>
    </>
  )
}
