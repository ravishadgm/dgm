import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from '../pages/AboutUs/index'
import Home from '../pages/Home/index'
import Career from "../pages/Career/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/career" element={<Career />} />

    </Routes>
  );
};

export default AppRoutes;
