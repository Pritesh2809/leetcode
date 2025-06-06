class Solution {
public:
    int countPairs(vector<int>& deliciousness) {
        const int MOD = 1e9 + 7;
        map<int, int> freq; 
        int count = 0;

        for (int num : deliciousness) {
            for (int power = 1; power <= (1 << 21); power *= 2) {
                int needed = power - num;  
                if (freq.find(needed) != freq.end()) {
                    count = (count + freq[needed]) % MOD;
                }
            }
            freq[num]++;
        }

        return count;
    }
};
