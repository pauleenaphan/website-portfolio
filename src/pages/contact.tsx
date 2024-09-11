import { useState, useEffect } from "react";
import "../style/contact.css";

import mailBoxImg from "../assets/mailbox.png";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

import emailjs from '@emailjs/browser';

export const Contact = () =>{
    type FormData = {
        userEmail: string;
        userSubject: string;
        userMessage: string;
    };

    const [formData, setFormData] = useState<FormData>({
        userEmail: "",
        userSubject: "",
        userMessage: ""
    });

    const [sentMsgVisible, setSentMsgVisible] = useState<boolean>(false);

    const updateFormData = (field: string, value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const templateParams = {
        to_name: 'Pauleena Phan',
        from_name: formData.userEmail,
        subject: formData.userSubject,
        message: formData.userMessage,
    };


    const sendMail = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
    
        emailjs
        .send('service_em6ucna', 'template_me2o659', templateParams,{
            publicKey: 'r9VwP9XosCGtJF8J5',
        })
        .then(
            (response) => {
            console.log('SUCCESS!', response.status, response.text);
            },
            (err) => {
            console.log('FAILED...', err);
            },
        );

        setSentMsgVisible(true);

        //reset the text the user entered in the form
        (event.currentTarget as HTMLFormElement).reset();
    }

    //after user has sent a msg a msg will display for 3 seconds
    useEffect(() => {
        if (sentMsgVisible){
        const timer = setTimeout(() => {
            setSentMsgVisible(false);
        }, 3000);
    
        return () => clearTimeout(timer);
        }
    }, [sentMsgVisible]);
    
    
    return(
        <div className="contactPageContainer">
            <div className="contactHeader">
                <div className="iconContact">
                    <IoMail />
                    <p> Pauleena2002@gmail.com </p> 
                </div>
                <div className="iconContact">
                    <FaLinkedin />
                    <a href="https://www.linkedin.com/in/pauleena-phan"> Pauleena Phan </a>
                </div>
            </div>
            
            <h1> Send Me an Email c:</h1>
            <div className="contactContainer">
                <img src={mailBoxImg} className="mailBoxImg" alt="cutemailbox"/>
                <form className="contactForm" onSubmit={sendMail}>
                    <div className="emailFormHead">
                        <div className="labelInput">
                            <label> Email </label>
                            <input type="text" placeholder="Your Email" onChange={(e) => {updateFormData("userEmail", e.target.value)}}/>
                        </div>
                        <div className="labelInput">
                            <label> Subject </label>
                            <input type="text" placeholder="Purpose of your Email" onChange={(e) => {updateFormData("userSubject", e.target.value)}}/>
                        </div>
                        
                    </div>
                    <div className="labelInput">
                        <label> Message </label> 
                        <textarea placeholder="Your Message here" onChange={(e) => {updateFormData("userMessage", e.target.value)}}/>
                    </div>
                    <div className="contactStatus">
                        <button className="subbtn"> Send! </button>
                        {sentMsgVisible && (
                            <p className="sentMsg">Message has been sent!</p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}