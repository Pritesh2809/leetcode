var rotate = function(nums, k) {
    let len = nums.length;
    k = k % len;
    
    nums.reverse();

    nums.splice(0, k, ...nums.slice(0, k).reverse());

    nums.splice(k, len-k, ...nums.slice(k).reverse());
};
