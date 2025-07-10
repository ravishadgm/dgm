import React from "react";
import { Routes, Route } from "react-router-dom";
import Career from "../pages/Career/index";
import Home from "../pages/Home/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career" element={<Career />} />

    </Routes>
  );
};

export default AppRoutes;
