// RulesPage.jsx
import React, { useState} from 'react';
import clx from './Rules.module.css';
import rulesVideo from '../../../shared/assets/video/rules.mp4';
import {Dashboard} from "../../Dashboard/ui/Dashboard";
import taskVideo from "../../../shared/assets/video/task.mp4";
import {VideoBackground} from "../../../shared/ui/VideoBackground/VideoBackground";
import {Button} from "../../../shared/ui/Button/Button";


export const Rules = () => {
    const [showTasks, setShowTasks] = useState(false);

    const handleToTasksClick = () => {
        setShowTasks(true);
    };



    const RulesVideo = () => {
        return (
            <div className={clx.rules}>
                <VideoBackground id={'rulesVideo'} video={rulesVideo} loop={false} controls={true}/>
               <Button
                    onClick={handleToTasksClick}
                    className={clx.toDashboardButton}
                    size={'m'}
                >
                    Перейти до завдань
                </Button>
            </div>
        );
    };



    return (
        <>
            {showTasks ? <Dashboard /> : <RulesVideo />}
        </>
    );
};
