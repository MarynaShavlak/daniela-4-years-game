import clx from './MainPage.module.css';
import React, { useRef } from 'react';
import screenfull from 'screenfull';

export const MainPage = () => {
    const appRef = useRef(null);

    const toggleFullscreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(appRef.current);
        } else {
            alert('Fullscreen not supported');
        }
    };

    return (
        <div className={clx.mainPage} ref={appRef}>
            It is main page
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
        </div>
    );
};
