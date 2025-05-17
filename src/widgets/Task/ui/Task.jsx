import React, { useState} from "react";

import clx from './Task.module.css';

import questionSign from '../../../shared/assets/images/decor/question.gif'
import {capitalizeFirstLetter} from "../../../shared/utils/capitalizeFirstLetter";
import {getObjectMedia} from "../../../shared/utils/tasksMediaManager";
import {getControlPositionStyles} from "../../../shared/utils/getControlPositionStyles";
import {getAudioBtnsAlignStyle} from "../../../shared/utils/getAudioBtnsAlignStyle";
import {useAudioPlayer} from "../hooks/useAudioPlayer";
import {AudioControls} from "../../../features/AudioControls/ui/AudioControls";
import {Button} from "../../../shared/ui/Button/Button";
import {HoverBlock} from "./HoverBlock/HoverBlock";
import {TaskControls} from "./TaskControls/TaskControls";
import {TaskMedia} from "./TaskMedia/TaskMedia";



export const Task = ({handleToAllTasksClick, taskName, controlsPos}) => {

    const media = getObjectMedia(taskName);
    const positionStyles = getControlPositionStyles(controlsPos);
    const audioBtnsAlignStyle = getAudioBtnsAlignStyle(controlsPos);

    const {
        audioRef,
        isPlaying,
        toggleAudio,
        replayAudio
    } = useAudioPlayer(true);

    if (!media) {
        return <div>No media found for `${taskName}`</div>;
    }

    return (
        <div className={clx.question}>
            <TaskMedia videoSrc={media.video} audioSrc={media.audio} audioRef={audioRef} />
            <TaskControls
                handleToAllTasksClick={handleToAllTasksClick}
                positionStyles={positionStyles}
                isPlaying={isPlaying}
                toggleAudio={toggleAudio}
                replayAudio={replayAudio}
                alignStyle={audioBtnsAlignStyle}
            />
            <HoverBlock imageSrc={media.hoverImage} taskName={taskName}/>
        </div>
    );
};
