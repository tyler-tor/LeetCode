/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let split = s.split('');
    let count = 0;
    
    for(let i = 0; i < split.length; i++) {
        if(split[i] === letter) {
            count++;
        };
    };
    
    return Math.floor(count / s.length * 100);
};