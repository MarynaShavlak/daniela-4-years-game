import React from "react";
import { ProgressBar } from "react-step-progress-bar";
import clx from "./ProgressSection.module.css";


export const ProgressSection = ({ progress }) =>
{
    const girlImages = Array.from({ length: 18 }, (_, i) =>
        require(`../../../../shared/assets/images/girl/girl${i + 1}.png`)
    );

    const startProgress = 5;
    const endProgress = 100;
    const step = (endProgress - startProgress) / (girlImages.length - 1);

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
                    const threshold = startProgress + index * step;
                    const isVisible = progress >= threshold;

                    return (
                        <img
                            key={index}
                            src={imgSrc}
                            alt={`Girl ${index + 1} Photo`}
                            className={`
                                ${clx.progressImg}
                                ${clx[`progressImg__girl${index + 1}`] || ''}
                                ${isVisible ? clx.fadeIn : clx.fadeOut}
                            `}
                        />
                    );
                })}
            </div>
        </div>
    )}
;
