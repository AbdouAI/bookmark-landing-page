import React from "react";
import ProdCard from "./ProdCard";
import TopText from "./TopText";


export default function Extension({prodInfo}){
    return(
        <section className="extension">
            <div className="inner-extension">
                <TopText
                    title='Download the extension'
                    desc='We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                    got a favourite you’d like us to prioritize.'
                />
                <div className="prod-card-container">
                    {
                        prodInfo.map((e,ind)=>{
                            return <ProdCard info={e} key={ind}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}