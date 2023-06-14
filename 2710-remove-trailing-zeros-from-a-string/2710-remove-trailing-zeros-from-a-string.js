/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let split = num.split('');
    
    while(split[split.length - 1] === '0'){
        split.pop();
    };
    
    return split.join('')
};