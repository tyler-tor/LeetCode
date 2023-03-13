/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jArr = jewels.split('');
    let count = 0;
    
    for(let el of stones) {
        if(jArr.includes(el)){
            count += 1;
        }
    }
    return count;
};