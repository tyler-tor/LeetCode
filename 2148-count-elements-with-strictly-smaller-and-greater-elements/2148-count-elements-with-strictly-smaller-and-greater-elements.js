/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let count = 0;
    
    for(let num of nums) {
        if(num > min && num < max) count++;
    };
    
    return count
};