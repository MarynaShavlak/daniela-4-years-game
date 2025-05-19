import React from "react";
import ReactPlayer from "react-player";
import clx from "./VideoBackground.module.css";

interface VideoBackgroundProps {
    id?: string;
    video: string;
    loop?: boolean;
    controls?: boolean;
    muted?: boolean;
}

export const VideoBackground = (props: VideoBackgroundProps) => {
    const { id, video, loop = true, controls = false, muted = true } = props;

    return (
        <div id={id} className={clx.fullscreenVideo}>
            <ReactPlayer
                url={video}
                playing
                loop={loop}
                controls={controls}
                muted={muted}
                width="100%"
                height="100%"
                className={clx.reactPlayer}
            />
        </div>
    );
};

