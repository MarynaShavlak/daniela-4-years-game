const OBJECTS = [
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
    'unicorn'
];


const MEDIA_TYPES = {
    video: (name) => require(`../assets/video/tasks/${name}.mp4`),
    audio: (name) => require(`../assets/audio/tasks/${name}.m4a`),
    hoverImage: (name) => require(`../assets/images/hover/${name}.png`)
};


const generateMediaObject = () => {
    const mediaObject = {};

    OBJECTS.forEach(object => {
        mediaObject[object] = {};

        Object.keys(MEDIA_TYPES).forEach(mediaType => {
            try {
                mediaObject[object][mediaType] = MEDIA_TYPES[mediaType](object);
            } catch (error) {
                console.warn(`Could not load ${mediaType} for ${object}: ${error.message}`);
                      mediaObject[object][mediaType] = null;
            }
        });
    });

    return mediaObject;
};


const objectsMedia = generateMediaObject();


export const getObjectMedia = (objectName) => {
    if (!objectsMedia[objectName]) {
        console.error(`Media for ${objectName} not found`);
        return null;
    }
    return objectsMedia[objectName];
};


export const getObjectMediaByType = (objectName, mediaType) => {
    if (!objectsMedia[objectName]) {
        console.error(`Media for ${objectName} not found`);
        return null;
    }

    if (!objectsMedia[objectName][mediaType]) {
        console.error(`Media type ${mediaType} for ${objectName} not found`);
        return null;
    }

    return objectsMedia[objectName][mediaType];
};

export default objectsMedia;
