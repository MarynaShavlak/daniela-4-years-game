import clx from './Task.module.css';
import { getObjectMedia, ObjectName } from "@/shared/utils/tasksMediaManager";
import {getControlPositionStyles} from "@/shared/utils/getControlPositionStyles";
import {getAudioBtnsAlignStyle} from "@/shared/utils/getAudioBtnsAlignStyle";
import {useAudioPlayer} from "../hooks/useAudioPlayer";

import {HoverBlock} from "./HoverBlock/HoverBlock";
import {TaskControls} from "./TaskControls/TaskControls";
import {TaskMedia} from "./TaskMedia/TaskMedia";
import { Position } from '@/shared/types/position';

export interface TaskProps {
    handleToAllTasksClick: ()=> void,
    taskName: ObjectName,
    controlsPos?: Position,
}

export const Task = (props: TaskProps) => {
const {handleToAllTasksClick, taskName, controlsPos} = props;
    const media = getObjectMedia(taskName);
    const positionStyles = getControlPositionStyles(controlsPos);
    const audioBtnsAlignStyle = getAudioBtnsAlignStyle(controlsPos);

    const {
        audioRef,
        isPlaying,
        toggleAudio,
        replayAudio
    } = useAudioPlayer(media.audio || '', true);



    return (
        <div className={clx.question}>
            <TaskMedia videoSrc={media.video} videoId={taskName} />
            <TaskControls
                handleToAllTasksClick={handleToAllTasksClick}
                positionStyles={positionStyles}
                isPlaying={isPlaying}
                toggleAudio={toggleAudio}
                replayAudio={replayAudio}
                alignStyle={audioBtnsAlignStyle}
            />
            <HoverBlock imageSrc={media.hoverImage} taskName={taskName}/>
        </div>
    );
};
