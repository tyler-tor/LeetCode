/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            nums.unshift(nums.splice(i, 1))
        }
    };
    return nums;
};