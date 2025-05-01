var maximumPossibleSize = function(nums) {
    const stack = [];

        for (let num of nums) {
            if (stack.length && num < stack[stack.length - 1]) {
                continue; 
            }
            stack.push(num);
        }

        return stack.length;
};
