import { taskImages } from "@/shared/utils/taskImages";
import clx from './TaskButtonList.module.css'
import { TaskItem } from '@/widgets/Task/model/tasksData';


interface TaskButtonListProps {
    tasks: TaskItem[];
    hiddenSymbols: string[];
    onTaskClick: (task: TaskItem) => void;
    listClass?: string;
}

export const TaskButtonList = (props: TaskButtonListProps) => {
    const { tasks, hiddenSymbols, onTaskClick, listClass }= props;
    return (
    <ul className={`${listClass} ${clx.btnList}`}>
        {tasks.map((task) => (
            <li
                className={`${clx.symbol} ${hiddenSymbols.includes(task.symbol) ? clx.fadeOut : ''}`}
                key={task.symbol}
                onClick={() => onTaskClick(task)}
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
)};
