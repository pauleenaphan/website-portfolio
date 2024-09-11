import "../style/about.css"
import profilePic from "../assets/profilePic.jpg"

export const About = () =>{
    return(
        <div className="aboutPageContainer">
            <div className="aboutHeaderContainer">
                <img src={profilePic} className="profilePic" alt="graduation photo"/>
                <div className="aboutHeader">
                    <div>
                        <h1> Pauleena Phan </h1>
                        <p> 22 Years Old • July 23, 2002 </p>
                    </div>
                    <div>
                        <p> California State University of Fullerton • 2020 - 2024 </p>
                        <p> Computer Science Graduate </p> 
                    </div>
                </div>
            </div>

            <div className="aboutBodyContainer">
                <h2> About: </h2>
                <br></br>
                <p> <span className="label">Job Status:</span> Unemployed </p>
                <p> <span className="label">Career Goals: </span> Becoming a fullstack web developer </p>
                <p> <span className="label">Hobbies:</span> Gaming, Arts & Crafts, Binging Shows </p>
                <p> <span className="label">Fun Fact:</span> I have 4 cats </p>
                <h2> Favorites: </h2>
                <br></br>
                <p> <span className="label">Colors:</span> Pink, Black, Light Purple </p>
                <p> <span className="label">Food:</span> Fried Chicken </p>
                <p> <span className="label">Animal:</span> Cats, mainly orange ones </p>
                <p> <span className="label">Game:</span> Teamfight Tactics </p>
                <p> <span className="label">Movie:</span> Minions </p>
            </div>
        </div>
    )
}