import { ErrorPage } from "common/ErrorPage";
import { Home } from "modules/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}  errorElement={<ErrorPage />} />
      <Route path="/home" element={<Home />}  errorElement={<ErrorPage />} />
      <Route path="/applications" element={<div>Applications</div>} errorElement={<ErrorPage />} />
      <Route path="/about-us" element={<div>About us</div>} errorElement={<ErrorPage />} />
      <Route path="/contact" element={<div>Contact</div>} errorElement={<ErrorPage />} />
    </Routes>
  )
}
