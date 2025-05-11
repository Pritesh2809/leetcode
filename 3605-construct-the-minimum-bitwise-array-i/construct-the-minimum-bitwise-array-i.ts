function minBitwiseArray(nums: number[]): number[] {
    const ans: number[] = [];

    for (const n of nums) {
        let num = n;
        let ones = 0;

        while (num > 0 && num % 2 === 1) {
            ones += 1;
            num >>= 1;
        }

        if (ones === 0) {
            ans.push(-1);
            continue;
        }

        ans.push(n - 2 ** (ones - 1));
    }

    return ans;
}