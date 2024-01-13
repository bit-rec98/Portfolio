import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <nav id="navbar">
            <ul id="navbar-items">
                <li className="navbar-item">
                    <NavLink to="/">Start</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/projects">Projects</NavLink>
                </li>
            </ul>
            <button id="theme-btn">
                Theme
            </button>
        </nav>
    </header>
  )
}

export default Navbar