/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0;
    let nums = num.toString().split('');
    
    for(let i = 0; i < nums.length; i++) {
        if(num % parseInt(nums[i]) === 0) {
            count++
        }
    }
    
    return count
};