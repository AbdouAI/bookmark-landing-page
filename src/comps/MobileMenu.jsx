import React from "react";

const MobileMenu=({toggleMenu})=>{
    return(
        <div className="mobile-menu-container">
            <div className="menu-top">
                <a className="menu-logo" href="#"><img src="./images/logo-bookmark-dark.svg" alt="Logo" /></a>
                <img className="menu-close" src="./images/icon-close.svg" alt="close" onClick={toggleMenu}/>
            </div>
            <ul className="menu-links-list">
                <li  onClick={toggleMenu}><a href="#">FEATURES</a></li>
                <li onClick={toggleMenu}><a href="#">PRICINNG</a></li>
                <li onClick={toggleMenu}><a href="#">CONTACT</a></li>         
                <li className="menu-login" onClick={toggleMenu}><a href="#">LOGIN</a></li>
            </ul>
            <ul className="menu-sm-list">
                <li><a href="#" target="_blank" aria-label="Facebook"><img src="./images/icon-facebook.svg" alt="Facebook" /></a></li>
                <li><a href="#" target="_blank" aria-label="Twitter"><img src="./images/icon-twitter.svg" alt="Twitter"/></a></li>
            </ul>
        </div>
    )
}
export default MobileMenu

