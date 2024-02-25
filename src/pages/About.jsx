import "../css/about.css";
import "../css/technology.css";
import Technology from "../components/about/Technology";
import { technologies } from "../data/technologies.json";
import Contact from "./Contact";

const About = () => {
  return (
    <section id="about-section">
      <h1 id="about-title">About me</h1>
      <article>
        <p>
          I am Fullstack web(3) student focused on learning MERN/MEAN stack as
          well as Solidity for smart contracts development both by attending
          courses, reading documentation and self-teaching on the long term.
          Also, I am self-taught learner on UX/UI design and I am participating
          in building{" "}
          <a href="#" target="_blank">
            QuantumScript Services
          </a>
          , which is a website development agency for businesses which require
          an innovative design, efficient and optimized architecture.
        </p>
      </article>
      <hr />
      <article>
        <h2 className="about-subtitle">Tech stack</h2>
        <p>
          Here below you will see my current tech stack sorted by environment
          type
        </p>

        <div id="tech-stack-container">
          <h3>Frontend Development</h3>
          <div className="technology-container">
            {technologies &&
              technologies.map((technology) => {
                if (technology.type === "frontend") {
                  return (
                    <Technology
                      key={technology.id}
                      technologyData={technology}
                    />
                  );
                }
              })}
          </div>
          <hr />
          <h3>Backend Development</h3>
          <div className="technology-container">
            {technologies &&
              technologies.map((technology) => {
                if (technology.type === "backend") {
                  return (
                    <Technology
                      key={technology.id}
                      technologyData={technology}
                    />
                  );
                }
              })}
          </div>
          <hr />
          {/* <h3>Operating Systems</h3>
          <div className="technology-container">
            {technologies &&
              technologies.map((technology) => {
                if (technology.type === "oses") {
                  return (
                    <Technology
                      key={technology.id}
                      technologyData={technology}
                    />
                  );
                }
              })}
          </div>
          <hr /> */}
          <h3>Database Management Systems</h3>
          <div className="technology-container">
            {technologies &&
              technologies.map((technology) => {
                if (technology.type === "dbms") {
                  return (
                    <Technology
                      key={technology.id}
                      technologyData={technology}
                    />
                  );
                }
              })}
          </div>
        </div>
      </article>
      <hr />
      <article>
        <h2 className="about-subtitle">
          Leave me a message so I can contact you!
        </h2>
        <Contact />
      </article>
    </section>
  );
};

export default About;
