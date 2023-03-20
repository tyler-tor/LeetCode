/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let prod = 0;
    let sum = 0;
    let nums = n.toString().split('')
    
     for(let i = 0; i < nums.length; i++) {
         if(i === 0){
             prod = parseInt(nums[i])
         }else {
             prod *= parseInt(nums[i]);
         }
         sum += parseInt(nums[i]);
     };

    return prod - sum;
};