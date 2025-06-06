class Solution {
public:
    int mostFrequentEven(vector<int>& nums) {
        unordered_map<int, int> f;
        int maxFreq = 0, result = -1;
        
        for(int num : nums){
            if (num % 2 == 0) {
                f[num]++;
                if (f[num] > maxFreq || (f[num] == maxFreq && num < result )) {
                    maxFreq = f[num];
                    result = num;

                }
            }
        }
        return result;
    }
};