/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let accum = 0;
    for(let i = 0; i < nums.length; i++) {
        accum += nums[i];
        nums[i] = accum;
    };
    return nums;
};