import React from "react";
import Contact from "./Contact";

export default function TopFooter(){
    return(
        <div className="top-footer">
            <div className="top-footer-content">
                <p className="top-footer-stat">35,OOO+ ALREADY JOINED</p>
                <h3 className="top-footer-title">Stay up-to-date with what we're doing</h3>
                <Contact/>
            </div>
        </div>
    )
}