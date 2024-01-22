import React from "react";
import hands_1 from '../assets/img/hands_1.png'
import hands_2 from '../assets/img/hands_2.png'
import hands_3 from '../assets/img/hands_3.png'

export default function ScreenInput(sat, gpa, act, firstGen, {setSat, setGpa, setAct, setFirstgen}){

    return(
        <div className="block pt-60 flex-col min-h-80 m-auto align-center justify-center">

            <h1 className="m-auto self-auto w-30 text-9xl text-blue1">enter your stats</h1>
            <h1 className="m-auto self-auto w-30 text-9xl text-blue1">sat</h1>
            <input
      value={setSat} // ...force the input's value to match the state variable...
      onChange={e => setSat(e.target.value)} // ... and update the state variable on any edits!
    />
        </div> 
    );
}

