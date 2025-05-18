import clx from './MainPage.module.css';
import React, { useRef} from 'react';
import { Button } from '../../shared/ui/Button/Button';
import mainImg from '../../shared/assets/images/slides/main.jpg';
import startAudio from '../../shared/assets/audio/start.mp3';
import {useAppStore} from "../../app/store/useAppStore";

export const MainPage = ({  toggleFullscreen }) => {
    const {
        isRulesShown,
        isDashboardShown,

        setIsFullscreen,
        isFullscreen,
        showRules,
        showDashboard,
    } = useAppStore();
    const audioRef = useRef(null);
    const handleStartClick = () => {

        if (audioRef.current) {
            audioRef.current.play().catch((err) => {
                console.error("Audio play failed:", err);
            });
        }
        toggleFullscreen();
    };
    return (
        <div className={clx.initialView}>
            <img src={mainImg} alt="Hero image"/>
            <audio ref={audioRef}>
                <source src={startAudio} type="audio/mp3"/>
            </audio>
            {!isFullscreen && (
                <Button
                    size="l"
                    onClick={handleStartClick}
                    className={clx.initBtn}
                >
                    Запуск гри
                </Button>
            )}
            {isFullscreen && (
                <Button
                    size="l"
                    onClick={showRules}
                    className={clx.toRulesBtn}
                >
                    Прослухати правила
                </Button>
            )}
        </div>

    );
};
