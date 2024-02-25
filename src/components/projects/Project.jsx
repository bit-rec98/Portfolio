import "../../css/projects.css";

const Project = ({ projectData }) => {
    // console.log(projectData.image);

    return (
        <a href={projectData.link}>
            <figure className="project-item">
                <img
                src={`../../assets/img/projects/lth-store.png`}
                alt={`${projectData.title}`}
                />
                <h2>{projectData.title}</h2>
                <figcaption>{`${projectData.description}`}</figcaption>
            </figure>
        </a>
    );
};

export default Project;
