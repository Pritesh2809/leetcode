/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let n = s.length;
    let low = 0;
    let high = n;
    let result = [];

    for (let char of s) {
        if (char === 'I') {
            result.push(low);
            low++;
        } else {
            result.push(high);
            high--;
        }
    }

    result.push(low); 
    return result;
};