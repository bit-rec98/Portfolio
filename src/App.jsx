import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from './pages/Index'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import UsageTerms from './pages/UsageTerms'
import { NavBarProvider } from './contexts/NavBarContext'


const App = () => {
    
  return (
    <>
      <BrowserRouter>
        <NavBarProvider>
          <Navbar />
          <main id="main-container">
            <Routes>
              <Route path="/" element={<Index />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/terms" element={<UsageTerms></UsageTerms>}></Route>
            </Routes>
          </main>
          <Footer />
        </NavBarProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
