import React from "react";

export default function ProdCard({info}){
    return(
        <div className="prod-card">
            <img className="card-img" src={info.img} alt="" />
            <h4 className="card-title">{info.prod}</h4>
            <p className="card-version">{info.version}</p>
            <img className="dots-img" src="./images/bg-dots.svg" alt="" />
            <a className="card-btn" href="#">Add & Install Extension</a>
        </div>
    )
}