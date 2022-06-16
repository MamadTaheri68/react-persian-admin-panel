import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import WebRoutes from "./pages/WebRoutes";

const App = () => {
  return (
    <div className="main-body">
      <BrowserRouter>
        <Navbar />
        <WebRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
