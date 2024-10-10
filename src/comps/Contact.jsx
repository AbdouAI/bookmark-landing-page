import React, { useState } from "react";

export default function Contact(){
    const [email,setEmail]=useState('')
    const [isCorrect,setIsCorrect]=useState(true)
    const onEmailChange=(e)=>{
        setEmail(e.target.value)
        setIsCorrect(true)
    }
    const checkEmail=()=>{
        if(!email.toLocaleLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )){
            setIsCorrect(false)
        }else{
            setIsCorrect(true)
            setEmail('')
        }
    }

    const keyCheckEmail=(e)=>{
        if(e.key==='Enter'){
            checkEmail()
        }
    }
    


    return(
        <div className={isCorrect?"contact":"contact is-error"}>
            <div className="input-container">
                <div className="input-with-icon">
                    <input className="contact-input" type="email" placeholder="Enter your email address" value={email} onChange={onEmailChange} onKeyDown={keyCheckEmail}/>
                    <img className="error-icon" src="./images/icon-error.svg" alt="" />
                </div>
                <div className="error-msg">Whoops,make sure it's an email</div>
            </div>
            <button className="contact-btn" onClick={checkEmail}>Contact Us</button>
        </div>
    )
}