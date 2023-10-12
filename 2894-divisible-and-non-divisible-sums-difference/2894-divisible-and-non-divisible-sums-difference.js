/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let nonDiv = 0;
    let div = 0;
    
    for(let i = 1; i <= n; i++) {
        if(i % m === 0) {
            div += i;
        }else {
            nonDiv += i;
        };
    };
    
    return nonDiv - div;
};