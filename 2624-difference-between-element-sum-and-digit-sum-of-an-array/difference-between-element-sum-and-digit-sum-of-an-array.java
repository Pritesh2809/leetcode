class Solution {
    public int differenceOfSum(int[] nums) {
        int result = 0;
        for (int v : nums) {
            int sumOfDigits = v / 1000 + (v / 100) % 10 + (v / 10) % 10 + v % 10;
            result += v - sumOfDigits;
        }
        return result;
    }
}
