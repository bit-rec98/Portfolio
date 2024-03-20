import "../css/about.css";
import "../css/technology.css";
import "../css/contactForm.css";
import Technology from "../components/about/Technology";
import { technologies } from "../data/technologies.json";
import ContactForm from "../components/about/ContactForm";
// import TechnologySlider from "../components/about/TechnologySlider";

const About = ({darkMode, spanishLanguage}) => {

  return (
    <section id="about-section" className={darkMode ? "darkMode" : ""}>
      <h1 id="about-title">{spanishLanguage ? "Acerca de mí" : "About me"}</h1>
      <article>
        <p>
          {spanishLanguage ? 
          <>
            Soy estudiante de desarrollo web(3) Full Stack y estoy enfocado en el aprendizaje de los stacks MERN/MEAN así como Solidity para el entorno web y los contratos inteligentes mediante cursos, lectura de documentación oficial y autodidactismo a largo plazo. Además, soy estudiante autodidacta de diseño UX/UI mediante estudio de contenido afín a esta etapa de diseño de un proyecto.
            <br />
            Además de mis estudios, estoy participando en la construcción de
            <a href="https://quantumscript.services" target="_blank" rel="noreferrer" id="qss-link" className={darkMode ? "darkMode" : ""}>
              QuantumScript Services
            </a>
            , la cual es una agencia de desarrollo de aplicaciones web y servicios IT para negocios que necesiten un diseño innovador, eficiente y acorde a las mejores prácticas de la industria.
          </> 
          : 
          <>
          I am Full Stack web(3) student focused on learning MERN/MEAN stack as
          well as Solidity for smart contracts development both by attending
          courses, reading documentation and self-teaching on the long term.
          Also, I am self-taught learner on UX/UI design via studying related content to this stage of a project development.  
          <br />
          Also, I am participating
          in building
          <a href="https://quantumscript.services" target="_blank" rel="noreferrer" id="qss-link" className={darkMode ? "darkMode" : ""}>
            QuantumScript Services
          </a>, which is a web apps development and IT services agency for businesses which require
          an innovative design, efficient and build following the best practices applied in the industry.
          </>}
        </p>
      </article>
      <hr />
      <article>
        <h2 className="about-subtitle">{spanishLanguage ? "Stack de tecnologías" : "Tech stack"}</h2>
        <p>
          {spanishLanguage ? "A continuación podrán ver las tecnologías que sé utilizar organizadas por su correspondiente tipo de propósito" : "Here below you will see my current tech stack sorted by its corresponding purpose type"} 
        </p>
        <div id="tech-stack-container">
          <h3>{spanishLanguage ? "Desarrollo Frontend y Diseño" : "Frontend Development and Design"}</h3>
          <div className="technology-container">
            {technologies &&
                  technologies.map((technology) => {
                    if (technology.type === "frontend") {
                      return (
                        <Technology
                          key={technology.id}
                          technologyData={technology}
                          darkMode={darkMode}
                        />
                      );
                    }
                  }
                )
              }
          {/* <TechnologySlider technologiesData={technologies} darkMode={darkMode} technologyType="frontend"/> -> Agregar en mobile */}
          </div>
          <hr />
          <h3>{spanishLanguage ? "Desarrollo Backend" : "Backend Development"}</h3>
          <div className="technology-container">
            {technologies &&
              technologies.map((technology) => {
                if (technology.type === "backend") {
                  return (
                    <Technology
                      key={technology.id}
                      technologyData={technology}
                      darkMode={darkMode}
                    />
                  );
                }
              })}
          </div>
          <hr />
          <h3>{spanishLanguage ? "Sistemas de gestión de bases de datos y ODMs" : "Database Management Systems and ODMs"}</h3>
          <div className="technology-container">
            {technologies &&
              technologies.map((technology) => {
                if (technology.type === "dbms") {
                  return (
                    <Technology
                      key={technology.id}
                      technologyData={technology}
                      darkMode={darkMode}
                    />
                  );
                }
              })}
            {technologies &&
              technologies.map((technology) => {
                if (technology.type === "orm") {
                  return (
                    <Technology
                      key={technology.id}
                      technologyData={technology}
                      darkMode={darkMode}
                    />
                  );
                }
              })}
          </div>
          <hr />
          <h3>{spanishLanguage ? "Sistemas de control de versiones" : "Version control systems"}</h3>
          <div className="technology-container">
          {
            technologies && technologies.map((technology) => {
              if(technology.type === "vcs"){
                return (
                  <Technology
                    key={technology.id}
                    technologyData={technology}
                    darkMode={darkMode}
                  />
                )
              }
            })
          }
          </div>
        </div>
      </article>
      <hr />
      <article>
        <h2 className="about-subtitle">
          {spanishLanguage ? "¡Dejame un mensaje para poder contactarte!" : "Leave me a message so I can contact you!"}
        </h2>
        <ContactForm darkMode={darkMode} spanishLanguage={spanishLanguage} />
      </article>
    </section>
  );
};

export default About;
