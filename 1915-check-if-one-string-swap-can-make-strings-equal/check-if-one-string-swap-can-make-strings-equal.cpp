class Solution {
public:
    bool areAlmostEqual(string s1, string s2) {
        if (s1 == s2) return true;

        int first = 0, second = 0, count = 0;

        for (int i = 0; i < s1.length(); i++) {
            if (s1[i] != s2[i]) {
                count++;
                if (count > 2) return false; 

                if (first == 0) first = i;
                else second = i;
            }
        }

        return count == 2 && s1[first] == s2[second] && s1[second] == s2[first];
    }
};