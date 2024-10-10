import React, { useContext } from "react";
import { tabsContext } from "./App";

export default function TabsContent(){
    const [curTab,setCurTab]=useContext(tabsContext)
    return(
        <div className="tabs-content">
            <div className="tabs-content-img-container">
                <img className="tabs-content-img" src={curTab.img} alt="illustration" />
            </div>
            <div className="tabs-content-info">
                <h3 className="tabs-info-title">{curTab.title}</h3>
                <p className="tabs-info-desc">{curTab.content}</p>
                <a className="info-btn" href="#">More Info</a>
            </div>
        </div>
    )
}