import clx from "./Dashboard.module.css";
import taskVideo from '../../../shared/assets/video/task.mp4'
import React, {useState} from "react";
import {taskImages} from "../../../shared/utils/taskImages";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import {getTasks} from "../../../widgets/Task/model/tasksData";
import {TaskButtonList} from "./TaskButtonList/TaskButtonList";



export const Dashboard = () => {
    const [currentTask, setCurrentTask] = useState(null);
    const [hiddenSymbols, setHiddenSymbols] = useState([]);
    const handleTaskClick = (task) => {
        setCurrentTask(task.component);
        setHiddenSymbols(prev => [...prev, task.symbol]);
    };

    const handleToAllTasksClick = (task) => {
        setCurrentTask(null);
    };



    const { tasks1, tasks2, tasks3 } = getTasks(handleToAllTasksClick);
    return (
        !currentTask ? (
            <div className={clx.tasks}>
                <video autoPlay id="tasksVideo" controls={false} className={clx.fullscreenVideo} loop>
                    <source src={taskVideo} type="video/mp4"/>
                </video>

                <div className={clx.listWrapper}>
                    <TaskButtonList
                        tasks={tasks1}
                        hiddenSymbols={hiddenSymbols}
                        onTaskClick={handleTaskClick}
                        listClass={clx.tasksButtonList}
                    />
                    <TaskButtonList
                        tasks={tasks2}
                        hiddenSymbols={hiddenSymbols}
                        onTaskClick={handleTaskClick}
                        listClass={clx.tasksButtonListSmall}
                    />
                    <TaskButtonList
                        tasks={tasks3}
                        hiddenSymbols={hiddenSymbols}
                        onTaskClick={handleTaskClick}
                        listClass={clx.tasksButtonList}
                    />
                </div>
                <div className={clx.progressbarWrapper}>
                    <ProgressBar
                        width={'600px'}
                        height={'60px'}
                        percent={0}
                        filledBackground={'#FF191B'}
                    />
                </div>

            </div>
        ) : currentTask
    );
};
