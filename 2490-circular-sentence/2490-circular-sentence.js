/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let splitted = sentence.split(' ');
    let last = splitted[splitted.length - 1]
    if(splitted[0][0] !== last[last.length - 1]) return false;
    
    for(let i = 0; i < splitted.length - 1; i++) {
        let curr = splitted[i];
        let next = splitted[i + 1];
        // console.log(curr, next)
        if(curr[curr.length - 1] !== next[0]) return false;
    };
    
    return true;
};