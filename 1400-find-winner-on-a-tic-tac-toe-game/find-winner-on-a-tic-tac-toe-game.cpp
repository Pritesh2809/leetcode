class Solution {
public:
    string tictactoe(vector<vector<int>>& moves) {
        vector<int> rows(3, 0), cols(3, 0);
        int diag1 = 0, diag2 = 0, player = 1; 
        
        for (auto& move : moves) {
            int r = move[0], c = move[1];
            rows[r] += player;
            cols[c] += player;
            if (r == c) diag1 += player;
            if (r + c == 2) diag2 += player;
            
            if (abs(rows[r]) == 3 || abs(cols[c]) == 3 || abs(diag1) == 3 || abs(diag2) == 3)
                return player == 1 ? "A" : "B";
            
            player *= -1;
        }

        return moves.size() == 9 ? "Draw" : "Pending";
    }
};