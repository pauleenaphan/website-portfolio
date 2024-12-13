import { useEffect, useState } from 'react';
import "../style/tabs.css";
import NavTab from './navTab';

import { FaHome, FaUserCircle, FaFolderOpen, 
        FaTools, FaMailBulk, 
        FaRegSquare, FaArrowLeft, FaBookmark,
        FaDownload, FaSearch, FaRegStar } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { FiXSquare } from "react-icons/fi";
import { FaArrowRotateRight, FaGear, FaNewspaper } from "react-icons/fa6";

import { useNavigate, useLocation } from "react-router-dom";

export const Tabs = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Get current route
    const [activeTab, setActiveTab] = useState<string>('home'); // default active tab
    const [currTab, setCurrTab] = useState<string>("https://pauleenaphan/home");

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setCurrTab("https://pauleenaphan/" + tab)
        navigate(`/${tab}`)
    };

    // Takes effect when the current route is changed
    // Makes sure the active tab is being updated on
    useEffect(() => {
        const currentPath = location.pathname.replace('/', ''); // Get the current tab from the URL
        setActiveTab(currentPath || 'home'); // Default to 'home' if no path
        setCurrTab("https://pauleenaphan/" + currentPath);
    }, [location.pathname]);

    return (
        <div className="tabContainer">
            {/* 3 buttons window top */}
            <div className="tabHeader"> 
                <div className="headerIcons">
                    <GoDash id="iconMinimize" onClick={() =>{navigate("/screensaver")}}/>
                    <FaRegSquare id="iconResize"/>
                    <FiXSquare id="iconClose"/>
                </div>
            </div>
            <nav className={activeTab ? 'no-border' : ''}>
                <NavTab
                    name="Home"
                    icon={<FaHome />} 
                    activeTab={activeTab}
                    onClick={handleTabClick}
                />
                <NavTab
                    name="About"
                    icon={<FaUserCircle />} 
                    activeTab={activeTab}
                    onClick={handleTabClick}
                />
                <NavTab
                    name="Projects"
                    icon={<FaFolderOpen />} 
                    activeTab={activeTab}
                    onClick={handleTabClick}
                />
                <NavTab
                    name="Skills"
                    icon={<FaTools />}
                    activeTab={activeTab}
                    onClick={handleTabClick}
                />
                <NavTab
                    name="Contact"
                    icon={<FaMailBulk />} 
                    activeTab={activeTab}
                    onClick={handleTabClick}
                />
                <NavTab
                    name="Resume"
                    icon={<FaNewspaper />}
                    activeTab={activeTab}
                    onClick={handleTabClick}
                />
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