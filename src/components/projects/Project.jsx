import "../../css/projects.css";
import { SlLink } from "react-icons/sl";
import { VscGithubInverted } from "react-icons/vsc";

const Project = ({ projectData, darkMode, spanishLanguage }) => {
  return (
    <>
      <figure className="project-item">
        <a href={projectData.link} target="_blank" rel="noreferrer">
          <img
            src={`/src/assets/img/projects/${projectData.image}`}
            alt={spanishLanguage
                ? projectData.title.spanish
                : projectData.title.english}
            loading="lazy"
          />
        </a>
        <figcaption
          className={darkMode ? "project-caption darkMode" : "project-caption"}
        >
          <h2>{spanishLanguage
                ? projectData.title.spanish
                : projectData.title.english}</h2>
          <div className="project-data">
            <p>
              {spanishLanguage
                ? projectData.description.spanish
                : projectData.description.english}
            </p>
            <div className="card-actions">
              <a
                className="project-link"
                href={projectData.link}
                target="_blank"
                rel="noreferrer"
              >
                <SlLink size={"1.5rem"} />
              </a>
              <a
                className="project-link"
                href={projectData.github}
                target="_blank"
                rel="noreferrer"
              >
                <VscGithubInverted size={"1.5rem"} />
              </a>
            </div>
          </div>
        </figcaption>
      </figure>
    </>
  );
};

export default Project;
