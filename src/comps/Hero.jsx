import React from "react";

export default function Hero(){
    return(
        <section className="hero">
            <div className="inner-hero">
                <div className="hero-info">
                    <h1 className="hero-title">
                        A Simple Bookmark Manager
                    </h1>
                    <p className="hero-par">
                    A clean and simple interface to organize your favourite websites. Open a new 
                    browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div className="ca-btn-container">
                        <a href="#" className="ca-btn--main ca-btn">Get it on Chrome</a>
                        <a href="#" className="ca-btn--sec ca-btn">Get it on Firefox</a>
                    </div>
                </div>
                <div className="hero-img">
                    <img src="./images/illustration-hero.svg" alt="" />
                </div>
            </div>
        </section>
    )
}