import { ErrorPage } from "common/ErrorPage";
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
        <Route path={"/"} element={<Home />}  errorElement={<ErrorPage />} />
        <Route path={"/home"} element={<Home />}  errorElement={<ErrorPage />} />
        <Route path="/applications" element={<div>Applications</div>} errorElement={<ErrorPage />} />
        <Route path="/about-us" element={<div>About us</div>} errorElement={<ErrorPage />} />
        <Route path="/contact" element={<div>Contact</div>} errorElement={<ErrorPage />} />
      </Routes>
    </>
  )
}
