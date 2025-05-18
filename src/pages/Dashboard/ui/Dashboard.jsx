import clx from "./Dashboard.module.css";
import React, {useEffect, useState} from "react";
import "react-step-progress-bar/styles.css";
import {getTasks} from "../../../widgets/Task/model/tasksData";
import {useTaskProgress} from "../hooks/useTaskProgress";
import {TaskSection} from "./TaskSection/TaskSection";
import {ProgressSection} from "./ProgressSection/ProgressSection";
import {VideoBackground} from "../../../shared/ui/VideoBackground/VideoBackground";
import taskVideo from '../../../shared/assets/video/task.mp4';
import {Final} from "./Final/ui/Final";

export const Dashboard = () => {
    const TOTAL_TASKS = 18;
    const [currentTask, setCurrentTask] = useState(null);
     const [hiddenSymbols, setHiddenSymbols] = useState([]);
    const [showFinal, setShowFinal] = useState(false);


    const handleTaskClick = (task) => {
        setCurrentTask(task.component);
        setHiddenSymbols(prev => [...prev, task.symbol]);
    };

    const handleToAllTasksClick = () => {
        setCurrentTask(null);
    };

    const progress = useTaskProgress(currentTask, hiddenSymbols.length, TOTAL_TASKS);

    const { tasks1, tasks2, tasks3 } = getTasks(handleToAllTasksClick);
    useEffect(() => {
        if (hiddenSymbols.length === TOTAL_TASKS) {
            const timer = setTimeout(() => setShowFinal(true), 10000);
            return () => clearTimeout(timer); // Cleanup on unmount or condition change
        }
    }, [hiddenSymbols.length]);
    if (currentTask) return currentTask;

    if (showFinal) return <Final />;
    return (
        <div className={clx.tasks}>
            <VideoBackground id={'tasksVideo'} video={taskVideo}/>
            <TaskSection
                tasksGroups={[tasks1, tasks2, tasks3]}
                hiddenSymbols={hiddenSymbols}
                onTaskClick={handleTaskClick}
            />
            {progress > 0 && <ProgressSection progress={progress} totalTasks={TOTAL_TASKS}/>}

        </div>
    );
};
