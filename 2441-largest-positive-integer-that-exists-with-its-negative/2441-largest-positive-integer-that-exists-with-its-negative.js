/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let max = -1;
    
    for(let num of nums) {
        if(num > max && nums.includes(-num)){
            max = num
        }
    }
    // console.log(max)
    return max;
};

// findMaxK([-1, 10, 6, 7, -7, 1])