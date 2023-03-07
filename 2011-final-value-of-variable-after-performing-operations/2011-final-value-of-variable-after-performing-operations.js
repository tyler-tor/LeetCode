/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let res = 0;
    while(operations.length){
        let pop = operations.pop();
        let op = pop.split('X').join('')
        if(op === '--'){
            res -= 1;
        }else{
            res += 1;
        }
    }
    return res
};