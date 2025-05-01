import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Tabs } from "../component/tabs";
import "../style/resume.css";

import { IoMdDownload } from "react-icons/io";

import resumeImg from "../assets/PauleenaPhanResumeImg.jpeg";
import resumePDF from "../assets/PauleenaPhanResumePDF.pdf";

export const Resume = () =>{
    useEffect(() => {
        document.title = "Pauleena Phan | Resume";
        AOS.init({ duration: 700, once: false });
    }, []);

    return(
        <div className="pageOuterContainer">
            <Tabs/>
            <div className="resumePageContainer">
                <div className="downloadContainer" data-aos="slide-down">
                    <a href={resumePDF} id="resumeDownloadBtn" download="PauleenaPhanResumePDF.pdf">Download Resume</a>
                    <IoMdDownload id="downloadIcon"/>
                </div>    
                <img src={resumeImg} id="resume"/>
            </div>
        </div>
    )
}