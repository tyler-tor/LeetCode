/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let res = [];
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        let num1 = nums[i]
        for(let j = 0; j < nums.length; j++) {
            let num2 = nums[j];
            if(num2 < num1) {
                count += 1;
            }
        }
        res.push(count);
        count = 0;
    }
    return res;
};