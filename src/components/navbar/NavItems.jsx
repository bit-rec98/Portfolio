import { NavLink } from "react-router-dom";

const NavItems = () => {
    return (
        <>
            <ul id="navbar-items">
                <li className="navbar-list-item">
                <NavLink className="navbar-item" to="/">Start</NavLink>
                </li>
                <li className="navbar-list-item">
                <NavLink className="navbar-item" to="/home">Home</NavLink>
                </li>
                <li className="navbar-list-item">
                <NavLink className="navbar-item" to="/about">About</NavLink>
                </li>
                <li className="navbar-list-item">
                <NavLink className="navbar-item" to="/projects">Projects</NavLink>
                </li>
            </ul>
            <button id="theme-btn">Theme</button>
        </>
    );
};

export default NavItems;
