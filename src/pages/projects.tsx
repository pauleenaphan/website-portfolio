import "../style/projects.css";

import { FaArrowUpRightFromSquare, FaGithub  } from "react-icons/fa6";

import meowPopImg from "../assets/projects/meowpop.png";
import blogWogimg from "../assets/projects/blogwog.png";
import cattagramImg from "../assets/projects/cattagram.png";
import mentalMeImg from "../assets/projects/mentalme.png";
import weatherWatcherImg from "../assets/projects/weatherwatcher.png";
import etchASketchImg from "../assets/projects/etchasketch.png";

export const Projects = () =>{
    return(
        <div className="projectPageContainer">
            {/* Meow pop project */}
            <div className="projectContainer">
                <div className="projectInfo">
                    <img src={meowPopImg} alt="meowpop"/>
                    <h1 className="projectName"> MeowPop </h1>
                    <p className="projectDescription"> 
                        An eccomerce cat website where user can browse and purchase items.
                        Users can also apply to become vendors and create product listings.
                    </p>
                </div>
                <div className="projectTools">
                    <ul className="projectTools">
                        <li> MongoDb </li> 
                        <li> Express.js </li>
                        <li> React </li>
                        <li> Node.js </li>
                        <li> Typescript </li>
                        <li> Amazon S3 </li>
                    </ul>
                </div>
                <div className="projectLinks">
                    <a href="https://main--meowpop.netlify.app/">
                        <FaArrowUpRightFromSquare />
                    </a>

                    <a href="https://github.com/pauleenaphan/Meow-Pop">
                        <FaGithub />
                    </a>
                </div>
            </div>

            {/* Blogwog Project */}
            <div className="projectContainer">
                <div className="projectInfo">
                    <img src={blogWogimg} alt="meowpop"/>
                    <h1 className="projectName"> BlogWog </h1>
                    <p className="projectDescription"> 
                        A blog site where users can browse various post. Registered
                        users can login to leave comments on post
                    </p>
                </div>
                <div className="projectTools">
                    <ul>
                        <li> MongoDb </li> 
                        <li> Express.js </li>
                        <li> React </li>
                        <li> Node.js </li>
                    </ul>
                </div>
                <div className="projectLinks">
                    <a href="https://main--blogwog.netlify.app/">
                        <FaArrowUpRightFromSquare />
                    </a>

                    <a href="https://github.com/pauleenaphan/blog-api">
                        <FaGithub />
                    </a>
                </div>
            </div>

            {/* Cattagram */}
            <div className="projectContainer">
                <div className="projectInfo">
                    <img src={cattagramImg} alt="meowpop"/>
                    <h1 className="projectName"> Cattagram </h1>
                    <p className="projectDescription"> 
                        Social media web app that focuses on cats. Users can view and post pictures
                        of their cats and add other users as friends.
                    </p>
                </div>
                
                <div className="projectTools">
                    <ul>
                        <li> HTML </li> 
                        <li> CSS </li>
                        <li> React </li>
                        <li> Javascript </li> 
                        <li> Firebase </li>
                    </ul>
                </div>
                <div className="projectLinks">
                    <a href="https://cattagram.netlify.app/">
                        <FaArrowUpRightFromSquare />
                    </a>

                    <a href="https://github.com/pauleenaphan/Cattagram">
                        <FaGithub />
                    </a>
                </div>
            </div>

            {/* MentalMe */}
            <div className="projectContainer">
                <div className="projectInfo">
                    <img src={mentalMeImg} alt="meowpop"/>
                    <h1 className="projectName"> Mental Me </h1>
                    <p className="projectDescription"> 
                        A mental wellness mobile app that focuses on journaling. Moobie, our
                        mascot, supports and guides users on their journaling journey.
                    </p>
                </div>
                <div className="projectTools">
                    <ul>
                        <li> React Native </li> 
                        <li> Firebase </li>
                        <li> Expo </li>
                    </ul>
                </div>
                <div className="projectLinks">
                    <a href="https://expo.dev/preview/update?message=fixed%20styling&updateRuntimeVersion=1.0.0&createdAt=2024-05-07T05%3A25%3A18.090Z&slug=exp&projectId=d55f227c-6164-4fc5-ac60-040c4b42bad2&group=f55c8b6c-df7a-4874-9605-f10a26a3b534">
                        <FaArrowUpRightFromSquare />
                    </a>

                    <a href="https://github.com/pauleenaphan/MentalMe">
                        <FaGithub />
                    </a>
                </div>
            </div>

            {/* Weather Watcher */}
            <div className="projectContainer">
                <div className="projectInfo">
                    <img src={weatherWatcherImg} alt="meowpop"/>
                    <h1 className="projectName"> Weather Watcher </h1>
                    <p className="projectDescription"> 
                        Weather page that allows users to enter a city to find the weather
                        conditions in that area. This project uses weather api
                    </p>
                </div>
                <div className="projectTools">
                    <ul>
                        <li> HTML </li> 
                        <li> Tailwind CSS </li>
                        <li> Javascript </li>
                        <li> Weather API </li>
                    </ul>
                </div>
                <div className="projectLinks">
                    <a href="https://pauleenaphan.github.io/weather-app/src/index.html">
                        <FaArrowUpRightFromSquare />
                    </a>

                    <a href="https://github.com/pauleenaphan/weather-app">
                        <FaGithub />
                    </a>
                </div>
            </div>

            {/* Etch a sketch */}
            <div className="projectContainer">
                <div className="projectInfo">
                    <img src={etchASketchImg} alt="meowpop"/>
                    <h1 className="projectName"> Etch-a-Sketch </h1>
                    <p className="projectDescription"> 
                        Users can draw on a resizable grid with the color of their choice.
                    </p>
                </div>
                <div className="projectTools">
                    <ul>
                        <li> HTML </li> 
                        <li> CSS </li>
                        <li> Javascript </li>
                    </ul>
                </div>
                <div className="projectLinks">
                    <a href="https://pauleenaphan.github.io/Etch-a-Sketch/">
                        <FaArrowUpRightFromSquare />
                    </a>

                    <a href="https://github.com/pauleenaphan/Etch-a-Sketch">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    )
}