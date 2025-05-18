import { useMemo } from "react";
import {getImageThresholds} from "../../../shared/utils/getImageThresholds";


export const useProgressImages = (totalTasks, progress) => {

    const girlImages = useMemo(() => {
        return Array.from({ length: totalTasks }, (_, i) =>
            require(`../../../shared/assets/images/girl/girl${i + 1}.png`)
        );
    }, [totalTasks]);


    const thresholds = useMemo(() => {
        const startProgress = 100 / 18;
        const endProgress = 100;
        return getImageThresholds(girlImages.length, startProgress, endProgress);
    }, [girlImages.length]);


    const visibleImagesCount = useMemo(() => {
        return girlImages.reduce((count, _, index) => {
            return progress >= thresholds[index] ? count + 1 : count;
        }, 0);
    }, [girlImages, thresholds, progress]);

    return {
        girlImages,
        thresholds,
        visibleImagesCount
    };
};
