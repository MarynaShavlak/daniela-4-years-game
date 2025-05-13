import clx from "./Dashboard.module.css";
import taskVideo from "../../video/task.mp4";
import React from "react";
import {taskImages} from "../../utils/taskImages";
import {Dog} from "../tasks/Dog/Dog";

export const Dashboard = () => {
    // State to track the currently displayed task component
    const [currentTask, setCurrentTask] = React.useState(null);

    // Handler for task button clicks
    const handleTaskClick = (task) => {
        setCurrentTask(task.component);
    };

    const handleToAllTasksClick = (task) => {
        setCurrentTask(null);
    };


    const tasks1 = [
        { symbol: "a", component: <Dog handleToAllTasksClick={handleToAllTasksClick}/> },
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
        !currentTask ? (
            <div className={clx.tasks}>
                <video autoPlay id="tasksVideo" controls className={clx.fullscreenVideo} loop>
                    <source src={taskVideo} type="video/mp4"/>
                </video>
                <div className={clx.listWrapper}>
                    <ul  className={`${clx.tasksButtonList} ${clx.btnList}`} >
                        {tasks1.map((task) => (
                            <li
                                key={task.symbol}
                                onClick={() => handleTaskClick(task)}

                            >
                                <img
                                    src={taskImages[task.symbol]}
                                    alt={task.symbol}
                                    id={task.symbol}
                                    className={`${clx.taskButton} ${clx[`btn--${task.symbol}`]}`}
                                />
                            </li>
                        ))}
                    </ul>
                    <ul className={`${clx.tasksButtonListSmall} ${clx.btnList}`}>
                        {tasks2.map((task) => (
                            <li
                                key={task.symbol}
                                onClick={() => handleTaskClick(task)}
                            >
                                <img
                                    src={taskImages[task.symbol]}
                                    alt={task.symbol}
                                    id={task.symbol}
                                    className={`${clx.taskButton} ${clx[`btn--${task.symbol}`]}`}
                                />
                            </li>
                        ))}
                    </ul>
                    <ul className={`${clx.tasksButtonList} ${clx.btnList}`}>
                        {tasks3.map((task) => (
                            <li
                                key={task.symbol}
                                onClick={() => handleTaskClick(task)}
                            >
                                <img
                                    src={taskImages[task.symbol]}
                                    alt={task.symbol}
                                    id={task.symbol}
                                    className={`${clx.taskButton} ${clx[`btn--${task.symbol}`]}`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ) : currentTask
    );
};
