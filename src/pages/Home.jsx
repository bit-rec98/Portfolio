import { NavLink } from "react-router-dom";
import "../css/home.css";

const Home = ({ darkMode, spanishLanguage }) => {
  return (
    <section id="home-section" className={darkMode ? "darkMode" : ""}>
      <h1>
        {spanishLanguage
          ? "¡Hola! Mi nombre es Cristian Recabarren, soy desarrollador Full Stack Web(3) y diseñador UX/UI"
          : "Welcome! I’m Cristian Recabarren, Full Stack Web(3) developer & UX/UI designer"}
      </h1>
      <div id="home-section-container">
        <NavLink className="home-item" to="/projects">
          {spanishLanguage ? "Proyectos" : "Projects"}
        </NavLink>
        <NavLink className="home-item" to="/about">
          {spanishLanguage ? "Acerca de mí" : "About me"}
        </NavLink>
        <NavLink className="home-item" to="/contact">
          {spanishLanguage ? "Contacto" : "Contact"}
        </NavLink>
      </div>
    </section>
  );
};

export default Home;
