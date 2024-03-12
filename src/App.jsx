// import './css/darkMode.css'
import "./App.css";
import "../src/css/polygons.css";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import UsageTerms from "./pages/UsageTerms";
import NotFound from "./pages/NotFound";

import PolygonA from "../src/components/polygons/PolygonA";
import PolygonB from "../src/components/polygons/PolygonB";
import PolygonC from "../src/components/polygons/PolygonC";
import PolygonD from "./components/polygons/PolygonD";
import PolygonE from "./components/polygons/PolygonE";
import PolygonF from "./components/polygons/PolygonF";

const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
    console.log(darkMode);
  };

  const [spanish, setSpanish] = useState(false);
    const handleTranslation = () => {
        setSpanish(true);
    };

  return (
    <>
      <BrowserRouter>
        <main id="main-container" className={darkMode ? "darkMode" : ""}>
          <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} handleTranslation={handleTranslation} spanishLanguage={spanish}/> 
          <Routes>
            <Route
              path="/"
              element={
                <Index darkMode={darkMode} spanishLanguage={spanish}/>
              }
            ></Route>
            <Route
              path="/home"
              element={
                <Home darkMode={darkMode} spanishLanguage={spanish}/>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <About darkMode={darkMode} spanishLanguage={spanish}/>
              }
            ></Route>
            <Route
              path="/projects"
              element={
                <Projects darkMode={darkMode} spanishLanguage={spanish}/>
              }
            ></Route>
            <Route
              path="/contact"
              element={
                <Contact darkMode={darkMode} spanishLanguage={spanish}/>
              }
            ></Route>
            <Route
              path="/terms"
              element={
                <UsageTerms darkMode={darkMode} spanishLanguage={spanish}/>
              }
            ></Route>
            <Route
              path="/*"
              element={
                <NotFound darkMode={darkMode} spanishLanguage={spanish}/>
              }
            ></Route>
          </Routes>
          <PolygonA />
          <PolygonB />
          <PolygonC />
          <PolygonD />
          <PolygonE />
          <PolygonF />
          <Footer darkMode={darkMode} handleTranslation={handleTranslation} spanishLanguage={spanish} />
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
