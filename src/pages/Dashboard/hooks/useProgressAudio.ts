import { useEffect, useRef, useState } from "react";

export const useProgressAudio = (visibleImagesCount: number): void => {
    const [audioToPlay, setAudioToPlay] = useState<number | null>(null);
    const prevVisibleImagesCountRef = useRef<number>(0);
    const currentAudioRef = useRef<HTMLAudioElement | null>(null);
    const audioTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Update audioToPlay when visibleImagesCount changes
    useEffect(() => {
        if (
            visibleImagesCount >= 1 &&
            prevVisibleImagesCountRef.current < visibleImagesCount
        ) {
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
            clearTimeout(audioTimeoutRef.current);
        }

        audioTimeoutRef.current = setTimeout(() => {
            try {
                if (currentAudioRef.current) {
                    currentAudioRef.current.pause();
                    currentAudioRef.current = null;
                }

                const audioPath: string = require(`../../../shared/assets/audio/greeting/${audioToPlay}.m4a`);
                const audio = new Audio(audioPath);
                currentAudioRef.current = audio;

                audio.play().catch((error) => {
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
