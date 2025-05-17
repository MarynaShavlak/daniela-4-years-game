import React from "react";
import clx from './TaskControls.module.css';

import { Button } from "../../../../shared/ui/Button/Button";
import { AudioControls } from "../../../../features/AudioControls/ui/AudioControls";

export const TaskControls = ({
                                 handleToAllTasksClick,
                                 positionStyles,
                                 isPlaying,
                                 toggleAudio,
                                 replayAudio,
                                 alignStyle
                             }) => (
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
