/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let splitSentence = sentence.split(' ')
    if(splitSentence.length < 2) {
        return splitSentence[0][0] === splitSentence[0][splitSentence[0].length - 1] ? true : false;
    };

    let i = 0; 
    let j = 1;
    let first;
    let last;
    
    while(j <= splitSentence.length - 1) {
        first = splitSentence[i].split('');
        last = splitSentence[j].split('')

        if(first[first.length - 1] !== last[0]) return false;
        
        i++;
        j++;
    };
    
    return last[last.length - 1] === splitSentence[0][0] ? true : false;
};