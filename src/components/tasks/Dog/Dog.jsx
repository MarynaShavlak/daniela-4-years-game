// RulesPage.jsx
import React from 'react';
import clx from '../tasks.module.css';
import taskVideo from '../../../video/tasks/dog.mp4';
import dogHover from '../../../images/hover/dog.png';
import questionSign from '../../../images/decor/question.gif';

export const Dog = ({handleToAllTasksClick}) => {

    return (
        <div className={`${clx.question} ${clx.questionDog}`}>
            <video autoPlay id="dogVideo" controls className={clx.fullscreenVideo} loop>
                <source src={taskVideo} type="video/mp4"/>
            </video>

            <button
                className={clx.toAllTasksButton }
                onClick={handleToAllTasksClick}
            >
                Всі завдання
            </button>
            <div className={clx.hoverBlock}>
                <img src={dogHover} className={clx.hoverImg}/>
                <img src={questionSign} className={clx.questionSign}/>
            </div>
        </div>
    );
};
