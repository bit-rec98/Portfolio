// import './css/darkMode.css'
import './App.css'
import '../src/css/polygons.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBarProvider } from './contexts/NavBarContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from './pages/Index'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import UsageTerms from './pages/UsageTerms'
import NotFound from './pages/NotFound'

import PolygonA from '../src/components/polygons/PolygonA'
import PolygonB from '../src/components/polygons/PolygonB'
import PolygonC from '../src/components/polygons/PolygonC'

const App = () => {
    
  return (
    <>
      <BrowserRouter>
        <NavBarProvider>
          <main id="main-container">
          <Navbar />
            <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/terms" element={<UsageTerms></UsageTerms>}></Route>
              <Route path="/*" element={<NotFound/>}></Route>
            </Routes>
          <PolygonA/>
          <PolygonA/>
          <PolygonB/>
          <PolygonC/>
          <Footer />
          </main>
        </NavBarProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
