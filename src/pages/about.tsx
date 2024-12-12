import "../style/about.css"
import profilePic from "../assets/profilePic.jpg";
import { Tabs } from "../component/tabs";

import { FaCat } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { GiChipsBag } from "react-icons/gi";
import { LuFlower } from "react-icons/lu";

export const About = () =>{
    return(
        <div className="pageOuterContainer">
            <Tabs/>
            <div className="aboutPageContainer">
                <div className="aboutHeaderContainer">
                    <img src={profilePic} className="profilePic" alt="graduation photo"/>
                    <div className="aboutHeader">
                        <div>
                            <h1> Pauleena Phan </h1>
                            <div className="captionContainer">
                                <p> Aspiring Web Developer </p>
                                <div className="profileIcons">
                                    <FaCat />
                                    <IoGameController />
                                    <GiChipsBag />
                                    <LuFlower />
                                </div>
                                
                            </div>

                            
                        </div>
                        <div>
                            <p> California State University of Fullerton • 2020 - 2024 </p>
                            <p> Computer Science Graduate </p> 
                        </div>
                    </div>
                </div>
                <div className="aboutBodyContainer">
                    <h2> Summary: </h2> 
                    <p> 
                        Hi, my name is Pauleena, and I’m a recent Computer Science graduate from California State University, 
                        Fullerton. During college, I discovered my passion for building websites and set my sights
                        on becoming a web developer. I love creating websites because they are an integral part of our daily
                        lives—accessible 24/7 and full of opportunities to innovate and express creativity.

                        In my free time, I enjoy binge-watching shows, playing games, and spending time with friends. Thank
                        you for visiting my portfolio, and I hope you find something here that inspires you!
                    </p>
                </div>
            </div>
        </div>
        
    )
}