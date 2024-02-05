import Project from "../components/projects/Project"

const Projects = () => {
  return (
    <section id="projects-section">
        <h1>Explore my projects here below!</h1>
        <article>
          <div id="projects-container">
            <Project imgSource='/public/img/react-logo.png'/>
            <Project imgSource='/public/img/react-logo.png'/>
            <Project imgSource='/public/img/react-logo.png'/>
            <Project imgSource='/public/img/react-logo.png'/>
            <Project imgSource='/public/img/react-logo.png'/>
            <Project imgSource='/public/img/react-logo.png'/>
          </div>
        </article>
    </section>
  )
}

export default Projects