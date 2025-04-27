var maxNumberOfBalloons = function(text) {
    const count = {};
    for (let char of text) {
        count[char] = (count[char] || 0) + 1;
    }
    
    return Math.min(
        count['b'] || 0,
        count['a'] || 0,
        Math.floor((count['l'] || 0) / 2),
        Math.floor((count['o'] || 0) / 2),
        count['n'] || 0
    );
};
