import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from '../pages/AboutUs/index'
import Home from '../pages/Home/index'
import Career from "../pages/Career/index";
import WebDevelopment from "../pages/WebDevelopment/index"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/career" element={<Career />} />
      <Route path="/web-development" element={<WebDevelopment />} />

    </Routes>
  );
};

export default AppRoutes;
