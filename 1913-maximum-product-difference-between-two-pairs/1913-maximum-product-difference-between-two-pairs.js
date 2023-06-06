/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let sorted = nums.sort((a,b) => a - b);
    let min = sorted[0] * sorted[1];
    let max = sorted[sorted.length - 1] * sorted[sorted.length - 2];
    // console.log(sorted)
    return max - min;
};

maxProductDifference([1,6,7,5,2,4,10,6,4])