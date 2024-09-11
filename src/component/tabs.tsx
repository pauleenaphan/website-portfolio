import { useEffect, useState } from 'react';
import "../style/tabs.css";

import { FaHome, FaUserCircle, FaFolderOpen, 
        FaTools, FaMailBulk, FaGithub, 
        FaRegSquare, FaArrowLeft, FaBookmark,
        FaDownload, FaSearch, FaRegStar } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { FiXSquare } from "react-icons/fi";
import { FaArrowRotateRight, FaGear } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";

export const Tabs = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<string>('home'); // default active tab
    const [currTab, setCurrTab] = useState<string>('localhost:5173/home');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setCurrTab("localhost:5173/" + tab)
        navigate(`/${tab}`)
    };

    useEffect(() =>{
        handleTabClick("home")
    }, [])

    return (
        <div className="tabContainer">
            <div className="tabHeader">
                {/* <h1> Pauleena Phan's Portfolio Site </h1> */}
                <div className="headerIcons">
                    <GoDash id="iconMinimize" onClick={() =>{navigate("/screensaver")}}/>
                    <FaRegSquare id="iconResize"/>
                    <FiXSquare id="iconClose"/>
                </div>
            </div>
            <nav className={activeTab ? 'no-border' : ''}>
                <div
                    className={`navTab ${activeTab === 'home' ? 'active' : ''}`}
                    onClick={() => handleTabClick('home')}
                >
                    <div className="tabBtnWithIcon">
                        <FaHome className="tabIcon"/>
                        <p> Home </p>
                    </div>
                    <p> x </p>
                </div>
                <div
                    className={`navTab ${activeTab === 'about' ? 'active' : ''}`}
                    onClick={() => handleTabClick('about')}
                >
                    <div className="tabBtnWithIcon">
                        <FaUserCircle className="tabIcon"/>
                        <p> About </p>
                    </div>
                    <p> x </p>
                </div>
                <div
                    className={`navTab ${activeTab === 'projects' ? 'active' : ''}`}
                    onClick={() => handleTabClick('projects')}
                >
                    <div className="tabBtnWithIcon">
                        <FaFolderOpen className="tabIcon"/>
                        <p> Projects </p>
                    </div>
                    <p> x </p>
                </div>
                <div
                    className={`navTab ${activeTab === 'skills' ? 'active' : ''}`}
                    onClick={() => handleTabClick('skills')}
                >
                    <div className="tabBtnWithIcon">
                        <FaTools className="tabIcon"/>
                        <p> Skills </p>
                    </div>
                    <p> x </p>
                </div>
                <div
                    className={`navTab ${activeTab === 'contact' ? 'active' : ''}`}
                    onClick={() => handleTabClick('contact')}
                >
                    <div className="tabBtnWithIcon">
                        <FaMailBulk className="tabIcon"/>
                        <p> Contact </p>
                    </div>
                    <p> x </p>
                </div>
                <div
                    className={`navTab ${activeTab === 'github' ? 'active' : ''}`}
                    onClick={() => handleTabClick('github')}
                >
                    <div className="tabBtnWithIcon">
                        <FaGithub className="tabIcon"/>
                        <p> Github </p>
                    </div>
                    <p> x </p>
                </div>
                {/* <div className="navTabPlus">
                    <p> + </p>
                </div> */}
                <div className="borderTab"> </div>
            </nav>
            <div className="searchBarHeader">
                <div className="siteIcons">
                    <FaArrowLeft />
                    <FaArrowRotateRight />
                </div>
                <div className="searchContainer">
                    <input type="text" className="searchBar" value={currTab}></input>
                    <FaSearch id="searchIcon"/>
                    <FaRegStar id="starIcon"/>
                </div>
                <div className="siteIcons">
                    <FaBookmark />
                    <FaGear />
                    <FaDownload />
                </div>
            </div>
        </div>
    );
};