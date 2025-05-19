// import { useRef, useState } from 'react';
//
// export const useAudioPlayer = (autoPlay: boolean = true) => {
//     const audioRef = useRef<HTMLAudioElement | null>(null);
//     const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
//
//     const toggleAudio = () => {
//         if (!audioRef.current) return;
//
//         if (isPlaying) {
//             audioRef.current.pause();
//         } else {
//             audioRef.current.play();
//         }
//         setIsPlaying(!isPlaying);
//     };
//
//     const replayAudio = () => {
//         if (!audioRef.current) return;
//
//         audioRef.current.currentTime = 0;
//         audioRef.current.play();
//         setIsPlaying(true);
//     };
//
//     return {
//         audioRef,
//         isPlaying,
//         toggleAudio,
//         replayAudio
//     };
// };

import { useRef, useState, useEffect } from 'react';
import { Howl } from 'howler';

export const useAudioPlayer = (audioSrc: string, autoPlay: boolean = true) => {
    const audioRef = useRef<Howl | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);

    useEffect(() => {
        if (!audioSrc) return;

        const sound = new Howl({
            src: [audioSrc],
            autoplay: autoPlay,
            loop: false,
            html5: true,
            onplay: () => setIsPlaying(true),
            onpause: () => setIsPlaying(false),
            onend: () => setIsPlaying(false),
        });

        audioRef.current = sound;

        return () => {
            sound.stop();
            sound.unload();
        };
    }, [audioSrc]);

    const toggleAudio = () => {
        const sound = audioRef.current;
        if (!sound) return;

        if (sound.playing()) {
            sound.pause();
        } else {
            sound.play();
        }
    };

    const replayAudio = () => {
        const sound = audioRef.current;
        if (!sound) return;

        sound.stop();
        sound.play();
    };

    return {
        audioRef,
        isPlaying,
        toggleAudio,
        replayAudio
    };
};
