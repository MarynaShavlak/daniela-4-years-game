import React from "react";

import clx from "./VideoBackground.module.css";

export const VideoBackground = ({id, video, loop= true, controls= false}) => (
    <video autoPlay id={id} controls={controls} className={clx.fullscreenVideo} loop={loop}>
        <source src={video} type="video/mp4" />
    </video>
);
