import React from 'react';
import clx from './Final.module.css';
import finalVideo from '../../../../../shared/assets/video/final.mp4';
import { VideoBackground } from '../../../../../shared/ui/VideoBackground/VideoBackground';


export const Final = () => {
    return (
        <div className={clx.final}>
            <VideoBackground
                id="finalVideo"
                video={finalVideo}
                loop={false}
                controls={false}
            />

        </div>
    );
};
