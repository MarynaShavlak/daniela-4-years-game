export const getImageThresholds = (count, start, end) => {
    const step = (end - start) / (count - 1);
    return Array.from({ length: count }, (_, i) => start + i * step);
};
