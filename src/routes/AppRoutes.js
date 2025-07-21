import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs/index";
import Home from "../pages/Home/index";
import Career from "../pages/Career/index";
import WebDevelopment from "../pages/WebDevelopment/index";
import Portfolio from "../pages/Portfolio/index";
import ProjectDetails from "../pages/ProjectDetails/index";
// import Blog from "../pages/Blog/index";
import ContactUs from "../pages/ContactUs/index";
import RecentProjects from "../pages/RecentProjects/index";
import AppDevelopment from "../pages/AppDevelopment/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/career" element={<Career />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:projectId" element={<ProjectDetails />} />
      <Route path="/recent-project/:projectId" element={<RecentProjects />} />
      {/* <Route path="/blog" element={<Blog />} /> */}
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/app-development" element={<AppDevelopment />} />
    </Routes>
  );
};

export default AppRoutes;
