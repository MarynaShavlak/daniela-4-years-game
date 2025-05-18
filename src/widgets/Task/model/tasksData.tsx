import {Task} from "../ui/Task";
import { ReactElement } from 'react';
import { TaskSymbol } from '@/shared/utils/taskImages';

export type TaskItem = {
    symbol: TaskSymbol;
    component: ReactElement;
};

export type TasksGroup = {
    tasks1: TaskItem[];
    tasks2: TaskItem[];
    tasks3: TaskItem[];
};

export const getTasks = (handleToAllTasksClick: () => void): TasksGroup => ({
    tasks1: [
        { symbol: "a", component: <Task taskName="bear" handleToAllTasksClick={handleToAllTasksClick} controlsPos="top-right" /> },
        { symbol: "2", component: <Task taskName="behemoth" handleToAllTasksClick={handleToAllTasksClick} controlsPos="top-right" /> },
        { symbol: "b", component: <Task taskName="car" handleToAllTasksClick={handleToAllTasksClick} controlsPos="top-right" /> },
        { symbol: "0", component: <Task taskName="cat" handleToAllTasksClick={handleToAllTasksClick} /> },
    ],
    tasks2: [
        { symbol: "8", component: <Task taskName="crab" handleToAllTasksClick={handleToAllTasksClick} /> },
        { symbol: "h", component: <Task taskName="dinosaur" handleToAllTasksClick={handleToAllTasksClick} controlsPos="top-left" /> },
        { symbol: "6", component: <Task taskName="dog" handleToAllTasksClick={handleToAllTasksClick} /> },
        { symbol: "c", component: <Task taskName="fox" handleToAllTasksClick={handleToAllTasksClick} /> },
        { symbol: "5", component: <Task taskName="frog" handleToAllTasksClick={handleToAllTasksClick} /> },
        { symbol: "t", component: <Task taskName="ghost" handleToAllTasksClick={handleToAllTasksClick} controlsPos="top-left" /> },
    ],
    tasks3: [
        { symbol: "7", component: <Task taskName="icecream" handleToAllTasksClick={handleToAllTasksClick} controlsPos="top-right" /> },
        { symbol: "m", component: <Task taskName="mouse" handleToAllTasksClick={handleToAllTasksClick} /> },
        { symbol: "3", component: <Task taskName="pig" handleToAllTasksClick={handleToAllTasksClick} /> },
        { symbol: "k", component: <Task taskName="sheep" handleToAllTasksClick={handleToAllTasksClick} controlsPos="top-right" /> },
        { symbol: "1", component: <Task taskName="snail" handleToAllTasksClick={handleToAllTasksClick} controlsPos="top-right" /> },
        { symbol: "9", component: <Task taskName="tree" handleToAllTasksClick={handleToAllTasksClick} /> },
        { symbol: "p", component: <Task taskName="turtle" handleToAllTasksClick={handleToAllTasksClick} /> },
        { symbol: "4", component: <Task taskName="unicorn" handleToAllTasksClick={handleToAllTasksClick} controlsPos="top-left" /> },
    ],
});
