import { useRef, useState } from 'react';

export const useAudioPlayer = (autoPlay: boolean = true) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const replayAudio = () => {
        if (!audioRef.current) return;

        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setIsPlaying(true);
    };

    return {
        audioRef,
        isPlaying,
        toggleAudio,
        replayAudio
    };
};
