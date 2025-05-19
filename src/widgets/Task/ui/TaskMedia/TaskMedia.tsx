import React from "react";
import { VideoBackground } from '@/shared/ui/VideoBackground/VideoBackground';


export const TaskMedia = ({ videoSrc, videoId }: { videoSrc?: string | null, videoId: string }) => {
    return (
        <>
            {videoSrc && (
                <VideoBackground id={videoId} video={videoSrc} />

            )}
        </>
    );
};
