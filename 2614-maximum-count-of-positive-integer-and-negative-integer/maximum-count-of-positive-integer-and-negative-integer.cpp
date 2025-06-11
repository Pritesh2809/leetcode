class Solution {
public:
    int maximumCount(vector<int>& nums) {
        int pass = 0;
        int nege = 0;

        for (int i = 0; i < nums.size();i++){
            if (nums[i] < 0){
                pass++;
            }
            if (nums[i] > 0){
                nege++;
            }
        }

        return max(pass,nege);
    }
};