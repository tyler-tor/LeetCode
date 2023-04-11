/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let arr = [first];//build return array with first as the first value    
    let n = 0; //n is 0 as a place holder integer
    
    for(let i = 0; i < encoded.length; i++) {// loop through the encoded array
        n = encoded[i] ^ first;//xor operator to find the encoded values which is the first element given and your current                                //el in the encoded array
        arr.push(n);//append the xor integer to your return arry
        first = n; //reasign the next element in the return array to your first value to keep going through the encoded                       //array
    };
    
    return arr;
};