import React from "react";

import { BrowserRouter } from "react-router-dom";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Home from "@pages/Home";
import "@styles/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Home />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
