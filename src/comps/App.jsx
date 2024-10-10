import React, { createContext, useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Extension from "./Extension";
import Faq from "./Faq";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

const tabsContentList=[
    {id:'simple',title:'Bookmark in one click',img:'./images/illustration-features-tab-1.svg',content:'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'},
    {id:'speedy',title:'Intelligent search',img:'./images/illustration-features-tab-2.svg',content:'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'},
    {id:'easy',title:'Share your bookmarks',img:'./images/illustration-features-tab-3.svg',content:'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'}
]

const cardsInfo=[
    {img:'./images/logo-chrome.svg',prod:'Add to Chrome',version:'Minimum version 62'},
    {img:'./images/logo-firefox.svg',prod:'Add to Firefox',version:'Minimum version 55'},
    {img:'./images/logo-opera.svg',prod:'Add to Opera',version:'Minimum version 46'}

]

const faqList=[
    {qst:'What is Bookmark?',ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'},
    {qst:'How can I request a new browser?',ans:'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'},
    {qst:'Is there a mobile app?',ans:'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'},
    {qst:'What about other Chromium browsers?',ans:'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'}
]

export const tabsContext=createContext()

const App=()=>{
    const [curTab,setCurTab]=useState(tabsContentList[0])
    const [menuIsOpen,setMenuIsOpen]=useState(false)
    const onTabSwith=(id)=>{
        setCurTab(()=>tabsContentList.find(e=>e.id===id))
    }

    const toggleMobileMenu=()=>{
        setMenuIsOpen(prev=>!prev)
    }

    return(
        <div className="app-container">
            {menuIsOpen && <MobileMenu toggleMenu={toggleMobileMenu}/>}
            <Header toggleMenu={toggleMobileMenu}/>
            <Hero/>
            <tabsContext.Provider value={[curTab,onTabSwith]}>
                <Features/>
            </tabsContext.Provider>
            <Extension prodInfo={cardsInfo}/>
            <Faq faqList={faqList}/>
            <Footer/>
        </div>
    )
}
export{App}