var uniqueMorseRepresentations = function(words) {
    const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
                   "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-",
                   "..-", "...-", ".--", "-..-", "-.--", "--.."];
    
    const transformations = new Set();
    
    for (const word of words) {
        let morseWord = "";
        for (const char of word) {
            morseWord += morse[char.charCodeAt(0) - 97]; 
        }
        transformations.add(morseWord);
    }
    
    return transformations.size;
};
