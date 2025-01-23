import "../style/home.css";

import { useEffect } from "react";

import { Tabs } from "../component/tabs";
import orangecat from "../assets/orangecat.gif";

import { BsStars } from "react-icons/bs";

export const Home = () =>{
    useEffect(() => {
        document.title = "Pauleena Phan | Home";
    }, []);

    return(
        <div className="pageOuterContainer">
            <Tabs/>
            <div className="homePageContainer">
                <div className="titleHead">
                    <BsStars className="starsIcon"/>
                    <div>
                        <h1> Welcome to Pauleena's Monitor </h1>
                        <p> Feel free to peek around! I won't tell (: </p>
                    </div>
                    <BsStars className="starsIcon"/>
                </div>
                {/* <div className="portfolioInfo">
                    <p> Copyright @ Pauleena Phan 2024 </p>
                    <a href="https://github.com/pauleenaphan/portfolio2.0"> Github link to this porfolio </a>
                </div> */}
                <img className="orangeCatGif" src={orangecat} alt="cartoon orange cat"/>
            </div>
        </div>
        
    )
}