class Solution {
public:
    bool isIsomorphic(string s, string t) {
        if (s.length() != t.length()) return false;
        
        unordered_map<char, char> o, tw;
        
        for (int i = 0; i < s.length(); i++) {
            char sc = s[i], tc = t[i];

            if (o.find(sc) != o.end() && o[sc] != tc) return false;
            if (tw.find(tc) != tw.end() && tw[tc] != sc) return false;

            o[sc] = tc;
            tw[tc] = sc;
        }
        
        return true;
    }
};
