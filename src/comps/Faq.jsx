import React from "react";
import TopText from "./TopText";
import FaqElement from "./FaqElement";

export default function Faq({faqList}){
    return(
        <section className="faq">
            <TopText 
                title='Frequently Asked Questions' 
                desc='Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.'
            />
            <div className="faq-list">
                {
                    faqList.map((e,ind)=>{
                        return <FaqElement faq={e} key={ind}/>
                    })
                }
            </div>
            <a className="info-btn" href="#">More Info</a>
        </section>
        
    )
}