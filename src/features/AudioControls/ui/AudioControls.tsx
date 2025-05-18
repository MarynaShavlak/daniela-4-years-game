import React, { CSSProperties } from 'react';
import { IonIcon } from '@ionic/react';
import { playOutline, pauseOutline, refreshOutline } from 'ionicons/icons';
import clx from './AudioControls.module.css';
import {Button} from "../../../shared/ui/Button/Button";

interface AudioControlsProps {
    isPlaying: boolean;
    onToggle: () => void;
    onReplay: () => void;
    alignStyle?: CSSProperties;
}

export const AudioControls = (props: AudioControlsProps) => {
    const { isPlaying, onToggle, onReplay, alignStyle }  = props;
    return (
    <div className={clx.audioBtnsList} style={alignStyle}>
        <Button className={clx.audioButton} onClick={onToggle}>
            <IonIcon icon={isPlaying ? pauseOutline : playOutline} />
        </Button>
        <Button className={clx.audioButton} onClick={onReplay}>
            <IonIcon icon={refreshOutline} />
        </Button>
    </div>
)};
