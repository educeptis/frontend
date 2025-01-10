import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom"

import HomePage from "./views/homepage"
import AboutUsPage from "./views/about";
import FeaturesPage from "./views/features";

import LoginPage from "./views/login"
import RegistrationPage from "./views/register"

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
