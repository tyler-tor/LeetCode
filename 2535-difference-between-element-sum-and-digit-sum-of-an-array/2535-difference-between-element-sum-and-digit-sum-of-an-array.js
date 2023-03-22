/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elSum = 0;
    let digSum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 9) {
            let num = nums[i].toString().split('');
            let total = num.reduce((n1, n2) => parseInt(n1) + parseInt(n2));
            digSum += total;
        }else {
            digSum += nums[i];
        }
        elSum += nums[i]
    };
    
    return elSum - digSum;
};