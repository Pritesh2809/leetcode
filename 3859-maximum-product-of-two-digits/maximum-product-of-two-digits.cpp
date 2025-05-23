class Solution {
public:
    int maxProduct(int n) {
        int digits[10], count = 0;

        while (n > 0) {
            digits[count++] = n % 10;
            n /= 10;
        }

        int maxProd = 0;
        for (int i = 0; i < count; i++) {
            for (int j = i+1; j < count; j++) {
                maxProd = max(maxProd, digits[i] * digits[j]);
            }
        }

        return maxProd;
    }
};