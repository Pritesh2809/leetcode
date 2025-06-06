class Solution {
    public int maxProfit(int[] prices) {
        if (prices.length == 0) return 0;

        int hold = Integer.MIN_VALUE, sell = 0, cooldown = 0;

        for (int price : prices) {
            int prevSell = sell;
            sell = hold + price;
            hold = Math.max(hold, cooldown - price);
            cooldown = Math.max(cooldown, prevSell);
        }

        return Math.max(sell, cooldown);
    }
}
