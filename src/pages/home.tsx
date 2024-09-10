import "../style/home.css";

import orangecat from "../assets/orangecat.gif";

export const Home = () =>{
    return(
        <div className="homePageContainer">
            <div className="titleContainer">
                <h1> Welcome to Pauleena's Porfolio </h1>
                <p> Feel free to browse and click around </p>
            </div>
            <img className="orangeCatGif" src={orangecat} alt="cartoon orange cat"/>
        </div>
    )
}