
import React, { useEffect, useRef, useState } from 'react';
import screenfull from 'screenfull';
import { MainPage } from '../pages/MainPage/MainPage';
import { Rules } from '../pages/Rules/ui/Rules';
import {Dashboard} from "../pages/Dashboard/ui/Dashboard";
import {useAppStore} from "./store/useAppStore";


function App() {
    const appRef = useRef(null);
    const {
        isRulesShown,
        isDashboardShown,
        setIsFullscreen,
    } = useAppStore();

    const toggleFullscreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(appRef.current);
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(screenfull.isFullscreen);
        };

        if (screenfull.isEnabled) {
            screenfull.on('change', handleFullscreenChange);

            return () => {
                screenfull.off('change', handleFullscreenChange);
            };
        }
    }, [setIsFullscreen]);

    const renderPage = () => {
        if (isDashboardShown) return <Dashboard />;
        if (isRulesShown) return <Rules />;
        return <MainPage toggleFullscreen={toggleFullscreen} />;
    };


    return (
        <div ref={appRef}>
            {renderPage()}
        </div>
    );
}

export default App;
