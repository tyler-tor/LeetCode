/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let div = min;
    // console.log(min,max,div)
    
    while(div > 0) {
        if(min % div === 0 && max % div === 0) {
            return div;
        }
         // console.log(div)
        
        div--
    }
};