import clx from "./Dashboard.module.css";
import taskVideo from '../../../shared/assets/video/task.mp4'
import React from "react";
import {Task} from "../../../widgets/Task/ui/Task";
import {taskImages} from "../../../shared/utils/taskImages";



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
        { symbol: "a", component: <Task taskName={'bear'} handleToAllTasksClick={handleToAllTasksClick} controlsPos={'top-right'}/> },
        { symbol: "2", component: <Task taskName={'behemoth'} handleToAllTasksClick={handleToAllTasksClick} controlsPos={'top-right'}/> },
        {symbol: "b", component: <Task taskName={'car'} handleToAllTasksClick={handleToAllTasksClick} controlsPos={'top-right'}/>},
        { symbol: "0", component: <Task taskName={'cat'} handleToAllTasksClick={handleToAllTasksClick}/>},

    ];
    const tasks2 = [
        { symbol: "8", component: <Task taskName={'crab'} handleToAllTasksClick={handleToAllTasksClick}/>},
        { symbol: "h", component: <Task taskName={'dinosaur'} handleToAllTasksClick={handleToAllTasksClick} controlsPos={'top-left'}/>},
        { symbol: "6", component: <Task taskName={'dog'} handleToAllTasksClick={handleToAllTasksClick}/>},
        { symbol: "c", component: <Task taskName={'fox'} handleToAllTasksClick={handleToAllTasksClick}/>},
        { symbol: "5", component: <Task taskName={'frog'} handleToAllTasksClick={handleToAllTasksClick}/>},
        { symbol: "t", component: <Task taskName={'ghost'} handleToAllTasksClick={handleToAllTasksClick} controlsPos={'top-left'}/>},




    ];
    const tasks3 = [

        { symbol: "7", component: <Task taskName={'icecream'} handleToAllTasksClick={handleToAllTasksClick} controlsPos={'top-right'} /> },
        { symbol: "m", component: <Task taskName={'mouse'} handleToAllTasksClick={handleToAllTasksClick}/> },
        { symbol: "3", component: <Task taskName={'pig'} handleToAllTasksClick={handleToAllTasksClick}/> },
        { symbol: "k", component: <Task taskName={'sheep'} handleToAllTasksClick={handleToAllTasksClick} controlsPos={'top-right'}/> },
        { symbol: "1", component: <Task taskName={'snail'} handleToAllTasksClick={handleToAllTasksClick} controlsPos={'top-right'}/> },
        { symbol: "9", component: <Task taskName={'tree'} handleToAllTasksClick={handleToAllTasksClick}/> },
        { symbol: "p", component: <Task taskName={'turtle'} handleToAllTasksClick={handleToAllTasksClick}/> },
        { symbol: "4", component: <Task taskName={'unicorn'} handleToAllTasksClick={handleToAllTasksClick} controlsPos={'top-left'}/> },

    ];



    return (
        !currentTask ? (
            <div className={clx.tasks}>
                <video autoPlay id="tasksVideo" controls={false} className={clx.fullscreenVideo} loop>
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
