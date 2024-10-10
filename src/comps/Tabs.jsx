import React from "react";
import TabsChoices from "./TabsChoices";
import TabsContent from "./TabsContent";


export default function Tabs(){
    return(
        <div className="tabs">
            <TabsChoices/>
            <TabsContent/>
        </div>
    )
}