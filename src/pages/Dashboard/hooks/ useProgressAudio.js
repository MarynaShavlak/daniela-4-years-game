import { useEffect, useRef, useState } from "react";

export const useProgressAudio = (visibleImagesCount) => {
    const [audioToPlay, setAudioToPlay] = useState(null);
    const prevVisibleImagesCountRef = useRef(0);
    const currentAudioRef = useRef(null);
    const audioTimeoutRef = useRef(null);

    // Update audioToPlay when visibleImagesCount changes
    useEffect(() => {
        if (visibleImagesCount >= 1 && prevVisibleImagesCountRef.current < visibleImagesCount) {
            setAudioToPlay(visibleImagesCount);
        }

        prevVisibleImagesCountRef.current = visibleImagesCount;

        return () => {
            if (audioTimeoutRef.current) {
                clearTimeout(audioTimeoutRef.current);
            }
        };
    }, [visibleImagesCount]);

    // Play audio when audioToPlay changes
    useEffect(() => {
        if (audioToPlay === null) return;

        if (audioTimeoutRef.current) {
            console.log("Clearing previous timeout");
            clearTimeout(audioTimeoutRef.current);
        }

        audioTimeoutRef.current = setTimeout(() => {
            try {
                if (currentAudioRef.current) {
                    currentAudioRef.current.pause();
                    currentAudioRef.current = null;
                }

                const audioPath = require(`../../../shared/assets/audio/greeting/${audioToPlay}.m4a`);
                const audio = new Audio(audioPath);
                currentAudioRef.current = audio;

                audio
                    .play()
                    .then(() => {

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
        }, 100);

        return () => {
            if (audioTimeoutRef.current) {
                clearTimeout(audioTimeoutRef.current);
            }
        };
    }, [audioToPlay]);
};
