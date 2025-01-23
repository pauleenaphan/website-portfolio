import { useEffect } from "react";

import "../style/skills.css";

import { Tabs } from "../component/tabs";

import { FaHtml5,FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGitAlt } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { RiFirebaseLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";

export const Skills = () =>{
    useEffect(() => {
        document.title = "Pauleena Phan | Skills";
    }, []);

    return(
        <div className="pageOuterContainer">
            <Tabs/>
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
                <div className="iconContainer">
                    <RiTailwindCssFill className="skillIcon"/>
                    <p className="iconName"> Tailwind CSS </p>
                </div>
            </div>
        </div>
        
    )
}