class Solution {
public:
    int rob(vector<int>& nums) {
        int n = nums.size();
        int prev = 0;
        int curr = nums[0];
        int next;
        
    for(int i = 1; i < n; i++) {
         next = max(curr, prev + nums[i]);
         prev = curr;
         curr = next;
    }

        return curr;

    }
};