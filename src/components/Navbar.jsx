import NavItems from "./navbar/NavItems";
import "../css/navbar.css";
import { useLocation } from "react-router";
import TriggerResponsiveMenu from "./navbar/TriggerResponsiveMenu";

const Navbar = ({handleDarkMode, darkMode, spanishLanguage, handleTranslation}) => {
    const location = useLocation();
    const isIndex = location.pathname === "/";

    return (
        <header>
            <nav className={darkMode ? "darkMode" : ""} id="navbar">
                {isIndex ? (
                    <>
                        <button
                            id="translate-btn"
                            onClick={handleTranslation}
                            className={darkMode ? "darkMode" : ""}
                            >
                                {spanishLanguage ? "English" : "Español"}
                        </button>
                        <button
                            id="theme-btn"
                            className={darkMode ? "darkMode" : ""}
                            onClick={handleDarkMode}
                        />

                    </>
                ) : (
                    <>
                        <NavItems 
                        darkMode={darkMode}
                        spanishLanguage={spanishLanguage}
                        />
                        <button
                            id="translate-btn"
                            onClick={handleTranslation}
                            className={darkMode ? "darkMode" : ""}
                            >
                                {spanishLanguage ? "English" : "Español"}
                        </button>
                        <button
                            id="theme-btn"
                            className={darkMode ? "darkMode" : ""}
                            onClick={handleDarkMode}
                        />
                        <TriggerResponsiveMenu darkMode={darkMode} spanishLanguage={spanishLanguage}></TriggerResponsiveMenu>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Navbar;