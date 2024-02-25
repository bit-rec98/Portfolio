import '../css/footer.css'
import { NavLink } from "react-router-dom"


const Footer = () => {
  return (
    <footer id="footer">
        <p className='footer-item-paragraph'>Cristian Recabarren | Full Stack Web(3) developer</p>
        <ul id="footer-items">
            <li className="footer-item">
                <a href="#" target="_blank">LinkedIn</a>
            </li>
            <li className="footer-item">
                <a href="#" target="_blank">GitHub</a>
            </li>
            <li className="footer-item">
                <NavLink to='/terms'>Términos y condiciones</NavLink>
            </li>
        </ul>
    </footer>
  )
}

export default Footer