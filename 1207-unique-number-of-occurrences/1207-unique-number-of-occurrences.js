/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let checkObj = {};
    
    for(let num of arr) {
        if(!checkObj[num]){
            checkObj[num] = 1;
        }else {
            checkObj[num]++
        };
    };
    let checkSet = new Set(Object.values(checkObj))
    // console.log([...checkSet.values()].sort(), Object.values(checkObj).sort() )
    return [...checkSet.values()].length === Object.values(checkObj).length;
};