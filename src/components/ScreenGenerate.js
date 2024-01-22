import React from "react";
import hands_1 from '../assets/img/hands_1.png'
import hands_2 from '../assets/img/hands_2.png'
import hands_3 from '../assets/img/hands_3.png'

export default function ScreenGenerate({screenIncrement}){

    function hover(element) {
        element.setAttribute('src', hands_3);
      }

    return(

        <div className="block pt-60 flex-col min-h-80 m-auto align-center justify-center">

            <h1 className="m-auto self-auto w-30 text-9xl text-blue1">almost there... </h1>
            {/* <h2 className="m-auto self-auto w-30 text-7xl text-yellow-500"> grow your college garden </h2> */}
            <div class="flower" className="flex align-center justify-center text-center" >
                <img className='w-80' onClick={screenIncrement} onmouseover="hover(this);" src={hands_1} />
            </div>
        </div> 
    );
}