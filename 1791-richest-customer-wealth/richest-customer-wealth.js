function maximumWealth(accounts) {
    let maxWealth = 0; 
  
    for (let customer of accounts) {
        const customerWealth = customer.reduce((sum, account) => sum + account, 0); 
        maxWealth = Math.max(maxWealth, customerWealth); 
    }

    return maxWealth;
}
