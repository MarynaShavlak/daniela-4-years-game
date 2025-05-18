import React from 'react';
import clx from './Rules.module.css';
import rulesVideo from '../../../shared/assets/video/rules.mp4';
import { VideoBackground } from '../../../shared/ui/VideoBackground/VideoBackground';
import { Button } from '../../../shared/ui/Button/Button';
import {useAppStore} from "../../../app/store/useAppStore";

export const Rules = () => {
    const { showDashboard } = useAppStore();
    return (
        <div className={clx.rules}>
            <VideoBackground
                id="rulesVideo"
                video={rulesVideo}
                loop={false}
                controls={true}
            />
            <Button
                onClick={ showDashboard}
                className={clx.toDashboardButton}
                size="m"
            >
                Перейти до завдань
            </Button>
        </div>
    );
};
