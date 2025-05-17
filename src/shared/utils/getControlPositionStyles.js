export function getControlPositionStyles(controlsPos) {
    switch (controlsPos) {
        case 'top-left':
            return { position: 'absolute', top: '10px', left: '10px' };
        case 'top-right':
            return { position: 'absolute', top: '10px', right: '10px' };
        case 'bottom-left':
            return { position: 'absolute', bottom: '10px', left: '10px' };
        case 'bottom-right':
            return { position: 'absolute', bottom: '10px', right: '10px' };
        default:
            return { position: 'absolute', top: '10px', left: '10px' };
    }
}
