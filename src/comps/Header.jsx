import React from "react";

export default function Header({toggleMenu}){
    return(
        <header>
            <nav className="header-nav">
                <a className="logo" href="#"><img src='./images/logo-bookmark.svg'/></a>
                <ul>
                    <li><a href="#">FEATURES</a></li>
                    <li><a href="#">PRICING</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li className="login"><a href="#">LOGIN</a></li>
                </ul>
                <img className="menu-icon" src="./images/icon-hamburger.svg" alt="" onClick={toggleMenu}/>
            </nav>
        </header>
    )
}


