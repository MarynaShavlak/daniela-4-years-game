// RulesPage.jsx
import React, {useRef, useEffect, useState} from 'react';
import clx from './Rules.module.css';
import taskVideo from '../../video/task.mp4';
import {Tasks} from "../Tasks/Tasks";


export const Rules = () => {
    const [showTasks, setShowTasks] = useState(false);

    const handleToTasksClick = () => {
        setShowTasks(true);
    };



    const RulesVideo = () => {
        return (
            <div className={clx.rules}>
                {/*<video autoPlay id="rulesVideo" controls className={clx.fullscreenVideo}>*/}
                {/*    <source src={taskVideo} type="video/mp4"/>*/}
                {/*</video>*/}
                <button
                    className={clx.toTasksButton}
                    onClick={handleToTasksClick}
                >
                    To Tasks
                </button>
            </div>
        );
    };



    return (
        <>
            {showTasks ? <Tasks /> : <RulesVideo />}
        </>
    );
};
