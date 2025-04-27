var commonFactors = function(a, b) {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y); 
    let g = gcd(a, b);
    let count = 0;

    for (let i = 0; i <= Math.sqrt(g); i++) {
        if (g % i === 0) {
            count++; 
            if (i !== g / i) count++; 
        }
    }

    return count;
};
