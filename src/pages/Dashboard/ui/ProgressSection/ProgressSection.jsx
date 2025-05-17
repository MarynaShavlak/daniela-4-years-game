import React from "react";
import { ProgressBar } from "react-step-progress-bar";
import clx from "./ProgressSection.module.css";


export const ProgressSection = ({ progress }) =>
{
    const girlImages = Array.from({ length: 18 }, (_, i) =>
        require(`../../../../shared/assets/images/girl/girl${i + 1}.png`)
    );
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
                    <img
                        key={index}
                        src={imgSrc}
                        alt={`Girl ${index + 1} Photo`}
                        className={`${clx.progressImg} ${clx[`progressImg__girl${index + 1}`] || ''}`}
                    />
                ))}
            </div>
        </div>
    )}
;
