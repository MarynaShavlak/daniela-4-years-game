// // MainPage.jsx
// import clx from './MainPage.module.css';
// import React, {useEffect, useRef, useState} from 'react';
// import screenfull from "screenfull";
// import {Rules} from "../Rules/ui/Rules";
// import {Button} from "../../shared/ui/Button/Button";
// import mainImg from "../../shared/assets/images/slides/main.jpg"
//
//
//
// export const MainPage = () => {
//     const appRef = useRef(null);
//     const [showRules, setShowRules] = useState(false);
//     const [isFullscreen, setIsFullscreen] = useState(false);
//
//     const toggleFullscreen = () => {
//         if (screenfull.isEnabled) {
//             screenfull.toggle(appRef.current);
//
//         }
//
//     }
//     const handleStartGame = () => {
//
//         setShowRules(true);
//     };
//
//     useEffect(() => {
//         if (!screenfull.isEnabled) return;
//
//         const changeHandler = () => {
//             setIsFullscreen(screenfull.isFullscreen);
//         };
//
//         screenfull.on('change', changeHandler);
//
//         return () => {
//             screenfull.off('change', changeHandler);
//         };
//     }, []);
//
//     const InitialView= ()=> {
//  return (<div className={clx.initialView}>
//      <img src={mainImg }  alt={'Hero image'}/>
//          {!isFullscreen &&<Button
//          size={'l'}
//          onClick={toggleFullscreen}
//          className={clx.initBtn}
//      >
//          Запуск гри
//      </Button>}
//      {isFullscreen && (
//          <Button
//              size={'l'}
//              onClick={handleStartGame}
//              className={clx.toRulesBtn}
//          >
//              Прослухати правила
//          </Button>
//      )}
//
//  </div>)
//     }
//
//     return (
//         <div className={clx.mainPage} ref={appRef}>
//             {showRules ? <Rules /> : <InitialView />}
//
//         </div>
//     );
// };

import clx from './MainPage.module.css';
import React from 'react';
import { Button } from '../../shared/ui/Button/Button';
import mainImg from '../../shared/assets/images/slides/main.jpg';

export const MainPage = ({ onShowRules, isFullscreen, toggleFullscreen }) => {
    const handleStartGame = () => {
        onShowRules();
    };

    return (
        <div className={clx.mainPage}>
            <div className={clx.initialView}>
                <img src={mainImg} alt="Hero image" />
                {!isFullscreen && (
                    <Button
                        size="l"
                        onClick={toggleFullscreen}
                        className={clx.initBtn}
                    >
                        Запуск гри
                    </Button>
                )}
                {isFullscreen && (
                    <Button
                        size="l"
                        onClick={handleStartGame}
                        className={clx.toRulesBtn}
                    >
                        Прослухати правила
                    </Button>
                )}
            </div>
        </div>
    );
};
