import React from "react";
import { ProgressBar } from "react-step-progress-bar";
import clx from "./ProgressSection.module.css";
import girl1 from  '../../../../shared/assets/images/girl/girl1.png'
import girl18 from  '../../../../shared/assets/images/girl/girl18.png';

export const ProgressSection = ({ progress }) => (
        <div className={clx.infoBlock}>
            <div className={clx.progressbarWrapper}>
                <ProgressBar
                    width="600px"
                    height="60px"
                    percent={progress}
                    filledBackground="#FF191B"
                />

            </div>
            <div className={clx.imagesWrapper}>
                <img src={girl1} alt="Girl 1 Photo" className={`${clx.progressImg} ${clx["progressImg__girl1"]}`}/>
                <img src={girl18} alt="Girl 1 Photo" className={`${clx.progressImg} ${clx["progressImg__girl18"]}`}/>
            </div>
        </div>
    )
;
