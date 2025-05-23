class Solution {
public:
    int minimumBoxes(vector<int>& apple, vector<int>& capacity) {
        int totalApples = 0;
        for (int a : apple) {
            totalApples += a;  
        }

        sort(capacity.rbegin(), capacity.rend()); 

        int boxesUsed = 0, storedApples = 0;
        for (int cap : capacity) {
            storedApples += cap;
            boxesUsed++;
            if (storedApples >= totalApples) {
                break; 
            }
        }

        return boxesUsed;
    }
};
