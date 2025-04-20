var makeEqual = function(words) {
    if (!words || words.length === 0) {
        return true;
    }

    const charCounts = {};
    for (const word of words) {
        for (const char of word) {
            charCounts[char] = (charCounts[char] || 0) + 1;
        }
    }

    const numWords = words.length;
    for (const char in charCounts) {
        if (charCounts[char] % numWords !== 0) {
            return false;
        }
    }

    return true;
};
