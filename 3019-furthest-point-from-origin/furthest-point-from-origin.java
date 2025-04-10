class Solution {

    public static int furthestDistanceFromOrigin(String moves) {
        int left = 0, right = 0, underscore = 0;
        for (char move : moves.toCharArray())
            if (move == 'L') left++; 
            else if (move == 'R') right++; 
            else underscore++;
        return Math.abs(left - right) + underscore;
    }
}
