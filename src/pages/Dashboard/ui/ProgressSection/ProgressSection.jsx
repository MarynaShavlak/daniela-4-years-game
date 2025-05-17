import React from "react";
import { ProgressBar } from "react-step-progress-bar";
import clx from "./ProgressSection.module.css";

export const ProgressSection = ({ progress }) => (
    <div className={clx.progressbarWrapper}>
        <ProgressBar
            width="600px"
            height="60px"
            percent={progress}
            filledBackground="#FF191B"
        />
    </div>
);
