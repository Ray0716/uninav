import React from "react";
import waterdrop from '../assets/img/waterdrop_down.png'

export default function NextScreenButton({screenIncrement}){

    return(
        <div className="flex align-center justify-center text-center" >
            <img className='w-24' onClick={screenIncrement} src={waterdrop} role="button"/>
        </div>
    );
}