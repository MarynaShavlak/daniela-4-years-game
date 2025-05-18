import clx from './MainPage.module.css';
import React from 'react';
import { Button } from '../../shared/ui/Button/Button';
import mainImg from '../../shared/assets/images/slides/main.jpg';

export const MainPage = ({ onShowRules, isFullscreen, toggleFullscreen }) => {
    return (

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
                        onClick={onShowRules}
                        className={clx.toRulesBtn}
                    >
                        Прослухати правила
                    </Button>
                )}
            </div>

    );
};
