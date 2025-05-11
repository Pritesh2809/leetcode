function minimumSum(num: number): number {
    let digits = num.toString().split('').map(Number).sort((a, b) => a - b);
    return (digits[0] * 10 + digits[2]) + (digits[1] * 10 + digits[3]);
}