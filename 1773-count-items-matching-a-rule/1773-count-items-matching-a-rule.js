/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    
    for(let i = 0; i < items.length; i++) {
        if(ruleKey === 'type') {
            if(items[i][0] === ruleValue) count++
        }else if(ruleKey === 'color') {
            if(items[i][1] === ruleValue) count++
        }else {
            if(items[i][2] === ruleValue) count++
        }
    };
    
    return count
};