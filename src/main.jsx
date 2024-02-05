import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './css/styles.css'
import './css/animations.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Index from './pages/Index'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <Navbar/>
      <main id='main-container'>
        <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
  </React.StrictMode>,
)
