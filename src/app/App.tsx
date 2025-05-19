import React, { useEffect, useRef } from 'react';
import screenfull from 'screenfull';
import { MainPage } from '@/pages/MainPage';
import { Rules } from '@/pages/Rules';
import { Dashboard } from "@/pages/Dashboard";
import { useAppStore } from "./store/useAppStore";
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const appRef = useRef(null);
    const {
        isRulesShown,
        isDashboardShown,
        setIsFullscreen,
    } = useAppStore();

    const toggleFullscreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle(appRef.current ?? undefined);
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

    const currentPageKey = isDashboardShown ? "dashboard" : isRulesShown ? "rules" : "main";

    const renderPage = () => {
        if (isDashboardShown) return <Dashboard />;
        if (isRulesShown) return <Rules />;
        return <MainPage toggleFullscreen={toggleFullscreen} />;
    };

    return (
        <div ref={appRef} style={{ position: 'relative' }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPageKey}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    style={{ position: 'absolute', width: '100%' }}
                >
                    {renderPage()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default App;
