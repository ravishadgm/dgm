import React from "react";

import { BrowserRouter } from "react-router-dom";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
// import Home from "@pages/Home";
import "@styles/main.scss";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app-content">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
