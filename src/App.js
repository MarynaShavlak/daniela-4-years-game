
import React, { useEffect, useRef, useState } from 'react';
import screenfull from 'screenfull';
import { MainPage } from './pages/MainPage/MainPage';
import { Rules } from './pages/Rules/ui/Rules';
import {Dashboard} from "./pages/Dashboard/ui/Dashboard";

function App() {
    const appRef = useRef(null);
    const [showRules, setShowRules] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showDashboard, setShowDashboard] = useState(false);

    const handleToDashboard = () => {
        setShowDashboard(true);
    };
    const handleToRules= () => {
        setShowRules(true);
    };

    const toggleFullscreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(appRef.current);
        }
    };

    useEffect(() => {
        if (!screenfull.isEnabled) return;

        const changeHandler = () => {
            setIsFullscreen(screenfull.isFullscreen);
        };

        screenfull.on('change', changeHandler);

        return () => {
            screenfull.off('change', changeHandler);
        };
    }, []);

    return (
        <div ref={appRef}>
            {showDashboard ? (
                <Dashboard />
            ) : showRules ? (
                <Rules
                    onShowDashboard={handleToDashboard}
                />
            ) : (
                <MainPage
                    onShowRules={handleToRules}
                    isFullscreen={isFullscreen}
                    toggleFullscreen={toggleFullscreen}
                />
            )}
        </div>
    );
}

export default App;
