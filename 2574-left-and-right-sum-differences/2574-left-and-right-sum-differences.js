/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    const left = [];
    const right = [];
    const res = [];
    let l = 0;
    let r = 0
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i - 1] === undefined) left.push(0);
        if(nums[i - 1]){
            l += nums[i - 1]
            left.push(l)
        }
        if(nums[i + 1] === undefined && nums[i - 1] === undefined) {
            res.push(0);
        }
    };
    
    for(let i = nums.length - 1; i > 0; i--) {
        let num = nums[i]
        if(nums[i + 1] === undefined) right.push(0);
        r += num
        right.push(r);
    }
    for(let n of right){
        let pop = left.pop();
        if(pop > n) res.push(pop - n);
        if(n > pop) res.push(n - pop);
    }
    
    return res.reverse();
};