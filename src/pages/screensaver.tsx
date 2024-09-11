import "../style/screensaver.css";
import { FaWindows, FaSearch, FaEdge, 
        FaDiscord, FaSteam, FaSpotify, 
        FaVolumeUp, FaWifi} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function getTime(): string {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

function getDate(): string {
    const now = new Date();
    const month = now.getMonth() + 1; // Months are zero-indexed
    const day = now.getDate();
    const year = now.getFullYear();

    return `${month}/${day}/${year}`;
}

export const Screensaver = () =>{
    const navigate = useNavigate();

    return(
        <div className="screenSaverContainer">
            <div className="windowsTaskBar">
                <div className="iconTaskLeft">
                    <FaWindows className="taskBarIcons" id="windowsIcon"/>
                    <FaSearch className="taskBarIcons" id="searchTaskIcon"/>
                    <FaEdge className="taskBarIcons" id="edgeIcon" onClick={() =>{
                        navigate("/home")
                    }}/>
                    <FaDiscord className="taskBarIcons" id="discordIcon"/>
                    <FaSteam className="taskBarIcons" id="steamIcon"/>
                    <FaSpotify className="taskBarIcons" id="spotifyIcon"/>
                </div>
                <div className="iconTaskRight">
                    <FaVolumeUp className="taskBarIcons"/>
                    <FaWifi className="taskBarIcons"/>
                    <div className="dateAndTime">
                        <p> {getTime()} </p>
                        <p> {getDate()} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}