import '../css/footer.css'
import { NavLink } from "react-router-dom"

const Footer = ({darkMode, handleTranslation, spanishLanguage}) => {
    return (
        <footer id="footer">
            <ul id='footer-data'>
                <li>
                    <p className={darkMode ? "footer-item-paragraph darkMode" : "footer-item-paragraph"}>{spanishLanguage ? "Cristian Recabarren | Desarrollador web(3) fullstack & Diseñador UX/UI" : "Cristian Recabarren | Full Stack web(3) developer & UX/UI Designer"}</p>
                </li>
                <li>
                    <p className={darkMode ? "footer-item-paragraph darkMode" : "footer-item-paragraph"}>Córdoba, Argentina - 2024</p>
                </li>
            </ul>
            <ul id="footer-items">
                <li className={darkMode ? "footer-item darkMode" : "footer-item"}>
                    <a href="https://www.linkedin.com/in/recabarren-cristian/" target="_blank" rel='noreferrer'>LinkedIn</a>
                </li>
                <li className={darkMode ? "footer-item darkMode" : "footer-item"}>
                    <a href="https://github.com/bit-rec98" target="_blank" rel='noreferrer'>GitHub</a>
                </li>
                <li className={darkMode ? "footer-item darkMode" : "footer-item"}>
                    <NavLink to='/contact'>{spanishLanguage ? "Contacto" : "Contact"}</NavLink>
                </li>
            </ul>
        </footer>
    )
}

export default Footer