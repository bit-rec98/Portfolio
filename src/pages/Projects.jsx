import '../css/projects.css'
import Project from "../components/projects/Project"
import {projects} from '../data/projects.json'

const Projects = ({darkMode, spanishLanguage}) => {

  return (
    <section id="projects-section" className={darkMode ? "darkMode" : ""}>
        <h1>Explore my projects here below!</h1>
        <article>
          <div id="projects-container">
            {projects.map((project) => (
              <Project key={project.id} projectData={project} darkMode={darkMode} spanishLanguage={spanishLanguage}/>
          ))}
          </div>
        </article>
    </section>
  )
}

export default Projects