/* component to render on the rest of paths */
import { NavLink } from "react-router-dom";
// import SideMenu from "../SideMenu";

const NavItems = ({darkMode}) => {
    return (
        <>
            <ul id="navbar-items">
                <li className="navbar-list-item">
                    <NavLink className={darkMode ? "darkMode navbar-item" : "navbar-item"} to="/">Start</NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink className={darkMode ? "darkMode navbar-item" : "navbar-item"} to="/home">Home</NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink className={darkMode ? "darkMode navbar-item" : "navbar-item"} to="/about">About</NavLink>
                </li>
                <li className="navbar-list-item">
                    <NavLink className={darkMode ? "darkMode navbar-item" : "navbar-item"} to="/projects">Projects</NavLink>
                </li>
                {/* <li>
                    <SideMenu></SideMenu>
                </li> */}
            </ul>
        </>
    );
};

export default NavItems;



// className={darkMode ? "darkMode" : ""} onClick={handleDarkMode(true)}