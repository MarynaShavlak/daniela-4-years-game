import clx from "./Dashboard.module.css";
import taskVideo from '../../../shared/assets/video/task.mp4'
import React, {useEffect, useRef, useState} from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import {getTasks} from "../../../widgets/Task/model/tasksData";
import {TaskButtonList} from "./TaskButtonList/TaskButtonList";
import {useTaskProgress} from "../hooks/useTaskProgress";
import {VideoBackground} from "./VideoBackground/VideoBackground";
import {TaskSection} from "./TaskSection/TaskSection";
import {ProgressSection} from "./ProgressSection/ProgressSection";
import audio1 from '../../../shared/assets/audio/greeting/1.m4a'

export const Dashboard = () => {
    const TOTAL_TASKS = 18;
    const [currentTask, setCurrentTask] = useState(null);
    const [hiddenSymbols, setHiddenSymbols] = useState([]);


    const handleTaskClick = (task) => {
        setCurrentTask(task.component);
        setHiddenSymbols(prev => [...prev, task.symbol]);
    };

    const handleToAllTasksClick = () => {
        setCurrentTask(null);
    };

    const progress = useTaskProgress(currentTask, hiddenSymbols.length, TOTAL_TASKS);

    const { tasks1, tasks2, tasks3 } = getTasks(handleToAllTasksClick);

    if (currentTask) return currentTask;
    return (
        <div className={clx.tasks}>
            <VideoBackground/>
            <TaskSection
                tasksGroups={[tasks1, tasks2, tasks3]}
                hiddenSymbols={hiddenSymbols}
                onTaskClick={handleTaskClick}
            />
            {progress > 0 && <ProgressSection progress={progress} totalTasks={TOTAL_TASKS}/>}

        </div>
    );
};
