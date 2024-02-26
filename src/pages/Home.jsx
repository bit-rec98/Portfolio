import { NavLink } from "react-router-dom"
import '../css/home.css'

const Home = () => {
  return (
    <section id="home-section">
      <h1>Welcome! I’m Cristian Recabarren, UX/UI designer & Full Stack Web(3) developer</h1>
      <div id="home-section-container">
        <NavLink className='home-item' to='/projects'>Projects</NavLink>
        <NavLink className='home-item' to='/about'>About</NavLink>
        <NavLink className='home-item' to='/contact'>Contact</NavLink>
      </div>
    </section>
  )
}

export default Home