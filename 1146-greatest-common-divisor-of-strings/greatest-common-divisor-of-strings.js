var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";
    const gcdLength = (a, b) => b === 0 ? a : gcdLength(b, a % b);
    return str1.substring(0, gcdLength(str1.length, str2.length));
};