import React from "react";

import clx from "./VideoBackground.module.css";

interface VideoBackgroundProps {
    id?: string;
    video: string;
    loop?: boolean;
    controls?: boolean;
}

export const VideoBackground = (props: VideoBackgroundProps) => {
    const {id, video, loop= true, controls= false} = props;
    return (
    <video autoPlay id={id} controls={controls} className={clx.fullscreenVideo} loop={loop}>
        <source src={video} type="video/mp4" />
    </video>
)};
