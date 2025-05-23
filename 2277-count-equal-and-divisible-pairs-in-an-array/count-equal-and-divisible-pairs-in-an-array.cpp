class Solution {
public:
    int countPairs(vector<int>& nums, int k) {

        int count = 0;
        int s = size(nums);
        
        for (int i=0;i<s;i++){
            for (int j=i+1;j<s;j++){

                if(nums[i]==nums[j] && (i*j)%k ==0){
                    count++;
                }
            }
        }
        return count;
    }
};