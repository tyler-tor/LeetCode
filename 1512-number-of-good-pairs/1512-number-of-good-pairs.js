/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        let num1 = nums[i]
        for(let j = (i + 1); j < nums.length; j++) {
            let num2 = nums[j];
            if(num1 === num2) {
                count += 1;
            }
        }
    }
        return count;
};