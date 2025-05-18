// List of supported object names
export const OBJECTS = [
    'bear',
    'behemoth',
    'cat',
    'car',
    'crab',
    'dinosaur',
    'dog',
    'fox',
    'frog',
    'ghost',
    'icecream',
    'mouse',
    'pig',
    'sheep',
    'snail',
    'tree',
    'turtle',
    'unicorn',
] as const;

export type ObjectName = typeof OBJECTS[number];

export type MediaType = 'video' | 'audio' | 'hoverImage';

export type MediaObject = {
    [key in MediaType]?: string | null;
};


export type ObjectsMedia = {
    [key in ObjectName]: MediaObject;
};


const MEDIA_TYPES: Record<MediaType, (name: string) => string> = {
    video: (name: string) => require(`../assets/video/tasks/${name}.mp4`),
    audio: (name: string) => require(`../assets/audio/tasks/${name}.m4a`),
    hoverImage: (name: string) => require(`../assets/images/hover/${name}.png`),
};


const generateMediaObject = (): ObjectsMedia => {
    const mediaObject = {} as ObjectsMedia;

    OBJECTS.forEach((objectName) => {
        mediaObject[objectName] = {};

        Object.keys(MEDIA_TYPES).forEach((mediaType) => {
            const typedMediaType = mediaType as MediaType;

            try {
                mediaObject[objectName][typedMediaType] = MEDIA_TYPES[typedMediaType](objectName);
            } catch (error: any) {
                console.warn(`Could not load ${typedMediaType} for ${objectName}: ${error.message}`);
                mediaObject[objectName][typedMediaType] = null;
            }
        });
    });

    return mediaObject;
};

const objectsMedia: ObjectsMedia = generateMediaObject();


export const getObjectMedia = (objectName: ObjectName): MediaObject | null => {
    if (!objectsMedia[objectName]) {
        console.error(`Media for ${objectName} not found`);
        return null;
    }
    return objectsMedia[objectName];
};


export const getObjectMediaByType = (
    objectName: ObjectName,
    mediaType: MediaType
): string | null => {
    const objectMedia = objectsMedia[objectName];

    if (!objectMedia) {
        console.error(`Media for ${objectName} not found`);
        return null;
    }

    const media = objectMedia[mediaType];

    if (!media) {
        console.error(`Media type ${mediaType} for ${objectName} not found`);
        return null;
    }

    return media;
};

export default objectsMedia;
