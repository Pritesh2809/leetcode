class ProductOfNumbers {
    constructor() {
        this.prefixProducts = [1];
    }

    add(num) {
        if (num === 0) {
            this.prefixProducts = [1]; 
        } else {
            const lastProduct = this.prefixProducts[this.prefixProducts.length - 1];
            this.prefixProducts.push(lastProduct * num);
        }
    }

    getProduct(k) {
        if (k >= this.prefixProducts.length) {
            return 0;
        }
        const n = this.prefixProducts.length;
        return this.prefixProducts[n - 1] / this.prefixProducts[n - 1 - k];
    }
}
