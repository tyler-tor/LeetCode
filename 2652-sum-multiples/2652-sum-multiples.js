/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let num = 0;
    
    for(let i = 3; i <= n; i++){
        if(i % 3 === 0 || i % 5 === 0 || i % 7 === 0) num += i;
    };
    
    return num;
};