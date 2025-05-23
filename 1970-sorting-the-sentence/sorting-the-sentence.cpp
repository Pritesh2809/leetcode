
class Solution {
public:
    string sortSentence(string s) {
        vector<pair<int, string>> words; 
        stringstream ss(s); 
        string word;


        while (ss >> word) {
            int pos = word.back() - '0'; 
            word.pop_back(); 
            words.push_back({pos, word}); 
        }

       
        sort(words.begin(), words.end());

       
        string result;
        for (auto& w : words) {
            if (!result.empty()) result += " "; 
            result += w.second; 
        }

        return result; 
    }
};