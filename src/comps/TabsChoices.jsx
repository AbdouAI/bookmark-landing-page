import React, { useContext, useEffect, useState } from "react";
import { tabsContext } from "./App";

export default function TabsChoices(){
    const [curTab,setCurTab]=useContext(tabsContext)
    const [leftPos,setleftPos]=useState('0px')
    const [isMobile,setIsMobile]=useState(false)
    const [selectedVals,setSelectedVals]=useState({pos:0,lineMouvement:0})

    const changeSelectedVals=(pos)=>{
        if(window.innerWidth>716){
            console.log(pos)
            const line=document.querySelector(".selected-line")
            const lineMouvement=line.getBoundingClientRect().width
            setSelectedVals({pos:pos,lineMouvement:lineMouvement})
        }else{
            const tabChoice=document.querySelector(".tabs-choices-list li")
            const tabChoiceHeight=tabChoice.getBoundingClientRect().height
            setSelectedVals({pos:pos,lineMouvement:tabChoiceHeight})

        }
    }

    useEffect(()=>{
        changeSelectedVals(selectedVals.pos);
        if(window.innerWidth>716){
            setIsMobile(false)

        }else{
            setIsMobile(true)
        }

        const resizeHandler=()=>{
            if(window.innerWidth>716){
                setIsMobile(false)

            }else{
                setIsMobile(true)
            }
            changeSelectedVals(selectedVals.pos);

        }
        
        window.addEventListener("resize",resizeHandler)
        return ()=>{window.removeEventListener("resize",resizeHandler)}
    },[selectedVals.pos])

    useEffect(()=>{
        setleftPos(`${selectedVals.pos*selectedVals.lineMouvement}px`)
    },[selectedVals])
    

    return(
        <div className="tabs-choices">
            <ul className="tabs-choices-list">
                <li className={selectedVals.pos===0?'selected-tab-choice':''} onClick={()=>{
                    setCurTab('simple')
                    changeSelectedVals(0)
            
            }}>Simple Bookmarkning</li>
                <li className={selectedVals.pos===1?'selected-tab-choice':''} onClick={()=>{
                    setCurTab('speedy')
                    changeSelectedVals(1)
                }}>Speedy Searching</li>
                <li className={selectedVals.pos===2?'selected-tab-choice':''} onClick={()=>{
                    setCurTab('easy')
                    changeSelectedVals(2)
                }}>Easy Sharing</li>
            </ul>
            <div className="selected-line" style={isMobile?{top:`-${(2-selectedVals.pos)*selectedVals.lineMouvement}px`,left:'0px'}:{left:leftPos,top:'0px'}}></div>
        </div>
    )
}