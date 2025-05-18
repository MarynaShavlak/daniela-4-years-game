// MainPage.jsx
import clx from './MainPage.module.css';
import React, {useRef, useState} from 'react';
import screenfull from "screenfull";
import {Rules} from "../Rules/ui/Rules";




export const MainPage = () => {
    const appRef = useRef(null);
    const [showRules, setShowRules] = useState(false);

    const toggleFullscreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(appRef.current);
        } else {
            alert('Fullscreen not supported');
        }
    };

    const handleStartGame = () => {
        console.log('show rules');
        setShowRules(true);
    };

    const InitialView= ()=> {
 return (<div className={clx.initialView}>
     <button
         onClick={toggleFullscreen}
         style={{
             marginTop: '20px',
             padding: '10px 20px',
             fontSize: '1rem',
             cursor: 'pointer',
         }}
     >
         Toggle Fullscreen
     </button>
     <button onClick={handleStartGame}>Start Game</button>
 </div>)
    }

    return (
        <div className={clx.mainPage} ref={appRef}>
            {showRules ? <Rules /> : <InitialView />}

        </div>
    );
};
