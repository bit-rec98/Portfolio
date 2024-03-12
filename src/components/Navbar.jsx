import NavItems from "./navbar/NavItems";
import "../css/navbar.css";
import { useLocation } from "react-router";

// {darkMode, handleDarkMode}

const Navbar = ({handleDarkMode, darkMode}) => {
    const location = useLocation();
    const isIndex = location.pathname === "/";

    return (
        <header>
            <nav className={darkMode ? "darkMode" : ""} id="navbar">
                {isIndex ? (
                    <button
                        id="theme-btn"
                        className={darkMode ? "darkMode" : ""}
                        onClick={handleDarkMode}
                    ></button>
                ) : (
                    <>
                        <NavItems 
                        darkMode={darkMode} 
                        />
                        <button
                            id="theme-btn"
                            className={darkMode ? "darkMode" : ""}
                            onClick={handleDarkMode}
                        ></button>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
