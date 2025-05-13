// RulesPage.jsx
import React from 'react';
import clx from '../tasks.module.css';
import taskVideo from '../../../video/tasks/dog.mp4';



export const Dog = ({handleToAllTasksClick}) => {

    return (
        <div className={clx.question}>
            <video autoPlay id="dogVideo" controls className={clx.fullscreenVideo} loop>
                <source src={taskVideo} type="video/mp4"/>
            </video>

            <button
                className={clx.toAllTasksButton }
                onClick={handleToAllTasksClick}
            >
                Всі завдання
            </button>
        </div>
    );
};
