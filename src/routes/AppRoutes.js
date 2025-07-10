import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from '../pages/AboutUs/index'
import Home from '../pages/Home/index'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/about-us" element={<AboutUs />} />
     
    </Routes>
  );
};

export default AppRoutes;
