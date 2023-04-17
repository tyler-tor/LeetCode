/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let split = s.split('');
    let finalNum = 0;
    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    for(let i = 0; i < split.length; i++){
        let romNum = split[i];
        if(finalNum === 0) {
            finalNum += obj[romNum];
        }else {
            let prevNum = split[i - 1]
            if(prevNum === 'I' && (romNum === 'V' || romNum === 'X')) {
                finalNum -= obj[prevNum]
                finalNum -= 1;
            }else if (prevNum === 'X' && (romNum === 'L' || romNum === 'C')) {
                finalNum -= obj[prevNum]
                finalNum -= 10;
            }else if (prevNum === 'C' && (romNum === 'D' || romNum === 'M')) {
                finalNum -= obj[prevNum]
                finalNum -= 100;
            }
            finalNum += obj[romNum]
        }
        
    }
    
    return finalNum;
};

// console.log(romanToInt('MCMXCIV'))