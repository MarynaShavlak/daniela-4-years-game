import React from "react";
import clx from "./TaskSection.module.css";
import {  TaskButtonList } from "../TaskButtonList/TaskButtonList";
import { TaskItem, TasksGroup } from '@/widgets/Task/model/tasksData';
import { TaskProps } from '@/widgets/Task/ui/Task';

interface TaskSectionProps {
    tasksGroups: TaskItem[][];
    hiddenSymbols: string[];
    onTaskClick: (task: TaskItem) => void;
}

export const TaskSection = (props: TaskSectionProps) => {
    const { tasksGroups, hiddenSymbols, onTaskClick } = props;
    const classNames = [clx.tasksButtonList, clx.tasksButtonListSmall, clx.tasksButtonList];


    return (
        <div className={clx.listWrapper}>
            {tasksGroups.map((tasks, index) => {

                return(
                    <TaskButtonList
                        key={index}
                        tasks={tasks}
                        hiddenSymbols={hiddenSymbols}
                        onTaskClick={onTaskClick}
                        listClass={classNames[index]}
                    />
                )
            })}
        </div>
    );
};

