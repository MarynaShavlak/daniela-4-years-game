type ControlsPosition =
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';

export function getAudioBtnsAlignStyle(controlsPos: ControlsPosition) {
    switch (controlsPos) {
        case 'top-left':
        case 'bottom-left':
            return { alignItems: 'flex-start' };
        case 'top-right':
        case 'bottom-right':
            return { alignItems: 'flex-end' };
        default:
            return {};
    }
}
