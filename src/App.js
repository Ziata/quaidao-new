import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/fonts/OpenSans/stylesheet.css";
import "./assets/fonts/Rubik/stylesheet.css";
import "./assets/fonts/Roboto/stylesheet.css";
import "./App.css";
import Main from "./pages/Main";
import Footer from "./components/Footer/Footer";
import { Menu } from "./components/Menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' exact element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
