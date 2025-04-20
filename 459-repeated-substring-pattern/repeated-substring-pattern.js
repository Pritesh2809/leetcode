var repeatedSubstringPattern = function(s) {
    const n = s.length;
    for (let len = 1; len <= Math.floor(n / 2); len++) {
        if (n % len === 0) {
            const numRepeats = n / len;
            const substring = s.substring(0, len);
            let repeatedString = "";
            for (let i = 0; i < numRepeats; i++) {
                repeatedString += substring;
            }
            if (repeatedString === s) {
                return true;
            }
        }
    }
    return false;
};
