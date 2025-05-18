export const getImageThresholds = (count: number, start: number, end: number) => {
    const step = (end - start) / (count - 1);

    return Array.from({ length: count }, (_, i) => start + i * step);
};




