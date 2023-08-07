/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    let obj = {};
    let j = 0;
    
    for(let i = 0; i < key.length; i++) {
       let letter = key[i];
        if(!obj[letter] && letter !== ' '){
            obj[letter] = alpha[j];
            j++
        }
    };
    
    let res = '';
    
    for(let letter of message) {
        if(letter === ' ') {
            res += ' '
        }else {
            res += obj[letter]
        }
    };
    
    return res;
};