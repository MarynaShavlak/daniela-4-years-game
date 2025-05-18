import { useEffect, useState } from "react";
import {getImageThresholds} from "../../../shared/utils/getImageThresholds";

export const useTaskProgress = (currentTask, completedCount, totalTasks) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!currentTask) {
            const targetProgress = Math.min((completedCount / totalTasks) * 100, 100);
            let start = progress;

            if (targetProgress > start) {
                const step = () => {
                    const imageThresholds = getImageThresholds(totalTasks, 100/totalTasks, 100);
                    const stepSize = imageThresholds[1] - imageThresholds[0];

                    start += stepSize;
                    if (start + stepSize >= targetProgress) {
                        setProgress(targetProgress);
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
