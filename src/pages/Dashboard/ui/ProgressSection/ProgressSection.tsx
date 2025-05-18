import React  from "react";
import { ProgressBar } from "react-step-progress-bar";
import clx from "./ProgressSection.module.css";
import {ProgressImage} from "./ProgressImage/ProgressImage";
import {useProgressImages} from "../../hooks/useProgressImages";
import {useProgressAudio} from "../../hooks/useProgressAudio";

interface ProgressSectionProps {
    progress: number;
    totalTasks: number;
}

export const ProgressSection = (props: ProgressSectionProps) => {
    const { progress, totalTasks }  = props;
    const {
        girlImages,
        thresholds,
        visibleImagesCount
    } = useProgressImages(totalTasks, progress);


    useProgressAudio(visibleImagesCount);

    return (
        <div className={clx.infoBlock}>
            <div className={clx.progressbarWrapper}>
                <ProgressBar
                    width="60vh"
                    height="60px"
                    percent={progress}
                    filledBackground="#FF191B"
                />

            </div>
            <div className={clx.imagesWrapper}>
                {girlImages.map((imgSrc, index) => {
                    const isVisible = progress >= thresholds[index];
                    return (
                        <ProgressImage
                            key={index}
                            src={imgSrc}
                            index={index}
                            isVisible={isVisible}
                            className={clx[`progressImg__girl${index + 1}`]}

                        />
                    )
                    }

                )}

            </div>
        </div>
    )}
;
