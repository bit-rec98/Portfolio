/* component to render on the rest of paths */
import { NavLink } from "react-router-dom";

const NavItems = ({darkMode, spanishLanguage}) => {
    return (
        <>
            <ul id="navbar-items">
                <li className="navbar-list-item">
                    <NavLink className={darkMode ? "darkMode navbar-item" : "navbar-item"} to="/">{spanishLanguage ? "Iniciar" : "Get started"}</NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink className={darkMode ? "darkMode navbar-item" : "navbar-item"} to="/home">{spanishLanguage ? "Menú" : "Home"}</NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink className={darkMode ? "darkMode navbar-item" : "navbar-item"} to="/about">{spanishLanguage ? "Acerca de mí" : "About me"}</NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink className={darkMode ? "darkMode navbar-item" : "navbar-item"} to="/projects">{spanishLanguage ? "Proyectos" : "Projects"}</NavLink>
                </li>
            </ul>
        </>
    );
};

export default NavItems;



// className={darkMode ? "darkMode" : ""} onClick={handleDarkMode(true)}