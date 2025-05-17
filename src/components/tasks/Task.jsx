import React, {useRef, useState} from "react";
import {getObjectMedia} from "../../data/tasksMedia";
import clx from './Task.module.css';
import {capitalizeFirstLetter} from "../../utils/capitalizeFirstLetter";
import { IonIcon } from '@ionic/react';
import { playOutline, pauseOutline, refreshOutline } from 'ionicons/icons';
import questionSign from '../../images/decor/question.gif';
import {getControlPositionStyles} from "../../utils/getControlPositionStyles";
import {getAudioBtnsAlignStyle} from "../../utils/getAudioBtnsAlignStyle";

export const Task = ({handleToAllTasksClick, taskName, controlsPos}) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [showHoverBlock, setShowHoverBlock] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const capitalizedTaskName = capitalizeFirstLetter(taskName);
    const questionClass = `${clx.question} ${clx[`question${capitalizedTaskName}`] || ''}`;
    const media = getObjectMedia(taskName);
    const positionStyles = getControlPositionStyles(controlsPos);
    const audioBtnsAlignStyle = getAudioBtnsAlignStyle(controlsPos);

    if (!media) {
        return <div>No media found for `${taskName}`</div>;



    }

    const handleAudioToggle = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleReplayFromStart = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setIsPlaying(true);
    }

    const handleHoverBlockClick = () => {
        // Start fade out animation
        setFadeOut(true);
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
                <button
                    className={`${clx.btn} ${clx.toAllTasksButton}`}
                    onClick={handleToAllTasksClick}
                >
                    Всі завдання
                </button>
                <div className={clx.audioBtnsList} style={audioBtnsAlignStyle} >
                    <button
                        className= {`${clx.btn} ${clx.audioButton}`}
                        onClick={handleAudioToggle}
                    >
                        {isPlaying ? <IonIcon icon={pauseOutline}/> : <IonIcon icon={playOutline}/>}
                    </button>
                    <button
                        className={`${clx.btn} ${clx.audioButton}`}
                        onClick={handleReplayFromStart}
                    >
                        <IonIcon icon={refreshOutline}/>
                    </button>
                </div>

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
