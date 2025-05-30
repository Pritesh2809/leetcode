var maxWidthOfVerticalArea = function(points) {
    if (!points || points.length < 2) {
        return 0;
    }

    points.sort((a, b) => a[0] - b[0]);

    let maxWidth = 0;

    
    for (let i = 1; i < points.length; i++) {
        const currentWidth = points[i][0] - points[i - 1][0];
        maxWidth = Math.max(maxWidth, currentWidth);
    }

    return maxWidth;
};