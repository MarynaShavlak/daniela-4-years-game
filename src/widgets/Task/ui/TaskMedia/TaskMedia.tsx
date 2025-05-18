import React, { RefObject } from "react";
import clx from './TaskMedia.module.css';

interface TaskMediaProps {
    videoSrc?: string | null;
    audioSrc?: string | null;
    audioRef: RefObject<HTMLAudioElement | null>;
}

export const TaskMedia = ({ videoSrc, audioSrc, audioRef }: TaskMediaProps) => {
    return (
        <>
            {videoSrc && (
                <video autoPlay className={clx.fullscreenVideo} loop>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}
            {audioSrc && (
                <audio autoPlay ref={audioRef}>
                    <source src={audioSrc} type="audio/mp4" />
                </audio>
            )}
        </>
    );
};
