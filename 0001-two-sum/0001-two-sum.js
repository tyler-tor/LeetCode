/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = [];

    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = 0; j < nums.length; j++) {
            if (i != j) {
                if(nums[i] + nums[j] === target) {
                res.push(i, j)
                return res
                }
            }
        }
    }
};