import "../style/skills.css";

import { FaHtml5,FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGitAlt } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { RiFirebaseLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";

export const Skills = () =>{
    return(
        <div className="skillsPageContainer">
            <div className="iconContainer">
                <FaHtml5 className="skillIcon"/>
                <p className="iconName"> HTML </p>
            </div>
            <div className="iconContainer">
                <FaCss3Alt className="skillIcon"/>
                <p className="iconName"> CSS </p>
            </div>
            <div className="iconContainer">
                <FaJs className="skillIcon"/>
                <p className="iconName"> Javascript </p>
            </div>
            <div className="iconContainer">
                <FaNodeJs className="skillIcon"/>
                <p className="iconName"> Node.Js </p>
            </div>
            <div className="iconContainer">
                <SiExpress className="skillIcon"/>
                <p className="iconName"> Express.Js </p>
            </div>
            <div className="iconContainer">
                <FaReact className="skillIcon"/>
                <p className="iconName"> React </p>
            </div>
            <div className="iconContainer">
                <SiMongodb className="skillIcon"/>
                <p className="iconName"> MongoDB </p>
            </div>
            <div className="iconContainer">
                <RiFirebaseLine className="skillIcon"/>
                <p className="iconName"> Firebase </p>
            </div>
            <div className="iconContainer">
                <FaGitAlt className="skillIcon"/>
                <p className="iconName"> Git </p>
            </div>
            <div className="iconContainer">
                <BiLogoVisualStudio className="skillIcon"/>
                <p className="iconName"> VS Code </p>
            </div>
            <div className="iconContainer">
                <SiTypescript className="skillIcon"/>
                <p className="iconName"> Typescript </p>
            </div>
        </div>
    )
}