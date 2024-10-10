import React, { useState } from "react";

export default function FaqElement({faq}){
    const[isOpen,setIsOpen]=useState(false)
    const toggleQst=()=>{
        setIsOpen(prev=>!prev)
    }
    return(
        <div className={isOpen?'faq-element':'faq-element faq-closed'} onClick={toggleQst}>
            <div className="question">
                <p>{faq.qst}</p>
                <img style={isOpen?{transform:'rotate(180deg)'}:{transform:'rotate(0deg)'}} src="./images/icon-arrow.svg" alt="" />
            </div>
            <div className="answer">
                {faq.ans}
            </div>
        </div>
    )
}