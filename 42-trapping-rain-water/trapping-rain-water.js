var trap = function(height) {
    if (!height || height.length < 3) {
        return 0;
    }

    const n = height.length;
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);
    let water = 0;

    leftMax[0] = 0;
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
    }

   
    rightMax[n - 1] = 0;
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
    }

    for (let i = 0; i < n; i++) {
        const boundary = Math.min(leftMax[i], rightMax[i]);
        if (boundary > height[i]) {
            water += boundary - height[i];
        }
    }

    return water;
};
