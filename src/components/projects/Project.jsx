import "../../css/projects.css";
import { SlLink } from "react-icons/sl";
import { VscGithubInverted } from "react-icons/vsc";

const Project = ({ projectData }) => {
    // console.log(projectData)

    return (
        <>
            <figure className="project-item">
                <a href={projectData.link} target="_blank" rel="noreferrer">
                    <img src={`/src/assets/img/projects/${projectData.image}`} alt={projectData.name}/>
                </a>
                <figcaption className="project-caption">
                    <h2>{projectData.title}</h2>
                    <div className="project-data">
                        <p>{projectData.description}</p>
                        <div className="card-actions">
                            <a className="project-link" href={projectData.link} target="_blank" rel="noreferrer">
                                <SlLink size={"1.5rem"} />
                            </a>
                            <a className="project-link" href={projectData.github} target="_blank" rel="noreferrer">
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
