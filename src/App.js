import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes"; 
import "@styles/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        
          <AppRoutes /> 

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
