import '../css/projects.css'
import Project from "../components/projects/Project"
import {projects} from '../data/projects.json'

const Projects = () => {

  return (
    <section id="projects-section">
        <h1>Explore my projects here below!</h1>
        <article>
          <div id="projects-container">
            {projects.map((project) => (
              <Project key={project.id} projectData={project}/>
          ))}
          </div>
        </article>
    </section>
  )
}

export default Projects