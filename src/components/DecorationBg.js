import React, {useState} from 'react';
import combo_left from '../assets/img/combo_bottom_left.png'
import combo_right from '../assets/img/combo_right.png'

export default function DecorationBg(){
    return(
        <>
            <img className='h-3/4 absolute bottom-0 left-0' src={combo_left}/>
            <img className='h-3/4 absolute bottom-0 right-0' src={combo_right}/>
        </>
    );
}