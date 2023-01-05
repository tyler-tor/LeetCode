/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let string = `${x}`;
    let arr = string.split('');
    if (arr.join() === arr.reverse().join()) return true
    return false
};