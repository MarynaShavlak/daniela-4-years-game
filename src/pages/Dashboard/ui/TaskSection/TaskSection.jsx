import React from "react";
import clx from "./TaskSection.module.css";
import { TaskButtonList } from "../TaskButtonList/TaskButtonList";

export const TaskSection = ({ tasksGroups, hiddenSymbols, onTaskClick }) => {
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
