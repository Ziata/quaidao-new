import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/fonts/OpenSans/stylesheet.css";
import "./assets/fonts/Rubik/stylesheet.css";
import "./assets/fonts/Roboto/stylesheet.css";
import "./App.css";
import Main from "./pages/Main";
import Footer from "./components/Footer/Footer";
import { Menu } from "./components/Menu/Menu";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/projects' exact element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
