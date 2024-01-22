import {useState} from 'react';
import NextScreenButton from "./NextScreenButton.js";
import DecorationBg from './DecorationBg.js';
import Screen1 from './Screen1.js';
import ScreenGarden from './ScreenGarden.js';
import ScreenGenerate from './ScreenGenerate.js';
import ScreenInput from './ScreenInput.js';

export default function ScreenControl(){
    const [screen, setScreen] = useState(0);
    const [showDecoration, setShowDecoration] = useState(true);
    const [gpa, setGpa] = useState(0);
    const [sat, setSat] = useState(0);
    const [act, setAct] = useState(0);
    const [firstgen, setFirstgen] = useState(false);
    function screenIncrement(){ 
        console.log(screen);
        setScreen(screen + 1);
    }
    return(
        <div className="flex-col h-screen align-center justify-center text-center " >
            {screen == 0 && <DecorationBg/>}
            {screen == 0 && <Screen1  screen={screen} /> }
            {screen == 2 && <ScreenGenerate screenIncrement={screenIncrement} /> }
            {screen == 3 && <ScreenGarden/> }

            {screen < 2 && <NextScreenButton screenIncrement={screenIncrement}/>}
        </div>
    );
}