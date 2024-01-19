import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <section id="home-section">
        <NavLink className='home-item' to='/projects'>Projects</NavLink>
        <NavLink className='home-item' to='/about'>About</NavLink>
        <NavLink className='home-item' to='/github'>GitHub</NavLink>
        <NavLink className='home-item' to='/contact'>Contact</NavLink>
    </section>
  )
}

export default Home