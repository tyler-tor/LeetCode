/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let res = [];
    let count = 1;
    // res.length = num_people
    let i = 0;
    
    while(candies > 0 || res.length < num_people) {
        if(i >= num_people) i = 0;
        if(count > candies) count = candies
        if(res[i]){
            res[i] += count;
        }else {
            res[i] = count;
        }
        
        candies -= count;
        count++;
        i++
    };
    
    return res;
};