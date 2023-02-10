/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.split(' ');
    while(words[words.length - 1] === ''){
        words.pop()
    }
    return words.pop().length;
};