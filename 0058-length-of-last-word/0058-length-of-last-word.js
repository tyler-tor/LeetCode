/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.split(' ');
    console.log(words)
    while(words[words.length - 1] === ''){
        words.pop()
    }
    let last = words.pop();
    return last.length
};