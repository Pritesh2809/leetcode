class Solution {
public:
    vector<int> rowAndMaximumOnes(vector<vector<int>>& mat) {
     int count, ansY=0, ansX=0;
        for(int i=0; i<mat.size();i++){
            count = 0;
            for(int j=0; j<mat[0].size();j++){
              count+=mat[i][j];
            }
            if(count>ansY){
                ansY=count;
                ansX=i;
            }
        }

        return {ansX,ansY};

    }
};