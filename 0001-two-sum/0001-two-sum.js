/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = {};

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let difference = target - num;
        if (difference in res) {
            return [i, res[difference]]
        }else {
            res[num] = i;
            continue
        }
    }
    // return res;
};