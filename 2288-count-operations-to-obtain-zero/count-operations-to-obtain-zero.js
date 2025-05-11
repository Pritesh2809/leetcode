function countOperations(num1, num2) {
    let count = 0;
    while (num1 && num2) {
        if (num1 < num2) [num1, num2] = [num2, num1]; 
        count += Math.floor(num1 / num2);
        num1 %= num2;
    }
    return count;
}