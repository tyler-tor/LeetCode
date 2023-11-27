/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0;
    let countedNums = {};
    
    for(let num of nums) {
        if(!countedNums[num]){
            countedNums[num] = 1;
        }else {
            countedNums[num]++;
        };
    };
    
    for(let num of Object.keys(countedNums)){
        if(countedNums[num] === 1) {
            sum += parseInt(num);
        }
    };
    
    return sum;
};