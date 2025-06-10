var canConstruct = function(ransomNote, magazine) {
    const count = new Map();

    for (let char of magazine) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (let char of ransomNote) {
        if (!count.get(char)) return false;
        count.set(char, count.get(char) - 1);
    }

    return true;
};