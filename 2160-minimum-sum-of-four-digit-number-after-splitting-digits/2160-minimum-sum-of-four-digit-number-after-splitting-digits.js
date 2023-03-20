/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let nums = num.toString().split('').sort();
    let num1 = [];
    let num2 = [];
    
    for(let i = 0; i < nums.length; i++) {
        if(i === 0 || i === 2) {
            num1.push(nums[i]);
        }else {
            num2.push(nums[i]);
        }
    };
    
    let n1 = parseInt(num1.join(''));
    let n2 = parseInt(num2.join(''));
    return n1 + n2
};