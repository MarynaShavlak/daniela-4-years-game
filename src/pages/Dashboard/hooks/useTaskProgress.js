import { useEffect, useState } from "react";

export const useTaskProgress = (currentTask, completedCount, totalTasks) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!currentTask) {
            const targetProgress = Math.min((completedCount / totalTasks) * 100, 100);
            let start = progress;

            if (targetProgress > start) {
                const step = () => {
                    start += 1;
                    if (start <= targetProgress) {
                        setProgress(start);
                        requestAnimationFrame(step);
                    }
                };
                requestAnimationFrame(step);
            }
        }
    }, [currentTask, completedCount, totalTasks]);

    return progress;
};
