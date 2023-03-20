/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];
    // let length = nums.length > index.length ? nums.length : index.length;
    
    for(let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i])
    }
    
    return target;
};