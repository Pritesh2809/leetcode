var finalPrices = function(prices) {
    const n = prices.length;
    const finalPrices = [...prices]; 
    const stack = []; 

    for (let i = 0; i < n; i++) {
       
        while (stack.length > 0 && prices[i] <= prices[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            finalPrices[prevIndex] -= prices[i]; 
        }
        stack.push(i); 
    }

    return finalPrices;
};
