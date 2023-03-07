/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const res = [];
    
    for(let i = 0; n < nums.length; i++) {
        let num1 = nums[i];
        let num2 = nums[n];
        res.push(num1);
        res.push(num2);
        n++
    };
    
    return res;
};