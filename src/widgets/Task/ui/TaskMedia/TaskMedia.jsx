import React from "react";
import clx from './TaskMedia.module.css';

export const TaskMedia = ({ videoSrc, audioSrc, audioRef }) => (
    <>
        <video autoPlay className={clx.fullscreenVideo} loop>
            <source src={videoSrc} type="video/mp4" />
        </video>
        <audio autoPlay ref={audioRef}>
            <source src={audioSrc} type="audio/mp4" />
        </audio>
    </>
);
