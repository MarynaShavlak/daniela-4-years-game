import React from "react";
import { ProgressBar } from "react-step-progress-bar";
import clx from "./ProgressSection.module.css";
import {getImageThresholds} from "../../../../shared/utils/getImageThresholds";
import {ProgressImage} from "./ProgressImage/ProgressImage";


export const ProgressSection = ({ progress, totalTasks }) =>
{
    const girlImages = Array.from({ length: totalTasks }, (_, i) =>
        require(`../../../../shared/assets/images/girl/girl${i + 1}.png`)
    );

    const startProgress = 5;
    const endProgress = 100;
    const thresholds = getImageThresholds(girlImages.length, startProgress, endProgress);
    const visibleImagesCount = girlImages.reduce((count, _, index) => {
        return progress >= thresholds[index] ? count + 1 : count;
    }, 0);
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
                {girlImages.map((imgSrc, index) => (
                    <ProgressImage
                        key={index}
                        src={imgSrc}
                        index={index}
                        isVisible={progress >= thresholds[index]}

                        className={clx[`progressImg__girl${index + 1}`]}
                    />
                    )

                )}
            </div>
        </div>
    )}
;
