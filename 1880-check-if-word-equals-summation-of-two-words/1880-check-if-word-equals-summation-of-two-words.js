/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let obj = {
        'a': '0',
        'b': '1',
        'c': '2',
        'd': '3',
        'e': '4',
        'f': '5',
        'g': '6',
        'h': '7',
        'i': '8',
        'j': '9'
    };
    let firstSum = '';
    let secSum = '';
    let targetSum = ''
    
    for(let letter of firstWord) {
        firstSum += obj[letter]
    };
    
    for(let letter of secondWord) {
        secSum += obj[letter]
    };
    
    for(let letter of targetWord) {
        targetSum += obj[letter];
    };
    
    return parseInt(targetSum) === (parseInt(firstSum) + parseInt(secSum))
};


// 'k': 10,
        // 'l':11,
        // 'm': 12,
        // 'n': 13,
        // 'o': 14,
        // 'p':15,
        // 'q':16,
        // 'r':17,
        // 's':18,
        // 't':19,
        // 'u':20,
        // 'v':21,
        // 'w':22,
        // 'x': 23,
        // 'y':24,
        // 'z':25