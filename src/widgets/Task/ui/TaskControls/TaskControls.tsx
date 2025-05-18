import React, { CSSProperties } from "react";
import clx from './TaskControls.module.css';
import { Button } from "../../../../shared/ui/Button/Button";
import { AudioControls } from '../../../../features/AudioControls/ui/AudioControls';
import { Position } from '@/shared/types/position';



interface TaskControlsProps {
    handleToAllTasksClick: () => void;
    positionStyles: CSSProperties;
    isPlaying: boolean;
    toggleAudio: () => void;
    replayAudio: () => void;
    alignStyle: CSSProperties;
}

export const TaskControls = (props: TaskControlsProps) => {
const {
    handleToAllTasksClick,
    positionStyles,
    isPlaying,
    toggleAudio,
    replayAudio,
    alignStyle
}= props;
    return (
        <div className={clx.controlBtnsList} style={positionStyles}>
            <Button
                onClick={handleToAllTasksClick}
                className={clx.toAllTasksButton}
            >
                Всі завдання
            </Button>
            <AudioControls
                isPlaying={isPlaying}
                onToggle={toggleAudio}
                onReplay={replayAudio}
                alignStyle={alignStyle}
            />
        </div>
    );
}
