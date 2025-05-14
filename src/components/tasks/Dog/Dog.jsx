
import React, {useRef, useState} from 'react';
import clx from '../tasks.module.css';
import taskVideo from '../../../video/tasks/dog.mp4';
import dogAudio from '../../../audio/dog.m4a';
import dogHover from '../../../images/hover/dog.png';
import questionSign from '../../../images/decor/question.gif';
import { IonIcon } from '@ionic/react';
import { playOutline, pauseOutline, refreshOutline } from 'ionicons/icons';

export const Dog = ({handleToAllTasksClick}) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

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
    return (
        <div className={`${clx.question} ${clx.questionDog}`}>
            <video autoPlay id="dogVideo" controls className={clx.fullscreenVideo} loop>
                <source src={taskVideo} type="video/mp4"/>
            </video>
            <audio autoPlay ref={audioRef}>
                <source src={dogAudio} type="audio/mp4"/>
            </audio>
            <div className={clx.controlBtnsList}>
                <button
                    className={`${clx.btn} ${clx.toAllTasksButton}`}
                    onClick={handleToAllTasksClick}
                >
                    Всі завдання
                </button>
                <div className={clx.audioBtnsList} >
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


            <div className={clx.hoverBlock}>
                <img src={dogHover} className={clx.hoverImg}/>
                <img src={questionSign} className={clx.questionSign}/>

            </div>
        </div>
    );
};
