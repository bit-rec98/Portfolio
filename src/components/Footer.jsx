import '../css/footer.css'
import { NavLink } from "react-router-dom"


const Footer = () => {
  return (
    <footer id="footer">
        <ul id='footer-data'>
            <li>
                <p className='footer-item-paragraph'>Cristian Recabarren | Full Stack Web(3) developer</p>
            </li>
            <li>
                <p className='footer-item-paragraph'>©Córdoba, Argentina - 2024</p>
            </li>
        </ul>
        <ul id="footer-items">
            <li className="footer-item">
                <a href="https://www.linkedin.com/in/rec-cristian98/" target="_blank" rel='noreferrer'>LinkedIn</a>
            </li>
            <li className="footer-item">
                <a href="https://github.com/bit-rec98" target="_blank" rel='noreferrer'>GitHub</a>
            </li>
            <li className="footer-item">
                <NavLink to='/contact'>Contacto</NavLink>
            </li>
            <li className="footer-item">
                <NavLink to='/terms'>Términos y condiciones</NavLink>
            </li>
        </ul>
    </footer>
  )
}

export default Footer