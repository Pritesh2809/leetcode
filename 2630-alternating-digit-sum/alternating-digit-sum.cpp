class Solution {
public:
    int alternateDigitSum(int n) {
        std::string s = std::to_string(n);
        long sum = 0;
        int mul = 1;
        for (const char c : s) {
            sum += (c - '0') * mul;
            mul *= -1;
        }
        return sum;
        
    }
};