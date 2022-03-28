import React, { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import "./assets/fonts/OpenSans/stylesheet.css";
import "./assets/fonts/Rubik/stylesheet.css";
import "./assets/fonts/Roboto/stylesheet.css";
import "./App.css";
import Main from "./pages/Main";
import Footer from "./components/Footer/Footer";
import { Menu } from "./components/Menu/Menu";
import Projects from "./pages/Projects";
import Tokenomics from "./pages/Tokenomics";
import ScrollToTop from "./functions/ScrollToTop";
import Governance from "./pages/Governance";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/governance" && <Menu />}
      <ScrollToTop />
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/projects' exact element={<Projects />} />
        <Route path='/tokenomics' exact element={<Tokenomics />} />
        <Route path='/governance' exact element={<Governance />} />
      </Routes>
      {location.pathname !== "/governance" && <Footer />}
    </>
  );
}

export default App;
