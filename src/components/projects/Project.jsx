import '../../css/projects.css'

const Project = ({imgSource, projectName = "title", projectDescription = "Project description"}) => {
    return (
        <figure className="project-item">
            <img src={`${imgSource}`} alt={`${projectName}`} />
            <h2>{projectName}</h2>
            <figcaption>{`${projectDescription}`}</figcaption>
        </figure>
    );
};

export default Project;
