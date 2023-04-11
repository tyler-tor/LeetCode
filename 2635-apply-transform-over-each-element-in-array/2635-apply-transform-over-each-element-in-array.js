/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        let n = arr[i]
        res.push(fn(n, i));
    };
    return res
};