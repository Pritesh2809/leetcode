var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    let dp1 = 0, dp2 = 0;

    for (let i = 2; i <= n; i++) {
        let current = Math.min(dp1 + cost[i - 1], dp2 + cost[i - 2]);
        dp2 = dp1;
        dp1 = current;
    }

    return dp1;
};