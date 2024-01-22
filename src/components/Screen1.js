import React from "react";
import logo from '../assets/img/logo.png'

export default function Screen1(screen){

    return(
            <div className="block pt-60 flex-col min-h-80 m-auto align-center justify-center">
                <div className="flex align-center justify-center text-center" >
                    <img className='w-40' src={logo} />
                </div>
                <h1 className="m-auto self-auto w-20 text-8xl text-blue1">uninav</h1>
                <h2 className="m-auto self-auto w-30 text-7xl text-green1"> cultivating your college search </h2>
            </div> 
    );
}