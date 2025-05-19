// // import React, { RefObject } from "react";
// // import clx from './TaskMedia.module.css';
// //
// // interface TaskMediaProps {
// //     videoSrc?: string | null;
// //     audioSrc?: string | null;
// //     audioRef: RefObject<HTMLAudioElement | null>;
// // }
// //
// // export const TaskMedia = ({ videoSrc, audioSrc, audioRef }: TaskMediaProps) => {
// //     return (
// //         <>
// //             {videoSrc && (
// //                 <video autoPlay className={clx.fullscreenVideo} loop>
// //                     <source src={videoSrc} type="video/mp4" />
// //                 </video>
// //             )}
// //             {audioSrc && (
// //                 <audio autoPlay ref={audioRef}>
// //                     <source src={audioSrc} type="audio/mp4" />
// //                 </audio>
// //             )}
// //         </>
// //     );
// // };
//
//
// import React, { useEffect, useRef } from "react";
// import {Howl, Howler} from 'howler';
// import clx from './TaskMedia.module.css';
//
// interface TaskMediaProps {
//     videoSrc?: string | null;
//     audioSrc?: string | null;
//     audioRef: React.MutableRefObject<Howl | null>; // Updated type
// }
//
// export const TaskMedia = ({ videoSrc, audioSrc, audioRef }: TaskMediaProps) => {
//     const howlRef = useRef<Howl | null>(null);
//
//     useEffect(() => {
//         if (audioSrc) {
//             // Create a new Howl instance
//             const sound = new Howl({
//                 src: [audioSrc],
//                 autoplay: true,
//                 loop: false,
//                 format: ['mp3', 'mp4', 'm4a'], // optional: depending on your file types
//                 html5: true, // use HTML5 Audio for large files
//             });
//
//             // Assign to ref
//             howlRef.current = sound;
//             audioRef.current = sound;
//
//             // Cleanup on unmount
//             return () => {
//                 sound.stop();
//                 sound.unload();
//             };
//         }
//     }, [audioSrc]);
//
//     return (
//         <>
//             {videoSrc && (
//                 <video autoPlay className={clx.fullscreenVideo} loop>
//                     <source src={videoSrc} type="video/mp4" />
//                 </video>
//             )}
//         </>
//     );
// };

import React, { useEffect, useRef } from "react";
import {Howl, Howler} from 'howler';
import clx from './TaskMedia.module.css';

export const TaskMedia = ({ videoSrc }: { videoSrc?: string | null }) => {
    return (
        <>
            {videoSrc && (
                <video autoPlay className={clx.fullscreenVideo} loop>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            )}
        </>
    );
};
