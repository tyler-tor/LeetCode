/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let prod = nums[0];
    if(nums.includes(0)) return 0;
    
    for(let i = 1; i < nums.length; i++) {
        prod *= nums[i];
    };
    
    if(prod === 0) return 0;
    return prod > 0 ? 1 : -1;
};