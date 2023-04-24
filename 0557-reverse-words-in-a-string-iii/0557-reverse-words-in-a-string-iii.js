/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ');
    console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').reverse().join('')
    };
    
    return arr.join(' ')
};