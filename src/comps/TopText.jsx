import React from "react";

export default function TopText({title,desc}){
    return(
        <div className="top-text">
            <h3 className="top-text-title">
                {title}
            </h3>
            <p className="top-text-desc">
                {desc}
            </p>
        </div>
    )
    
}