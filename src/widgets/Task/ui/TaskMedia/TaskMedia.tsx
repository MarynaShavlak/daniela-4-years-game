import React from "react";

import clx from './TaskMedia.module.css';

export const TaskMedia = ({ videoSrc }: { videoSrc?: string | null }) => {
    return (
        <>
            {videoSrc && (
                <video autoPlay className={clx.fullscreenVideo} loop>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}
        </>
    );
};
