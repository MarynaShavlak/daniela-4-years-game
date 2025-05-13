import clx from "./Tasks.module.css";
import taskVideo from "../../video/task.mp4";
import React from "react";
import {taskImages} from "../../utils/taskImages";

export const Tasks = () => {
    const tasks1 = [
        { symbol: "a", component: null },
        { symbol: "2", component: null },
        { symbol: "b", component: null },
        { symbol: "0", component: null },
            ];
    const tasks2 = [
        { symbol: "8", component: null },
        { symbol: "h", component: null },
        { symbol: "6", component: null },
        { symbol: "c", component: null },
        { symbol: "5", component: null },
        { symbol: "t", component: null },



    ];
    const tasks3 = [

        { symbol: "7", component: null },
        { symbol: "m", component: null },
        { symbol: "3", component: null },
        { symbol: "k", component: null },
        { symbol: "1", component: null },
        { symbol: "9", component: null },
        { symbol: "p", component: null },
        { symbol: "4", component: null },

    ];


    return (
        <div className={clx.tasks}>
            <video autoPlay id="tasksVideo" controls className={clx.fullscreenVideo}>
                <source src={taskVideo} type="video/mp4"/>
            </video>
            <ul className={clx.tasksButtonList}>
                {tasks1.map((task) => (
                    <li key={task.symbol}>
                        <img
                            src={taskImages[task.symbol]}
                            alt={task.symbol}
                            id={task.symbol}
                            className={clx.taskButton}
                        />
                    </li>
                ))}
            </ul>
            <ul className={clx.tasksButtonListSmall}>
                {tasks2.map((task) => (
                    <li key={task.symbol}>
                        <img
                            src={taskImages[task.symbol]}
                            alt={task.symbol}
                            id={task.symbol}
                            className={clx.taskButton}
                        />
                    </li>
                ))}
            </ul>
            <ul className={clx.tasksButtonList}>
                {tasks3.map((task) => (
                    <li key={task.symbol}>
                        <img
                            src={taskImages[task.symbol]}
                            alt={task.symbol}
                            id={task.symbol}
                            className={clx.taskButton}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
