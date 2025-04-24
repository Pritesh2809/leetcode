var isPrefixString = function(s, words) {
    let prefix = "";
    for (const word of words) {
        prefix += word;
        if (prefix === s) {
            return true;
        }
        if (s.startsWith(prefix)) {
            continue;
        } else {
            return false;
        }
    }
    return false;
};