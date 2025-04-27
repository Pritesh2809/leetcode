function findWords(words) {
    const rows = [
        new Set("qwertyuiop"),
        new Set("asdfghjkl"),
        new Set("zxcvbnm")
    ];

    return words.filter(word => {
        const lowerWord = word.toLowerCase();
        return rows.some(row => [...lowerWord].every(char => row.has(char)));
    });
}
