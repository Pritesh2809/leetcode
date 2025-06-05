class Solution {
public:
    int titleToNumber(string columnTitle) {
        int result = 0;
        for (char c : columnTitle) {
            result = result * 26 + (c - 'A' + 1);
        }
        return result;
    }
    
    string convertToTitle(int columnNumber) {
        string result = "";
        while (columnNumber > 0) {
            columnNumber--; 
            result += (char)('A' + columnNumber % 26);
            columnNumber /= 26;
        }
        reverse(result.begin(), result.end());
        return result;
    }
};
