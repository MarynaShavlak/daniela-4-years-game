import clx from "./Dashboard.module.css";
import taskVideo from "../../video/task.mp4";
import React from "react";
import {taskImages} from "../../utils/taskImages";
import {Dog} from "../tasks/Dog/Dog";
import {Task} from "../tasks/Task";

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
        { symbol: "a", component: <Task taskName={'bear'} handleToAllTasksClick={handleToAllTasksClick}/> },
        { symbol: "2", component: <Task taskName={'behemoth'} handleToAllTasksClick={handleToAllTasksClick}/>},
        {symbol: "b", component: <Task taskName={'car'} handleToAllTasksClick={handleToAllTasksClick}/>},
        { symbol: "0", component: <Task taskName={'cat'} handleToAllTasksClick={handleToAllTasksClick}/>},

    ];
    const tasks2 = [
        { symbol: "8", component: <Task taskName={'crab'} handleToAllTasksClick={handleToAllTasksClick}/>},
        { symbol: "h", component: <Task taskName={'dinosaur'} handleToAllTasksClick={handleToAllTasksClick}/>},
        { symbol: "6", component: <Task taskName={'dog'} handleToAllTasksClick={handleToAllTasksClick}/>},
        { symbol: "c", component: <Task taskName={'fox'} handleToAllTasksClick={handleToAllTasksClick}/>},
        { symbol: "5", component: <Task taskName={'frog'} handleToAllTasksClick={handleToAllTasksClick}/>},
        { symbol: "t", component: <Task taskName={'ghost'} handleToAllTasksClick={handleToAllTasksClick}/>},




    ];
    const tasks3 = [

        { symbol: "7", component: <Task taskName={'icecream'} handleToAllTasksClick={handleToAllTasksClick}/> },
        { symbol: "m", component: <Task taskName={'mouse'} handleToAllTasksClick={handleToAllTasksClick}/> },
        { symbol: "3", component: <Task taskName={'pig'} handleToAllTasksClick={handleToAllTasksClick}/> },
        { symbol: "k", component: <Task taskName={'sheep'} handleToAllTasksClick={handleToAllTasksClick}/> },
        { symbol: "1", component: <Task taskName={'snail'} handleToAllTasksClick={handleToAllTasksClick}/> },
        { symbol: "9", component: <Task taskName={'tree'} handleToAllTasksClick={handleToAllTasksClick}/> },
        { symbol: "p", component: <Task taskName={'turtle'} handleToAllTasksClick={handleToAllTasksClick}/> },
        { symbol: "4", component: <Task taskName={'unicorn'} handleToAllTasksClick={handleToAllTasksClick}/> },

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
