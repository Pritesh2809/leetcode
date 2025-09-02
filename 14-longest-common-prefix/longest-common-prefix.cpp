class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        sort(strs.begin(),strs.end());
        int n = strs.size();
        string s ="";

            string s1 = strs[0];
            string s2 = strs[n-1];

        int size = min(s1.size(), s2.size()); 
         

        for(int i = 0;i<size;i++){
            if(s1[i]==s2[i]){
                s += s1[i];
            }
            else return s;
        }

        return s;
    }
};



// class Solution {
// public:
//     string longestCommonPrefix(vector<string>& strs) {
//         if (strs.empty()) return ""; 

//         sort(strs.begin(), strs.end()); 
//         int n = strs.size();

//         string s = "";
//         string s1 = strs[0];         
//         string s2 = strs[n - 1];     

//         int size = min(s1.size(), s2.size()); 

//         for (int i = 0; i < size; i++) {
//             if (s1[i] == s2[i]) {
//                 s += s1[i];
//             } else {
//                 break;
//             }
//         }

//         return s;
//     }
// };
