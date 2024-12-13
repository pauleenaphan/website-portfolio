import { Tabs } from "../component/tabs";
import "../style/resume.css";

import { IoMdDownload } from "react-icons/io";

import resumeImg from "../assets/PauleenaPhanResumeImg.jpg";
import resumePDF from "../assets/PauleenaPhanResumePDF.pdf";

export const Resume = () =>{
    return(
        <div className="pageOuterContainer">
            <Tabs/>
            <div className="resumePageContainer">
                <div className="downloadContainer">
                    <a href={resumePDF} id="resumeDownloadBtn" download="PauleenaPhanResumePDF.pdf">Download Resume</a>
                    <IoMdDownload id="downloadIcon"/>
                </div>    
                <img src={resumeImg} id="resume"/>
            </div>
        </div>
    )
}