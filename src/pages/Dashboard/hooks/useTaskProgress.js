import { useEffect, useState } from "react";
import {getImageThresholds} from "../../../shared/utils/getImageThresholds";

export const useTaskProgress = (currentTask, completedCount, totalTasks) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!currentTask) {
            const targetProgress = Math.min((completedCount / totalTasks) * 100, 100);
            console.log('targetProgress', targetProgress);
            let start = progress;

            if (targetProgress > start) {
                const step = () => {
                    const imageThresholds = getImageThresholds(totalTasks, 100/totalTasks, 100);
                    const stepSize = imageThresholds[1] - imageThresholds[0];
                    console.log('stepSize',stepSize)
                    start += stepSize;
                    if (start + stepSize >= targetProgress) {
                        setProgress(targetProgress); // ensure it reaches exact target
                    } else {
                        start += stepSize;
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
