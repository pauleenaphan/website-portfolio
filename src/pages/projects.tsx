import { useState } from "react";
import "../style/projects.css";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { projects } from "../data/projects";
import { Tabs } from "../component/tabs";

import { ToolSelectBtn } from "../component/tool";


export const Projects = () => {
    // State to keep track of selected tools
    const [selectedTools, setSelectedTools] = useState<string[]>([]);

    // Function to toggle tool selection
    const toggleTool = (tool: string) => {
        // Updates selected tools by adding or removing the previous state
        setSelectedTools((prevTools: string[]) => { 
            // If the tool is already selected, then we remove it
            if (prevTools.includes(tool)) { 
                return prevTools.filter((t) => t !== tool); 
            } else {
                // else add it to the arr
                return [...prevTools, tool]; // Add the tool if it's not selected
            }
        });
    };

    // Filter out projects based on selected tools 
    const filteredProjects = projects.filter((project) =>
        selectedTools.every((tool) => project.tools.includes(tool))
    );

    return (
        <div className="pageOuterContainer">
            <Tabs />
            <div className="projectPageContainer">
                <div className="toolSelectorOuterContainer">
                    <p> Filter projects by tools and language </p>
                    <div className="toolSelectorContainer">
                        <ToolSelectBtn tool="HTML" selectedTools={selectedTools} toggleTool={toggleTool} />
                        <ToolSelectBtn tool="CSS" selectedTools={selectedTools} toggleTool={toggleTool} />
                        <ToolSelectBtn tool="Javascript" selectedTools={selectedTools} toggleTool={toggleTool} />
                        <ToolSelectBtn tool="React" selectedTools={selectedTools} toggleTool={toggleTool} />
                        <ToolSelectBtn tool="React Native" selectedTools={selectedTools} toggleTool={toggleTool} />
                        <ToolSelectBtn tool="MongoDB" selectedTools={selectedTools} toggleTool={toggleTool} />
                        <ToolSelectBtn tool="Firebase" selectedTools={selectedTools} toggleTool={toggleTool} />
                        <ToolSelectBtn tool="Node.js" selectedTools={selectedTools} toggleTool={toggleTool} />
                        <ToolSelectBtn tool="Express.js" selectedTools={selectedTools} toggleTool={toggleTool} />
                        <ToolSelectBtn tool="Typescript" selectedTools={selectedTools} toggleTool={toggleTool} />
                        <ToolSelectBtn tool="Amazon S3" selectedTools={selectedTools} toggleTool={toggleTool} />
                        <ToolSelectBtn tool="Tailwind CSS" selectedTools={selectedTools} toggleTool={toggleTool} />
                    </div>
                    
                </div>
                {filteredProjects.map((project, index) => (
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
    );
};
