var removeOuterParentheses = function(s) {
    let result = "";
    let openCount = 0;
    let primitiveStart = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            openCount++;
        } else if (s[i] === ')') {
            openCount--;
        }

        if (openCount === 0) {
            if (i > primitiveStart) {
                result += s.substring(primitiveStart + 1, i);
            }
            primitiveStart = i + 1; 
        }
    }

    return result;
};