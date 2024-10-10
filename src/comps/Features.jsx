import React from "react";
import Tabs from "./Tabs";
import TopText from "./TopText";

export default function Features(){
    return(
        <section className="features">
            <div className="inner-features">
                <TopText
                    title='Features'
                    desc='Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.'
                />
                <Tabs/>
            </div>
        </section>
    )
}