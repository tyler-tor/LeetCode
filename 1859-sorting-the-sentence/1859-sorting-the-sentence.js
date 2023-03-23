/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let words = s.split(' ');
    let res = [];
    
    for(let word of words) {
        let ind = word[word.length - 1] - 1;
        res[ind] = word.slice(0, word.length - 1)
    }
    
    return res.join(' ');
};