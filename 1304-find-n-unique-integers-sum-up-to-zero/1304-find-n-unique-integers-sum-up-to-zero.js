/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    if(n === 1){
        return [0]
    }
    
    let res = [];
    let negInt = 0;
    let posInt = 0;
    
    if(n % 2 !== 0) {
       res = [posInt]     
    }else {
        res = [++posInt]
    }
    
    while(res.length < n) {
        if(n % 2 !== 0) {
            res.push(--negInt);
            res.push(++posInt);
        }else {
            if(res.length === 1) {
                res.push(--negInt)
            }else {
                res.push(--negInt);
                res.push(++posInt);
            }
        }
    }
    // console.log(res)
    return res;
};

// console.log(sumZero(4))