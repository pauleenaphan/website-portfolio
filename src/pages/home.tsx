import "../style/home.css";

import orangecat from "../assets/orangecat.gif";

export const Home = () =>{
    return(
        <div className="homePageContainer">
            <div className="titleContainer">
                <div className="titleHead">
                    <h1> Welcome to Pauleena's Porfolio </h1>
                    <p> Feel free to browse and explore! </p>
                </div>
                <div className="portfolioInfo">
                    <p> Copyright @ Pauleena Phan 2024 </p>
                    <a href="https://github.com/pauleenaphan/portfolio2.0"> Github link to this porfolio </a>
                </div>
            </div>
            <img className="orangeCatGif" src={orangecat} alt="cartoon orange cat"/>
        </div>
    )
}