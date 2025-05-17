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



export const Task = ({handleToAllTasksClick, taskName, controlsPos}) => {

    const [showHoverBlock, setShowHoverBlock] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const capitalizedTaskName = capitalizeFirstLetter(taskName);
    const questionClass = `${clx.question} ${clx[`question${capitalizedTaskName}`] || ''}`;
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





    const handleHoverBlockClick = () => {
        // Start fade out animation
        setFadeOut(true);
        console.log('click on blok')
    };

    const handleTransitionEnd = () => {
        // After fade out, remove hoverBlock from DOM
        if (fadeOut) {
            setShowHoverBlock(false);
        }
    };
    return (
        <div className={questionClass}>
            <video autoPlay id="dogVideo" className={clx.fullscreenVideo} loop>
                <source src={media.video} type="video/mp4"/>
            </video>
            <audio autoPlay ref={audioRef}>
                <source src={media.audio} type="audio/mp4"/>
            </audio>
            <div className={clx.controlBtnsList} style={positionStyles}>
                <Button
                    onClick={handleToAllTasksClick}
                    className={clx.toAllTasksButton}
                >
                    Всі завдання
                </Button>
                <AudioControls
                    isPlaying={isPlaying}
                    onToggle={toggleAudio}
                    onReplay={replayAudio}
                    alignStyle={audioBtnsAlignStyle}
                />


            </div>

            {showHoverBlock && (
                <div
                    className={`${clx.hoverBlock} ${fadeOut ? clx.fadeOut : ''}`}
                    onClick={handleHoverBlockClick}
                    onTransitionEnd={handleTransitionEnd}
                >
                    <img src={media.hoverImage} className={clx.hoverImg} alt="Hover Image" />
                    <img src={questionSign} className={clx.questionSign} alt="Question Sign" />
                </div>
            )}
        </div>
    );
};
