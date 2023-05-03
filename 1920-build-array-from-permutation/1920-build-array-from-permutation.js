/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let res = [];
    
    for(let i = 0; i < nums.length; i++) {
        let num = nums[nums[i]]
        res.push(num)
    }
    
    return res;
};