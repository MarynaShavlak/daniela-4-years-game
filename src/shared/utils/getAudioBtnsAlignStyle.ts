import { Position } from '@/shared/types/position';


export function getAudioBtnsAlignStyle(controlsPos?: Position) {
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
