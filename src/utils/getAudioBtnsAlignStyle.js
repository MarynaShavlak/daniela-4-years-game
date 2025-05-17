
export function getAudioBtnsAlignStyle(controlsPos) {
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
