import React from "react";
import taskVideo from '../../../../shared/assets/video/task.mp4';
import clx from "./VideoBackground.module.css";

export const VideoBackground = () => (
    <video autoPlay id="tasksVideo" controls={false} className={clx.fullscreenVideo} loop>
        <source src={taskVideo} type="video/mp4" />
    </video>
);
