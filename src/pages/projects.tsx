import "../style/projects.css";

import { FaArrowUpRightFromSquare, FaGithub  } from "react-icons/fa6";

import { projects } from "../data/projects";
import { Tabs } from "../component/tabs";

export const Projects = () =>{
    return(
        <div className="pageOuterContainer">
            <Tabs/>
            <div className="projectPageContainer">
                {projects.map((project, index) => (
                    <div className="projectContainer" key={index}>
                        <div className="projectInfo">
                            <img src={project.image} alt={project.name} />
                            <h1 className="projectName">{project.name}</h1>
                            <p className="projectDescription">{project.description}</p>
                        </div>
                        <div className="projectTools">
                            <ul>
                                {project.tools.map((tool, index) => (
                                    <li key={index}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="projectLinks">
                            <a href={project.liveSiteLink} target="_blank" rel="noopener noreferrer">
                                <FaArrowUpRightFromSquare />
                            </a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="githubIcon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}