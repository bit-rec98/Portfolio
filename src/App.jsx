// import './css/darkMode.css'
import "./App.css";
import "../src/css/polygons.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import PolygonA from "../src/components/polygons/PolygonA";
import PolygonB from "../src/components/polygons/PolygonB";
import PolygonC from "../src/components/polygons/PolygonC";
import PolygonD from "./components/polygons/PolygonD";
import PolygonE from "./components/polygons/PolygonE";
import PolygonF from "./components/polygons/PolygonF";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [spanishLanguage, setSpanishLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage === 'spanish';
  });

  useEffect(() => {
    localStorage.setItem('language', spanishLanguage ? 'spanish' : 'english');
  }, [spanishLanguage]);

  const handleTranslation = () => {
    setSpanishLanguage(!spanishLanguage);
  };

  return (
    <>
      <BrowserRouter>
        <main id="main-container" className={darkMode ? "darkMode" : ""}>
          <Navbar
            handleDarkMode={handleDarkMode}
            darkMode={darkMode}
            handleTranslation={handleTranslation}
            spanishLanguage={spanishLanguage}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Index darkMode={darkMode} spanishLanguage={spanishLanguage} />
              }
            ></Route>
            <Route
              path="/home"
              element={
                <Home darkMode={darkMode} spanishLanguage={spanishLanguage} />
              }
            ></Route>
            <Route
              path="/about"
              element={
                <About darkMode={darkMode} spanishLanguage={spanishLanguage} />
              }
            ></Route>
            <Route
              path="/projects"
              element={
                <Projects
                  darkMode={darkMode}
                  spanishLanguage={spanishLanguage}
                />
              }
            ></Route>
            <Route
              path="/contact"
              element={
                <Contact
                  darkMode={darkMode}
                  spanishLanguage={spanishLanguage}
                />
              }
            ></Route>
            <Route
              path="/*"
              element={
                <NotFound
                  darkMode={darkMode}
                  spanishLanguage={spanishLanguage}
                />
              }
            ></Route>
          </Routes>
          <PolygonA />
          <PolygonB />
          <PolygonC />
          <PolygonD />
          <PolygonE />
          <PolygonF />
          <Footer
            darkMode={darkMode}
            handleTranslation={handleTranslation}
            spanishLanguage={spanishLanguage}
          />
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
