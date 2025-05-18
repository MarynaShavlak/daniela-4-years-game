import clx from "./Dashboard.module.css";
import React, { ReactElement, useEffect, useState } from "react";
import "react-step-progress-bar/styles.css";
import { getTasks, TaskItem } from "../../../widgets/Task/model/tasksData";
import {useTaskProgress} from "../hooks/useTaskProgress";
import {TaskSection} from "./TaskSection/TaskSection";
import {ProgressSection} from "./ProgressSection/ProgressSection";
import {VideoBackground} from "../../../shared/ui/VideoBackground/VideoBackground";
import taskVideo from '../../../shared/assets/video/task.mp4';
import {Final} from "./Final/ui/Final";
import {useAppStore} from "../../../app/store/useAppStore";


export const Dashboard = () => {
    const TOTAL_TASKS = 18;
    const [currentTask, setCurrentTask] = useState<ReactElement | null>(null);
    const [showFinal, setShowFinal] = useState(false);
    const { hiddenSymbols, addHiddenSymbol } = useAppStore();

    const handleTaskClick = (task: TaskItem): void => {
        setCurrentTask(task.component);
        addHiddenSymbol(task.symbol);
    };

    const handleToAllTasksClick = () => {
        setCurrentTask(null);
    };

    const progress = useTaskProgress(currentTask, hiddenSymbols.length, TOTAL_TASKS);

    const { tasks1, tasks2, tasks3 } = getTasks(handleToAllTasksClick);
    useEffect(() => {
        if (hiddenSymbols.length === TOTAL_TASKS) {
            const timer = setTimeout(() => setShowFinal(true), 10000);
            return () => clearTimeout(timer);
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
