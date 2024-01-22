import React from "react";
import ScreenControl from "./ScreenControl";

export default function BackgroundWrapper(){
    return(
        <div className=" bg-background w-screen h-screen" >
                <ScreenControl/>
        </div>
    );
}