import clx from "./Dashboard.module.css";
import React, { ReactElement, useEffect, useState } from "react";
import "react-step-progress-bar/styles.css";
import { getTasks, TaskItem } from "../../../widgets/Task/model/tasksData";
import { useTaskProgress } from "../hooks/useTaskProgress";
import { TaskSection } from "./TaskSection/TaskSection";
import { ProgressSection } from "./ProgressSection/ProgressSection";
import { VideoBackground } from "../../../shared/ui/VideoBackground/VideoBackground";
import taskVideo from '../../../shared/assets/video/task.mp4';
import { Final } from "./Final/ui/Final";
import { useAppStore } from "../../../app/store/useAppStore";

import { motion, AnimatePresence } from "framer-motion";

const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

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

    return (
        <div className={clx.tasks}>
            <VideoBackground id={'tasksVideo'} video={taskVideo} />

            <AnimatePresence >
                {currentTask ? (
                    <motion.div
                        key="task"
                        variants={fadeVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                    >
                        {currentTask}
                    </motion.div>
                ) : showFinal ? (
                    <motion.div
                        key="final"
                        variants={fadeVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                    >
                        <Final />
                    </motion.div>
                ) : (
                    <motion.div
                        key="taskSection"
                        variants={fadeVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                    >
                        <TaskSection
                            tasksGroups={[tasks1, tasks2, tasks3]}
                            hiddenSymbols={hiddenSymbols}
                            onTaskClick={handleTaskClick}
                        />
                        {progress > 0 && (
                            <ProgressSection progress={progress} totalTasks={TOTAL_TASKS} />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
