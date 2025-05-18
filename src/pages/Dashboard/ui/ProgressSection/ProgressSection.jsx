import React, {useEffect, useRef, useState} from "react";
import { ProgressBar } from "react-step-progress-bar";
import clx from "./ProgressSection.module.css";
import {getImageThresholds} from "../../../../shared/utils/getImageThresholds";
import {ProgressImage} from "./ProgressImage/ProgressImage";


export const ProgressSection = ({ progress, totalTasks }) =>
{
    const girlImages = Array.from({ length: totalTasks }, (_, i) =>
        require(`../../../../shared/assets/images/girl/girl${i + 1}.png`)
    );

    const startProgress = 100/18;
    const endProgress = 100;
    const thresholds = getImageThresholds(girlImages.length, startProgress, endProgress);

    const visibleImagesCount = girlImages.reduce((count, _, index) => {
        return progress >= thresholds[index] ? count + 1 : count;
    }, 0);
console.log('visibleImagesCount', visibleImagesCount);

// State to track the latest audio to play
        const [audioToPlay, setAudioToPlay] = useState(null);
        const prevVisibleImagesCountRef = useRef(0);
        const currentAudioRef = useRef(null);
        const audioTimeoutRef = useRef(null);

        // Update audioToPlay when visibleImagesCount changes
        useEffect(() => {
            console.log(
                "useEffect: visibleImagesCount:",
                visibleImagesCount,
                "prev:",
                prevVisibleImagesCountRef.current
            );

            if (visibleImagesCount >= 1 && prevVisibleImagesCountRef.current < visibleImagesCount) {
                console.log("Setting audioToPlay for index:", visibleImagesCount);
                setAudioToPlay(visibleImagesCount);
            }

            prevVisibleImagesCountRef.current = visibleImagesCount;

            // Cleanup on unmount
            return () => {
                if (audioTimeoutRef.current) {
                    console.log("Clearing timeout in cleanup");
                    clearTimeout(audioTimeoutRef.current);
                }
            };
        }, [visibleImagesCount]);

        // Handle audio playback with debouncing
        useEffect(() => {
            if (audioToPlay === null) return;

            console.log("Audio playback effect triggered for index:", audioToPlay);

            // Clear any existing timeout
            if (audioTimeoutRef.current) {
                console.log("Clearing previous timeout");
                clearTimeout(audioTimeoutRef.current);
            }

            audioTimeoutRef.current = setTimeout(() => {
                try {
                    // Stop any currently playing audio
                    if (currentAudioRef.current) {
                        console.log("Pausing previous audio");
                        currentAudioRef.current.pause();
                        currentAudioRef.current = null;
                    }

                    // Load and play the new audio
                    const audioPath = require(`../../../../shared/assets/audio/greeting/${audioToPlay}.m4a`);
                    console.log("Loading audio:", audioPath);
                    const audio = new Audio(audioPath);
                    currentAudioRef.current = audio;

                    // Play audio and handle errors
                    audio
                        .play()
                        .then(() => {
                            console.log("Audio playing successfully for index:", audioToPlay);
                        })
                        .catch((error) => {
                            console.error(`Audio playback failed for index ${audioToPlay}:`, error);
                            if (error.name === "NotAllowedError") {
                                console.warn("Autoplay blocked. User interaction may be required.");
                            }
                        });
                } catch (error) {
                    console.error(`Could not load audio file for index ${audioToPlay}:`, error);
                }
            }, 100); // 100ms debounce to stabilize playback

            // Cleanup timeout on effect rerun or unmount
            return () => {
                if (audioTimeoutRef.current) {
                    console.log("Clearing timeout in audio effect cleanup");
                    clearTimeout(audioTimeoutRef.current);
                }
            };
        }, [audioToPlay]);


    return (
        <div className={clx.infoBlock}>
            <div className={clx.progressbarWrapper}>
                <ProgressBar
                    width="60vh"
                    height="60px"
                    percent={progress}
                    filledBackground="#FF191B"
                />

            </div>
            <div className={clx.imagesWrapper}>
                {girlImages.map((imgSrc, index) => {
                    const isVisible = progress >= thresholds[index];
                    return (
                        <ProgressImage
                            key={index}
                            src={imgSrc}
                            index={index}
                            isVisible={isVisible}
                            className={clx[`progressImg__girl${index + 1}`]}

                        />
                    )
                    }

                )}

            </div>
        </div>
    )}
;
